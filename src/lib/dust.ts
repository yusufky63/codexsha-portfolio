/**
 * Dust engine.
 *
 * Any element marked `data-dust-root` can be turned into grains: its text, the
 * borders marked `data-dust-frame` and the canvases marked `data-dust-image`
 * are rasterised into one overlay canvas, every opaque device pixel becomes a
 * grain, and the real DOM is left in place but unpainted until the grains have
 * settled back. At rest the overlay is a pixel copy of the DOM, so the swap in
 * and out is not visible.
 */

const ROOT = "[data-dust-root]";
const SKIP = "[data-dust-skip]";
const FRAME = "[data-dust-frame]";
const IMAGE = "[data-dust-image]";

type Mode = "stir" | "burst" | "intro";

/** CSS px of canvas around the root, so grains have somewhere to fly. */
const BLEED: Record<Mode, number> = { stir: 64, burst: 72, intro: 150 };
/** CSS px the grains are thrown from home when a root starts scattered. */
const SPREAD: Record<Mode, number> = { stir: 0, burst: 64, intro: 210 };

const RADIUS = 92;
const STEP_MS = 1000 / 60;
const MAX_PIXELS = 9_000_000;
const MAX_GRAINS = 420_000;

const PUSH = 2.1;
const WIND = 0.3;
const SCATTER = 2.2;
const LIFT = 0.45;
const DRIFT = 0.5;
const DECAY = 0.955;
const DAMPING = 0.8;
const FADE = 0.7;
const FADE_DISTANCE = 120;

type Instance = {
  awake: number;
  stop: () => void;
};

type TextStyle = {
  font: string;
  color: string;
  spacing: string;
  spaced: boolean;
  transform: string;
  ascent: number;
  descent: number;
};

type Clip = {
  left: number;
  top: number;
  right: number;
  bottom: number;
  textRight: number;
  ellipsis: boolean;
};

type Word = {
  start: number;
  end: number;
  rect: DOMRect;
};

type Shot = {
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  image: ImageData;
  width: number;
  height: number;
  dpr: number;
  offsetX: number;
  offsetY: number;
  rootWidth: number;
  rootHeight: number;
  count: number;
  homeX: Float32Array;
  homeY: Float32Array;
  color: Uint32Array;
  text: Element[];
  frames: Element[];
  images: Element[];
};

const instances = new Map<HTMLElement, Instance>();
const cooldown = new WeakMap<HTMLElement, number>();
const listeners = new Set<(awake: number) => void>();
const pointer = { x: -1e6, y: -1e6, movedAt: 0, fine: false };

/**
 * The visitor's own choice (html[data-dust]) wins; without one the effect follows
 * the system's reduced-motion setting.
 */
export function dustEnabled() {
  const choice = document.documentElement.getAttribute("data-dust");
  if (choice === "on") return true;
  if (choice === "off") return false;
  return !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/** Put every grain back and hand the page to the DOM again. */
export function settleAll() {
  for (const instance of Array.from(instances.values())) instance.stop();
}

function snap(value: number, dpr: number) {
  return Math.round(value * dpr) / dpr;
}

function publish() {
  let awake = 0;
  for (const instance of instances.values()) awake += instance.awake;
  for (const listener of listeners) listener(awake);
}

/** Sticky and fixed roots sit above the page layer, so their grains must too. */
function layerFor(root: HTMLElement) {
  let level = "page";
  for (let node: HTMLElement | null = root; node && node !== document.body; node = node.parentElement) {
    const position = getComputedStyle(node).position;
    if (position === "sticky" || position === "fixed") {
      level = "top";
      break;
    }
  }

  let layer = document.querySelector<HTMLElement>(`.dust-layer[data-level="${level}"]`);
  if (!layer) {
    layer = document.createElement("div");
    layer.className = "dust-layer";
    layer.dataset.level = level;
    layer.setAttribute("aria-hidden", "true");
    document.body.appendChild(layer);
  }
  return layer;
}

function belongsTo(element: Element, root: HTMLElement) {
  return element.closest(ROOT) === root && !element.closest(SKIP);
}

function hasRunningAnimation(root: HTMLElement) {
  if (typeof root.getAnimations !== "function") return false;
  return root
    .getAnimations({ subtree: true })
    .some((animation) => animation instanceof CSSAnimation && animation.playState === "running");
}

/* ---------- Capture ---------- */

function paintFrames(ctx: CanvasRenderingContext2D, root: HTMLElement, originX: number, originY: number, dpr: number) {
  const painted: Element[] = [];
  const candidates = Array.from(root.querySelectorAll<HTMLElement>(FRAME)).filter((element) => belongsTo(element, root));
  if (root.matches(FRAME)) candidates.unshift(root);

  for (const element of candidates) {
    const style = getComputedStyle(element);
    const border = parseFloat(style.borderTopWidth);
    const uniform =
      border > 0 &&
      style.borderTopStyle === "solid" &&
      style.borderRightWidth === style.borderTopWidth &&
      style.borderBottomWidth === style.borderTopWidth &&
      style.borderLeftWidth === style.borderTopWidth &&
      style.borderRightColor === style.borderTopColor &&
      style.borderBottomColor === style.borderTopColor &&
      style.borderLeftColor === style.borderTopColor;
    if (!uniform) continue;

    const rect = element.getBoundingClientRect();
    // Browsers snap borders down to whole device pixels; a canvas stroke has to do the same to line up.
    const line = Math.max(1, Math.floor(border * dpr));
    const x0 = Math.round((rect.left - originX) * dpr);
    const y0 = Math.round((rect.top - originY) * dpr);
    const x1 = Math.round((rect.right - originX) * dpr);
    const y1 = Math.round((rect.bottom - originY) * dpr);
    const radius = Math.max(0, parseFloat(style.borderTopLeftRadius) * dpr - line / 2);

    ctx.strokeStyle = style.borderTopColor;
    ctx.lineWidth = line;
    ctx.beginPath();
    ctx.roundRect(x0 + line / 2, y0 + line / 2, x1 - x0 - line, y1 - y0 - line, radius);
    ctx.stroke();
    painted.push(element);
  }
  return painted;
}

function paintImages(ctx: CanvasRenderingContext2D, root: HTMLElement, originX: number, originY: number, dpr: number) {
  const painted: Element[] = [];

  for (const element of root.querySelectorAll<HTMLElement>(IMAGE)) {
    if (!belongsTo(element, root)) continue;
    const rect = element.getBoundingClientRect();
    if (rect.width === 0 || rect.height === 0) continue;
    const x = Math.round((rect.left - originX) * dpr);
    const y = Math.round((rect.top - originY) * dpr);
    const width = Math.round(rect.width * dpr);
    const height = Math.round(rect.height * dpr);

    if (element instanceof HTMLCanvasElement) {
      if (element.width === 0 || element.height === 0) continue;
      // Canvases are already in device pixels: copy them one to one.
      ctx.imageSmoothingEnabled = false;
      ctx.drawImage(element, x, y, width, height);
      painted.push(element);
    } else if (element instanceof HTMLImageElement && element.complete && element.naturalWidth > 0) {
      // Pictures are scaled the way `object-fit: contain` shows them.
      const scale = Math.min(width / element.naturalWidth, height / element.naturalHeight);
      const drawnWidth = element.naturalWidth * scale;
      const drawnHeight = element.naturalHeight * scale;
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = "high";
      ctx.drawImage(element, x + (width - drawnWidth) / 2, y + (height - drawnHeight) / 2, drawnWidth, drawnHeight);
      painted.push(element);
    }
  }
  return painted;
}

function textStyle(element: Element, ctx: CanvasRenderingContext2D, cache: Map<Element, TextStyle>) {
  const cached = cache.get(element);
  if (cached) return cached;

  const computed = getComputedStyle(element);
  const font = `${computed.fontStyle} ${computed.fontWeight} ${computed.fontSize} ${computed.fontFamily}`;
  ctx.font = font;
  const metrics = ctx.measureText("Hg");
  const spacing = computed.letterSpacing === "normal" ? "0px" : computed.letterSpacing;
  const style: TextStyle = {
    font,
    color: computed.color,
    spacing,
    spaced: parseFloat(spacing) !== 0,
    transform: computed.textTransform,
    ascent: metrics.fontBoundingBoxAscent ?? metrics.actualBoundingBoxAscent,
    descent: metrics.fontBoundingBoxDescent ?? metrics.actualBoundingBoxDescent
  };
  cache.set(element, style);
  return style;
}

/** The nearest ancestor that really cuts its content off (truncate, line-clamp, sr-only). */
function clipFor(element: Element, root: HTMLElement, cache: Map<Element, Clip | null>): Clip | null {
  const cached = cache.get(element);
  if (cached !== undefined) return cached;

  let clip: Clip | null = null;
  for (let node: Element | null = element; node; node = node === root ? null : node.parentElement) {
    if (!(node instanceof HTMLElement)) continue;
    const overflows = node.scrollWidth > node.clientWidth + 1 || node.scrollHeight > node.clientHeight + 1;
    if (!overflows) continue;
    const style = getComputedStyle(node);
    if (style.overflowX === "visible" && style.overflowY === "visible") continue;

    const rect = node.getBoundingClientRect();
    const left = rect.left + node.clientLeft;
    const top = rect.top + node.clientTop;
    const clamp = style.getPropertyValue("-webkit-line-clamp");
    clip = {
      left,
      top,
      right: left + node.clientWidth,
      bottom: top + node.clientHeight,
      textRight: left + node.clientWidth - parseFloat(style.paddingRight || "0"),
      ellipsis: style.textOverflow === "ellipsis" || (clamp !== "" && clamp !== "none")
    };
    break;
  }
  cache.set(element, clip);
  return clip;
}

function cased(text: string, transform: string) {
  if (transform === "uppercase") return text.toUpperCase();
  if (transform === "lowercase") return text.toLowerCase();
  return text;
}

function paintText(ctx: CanvasRenderingContext2D, root: HTMLElement) {
  const painted: Element[] = [];
  const styles = new Map<Element, TextStyle>();
  const clips = new Map<Element, Clip | null>();
  const range = document.createRange();
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  const canSpace = "letterSpacing" in ctx;
  const wordPattern = /\S+/g;

  const draw = (style: TextStyle, text: string, left: number, rect: DOMRect) => {
    ctx.font = style.font;
    ctx.fillStyle = style.color;
    if (canSpace) ctx.letterSpacing = style.spacing;
    const baseline = rect.top + (rect.height - style.ascent - style.descent) / 2 + style.ascent;
    ctx.fillText(cased(text, style.transform), left, baseline);
  };

  const charRect = (node: Text, index: number) => {
    range.setStart(node, index);
    range.setEnd(node, index + 1);
    return range.getBoundingClientRect();
  };

  // Whole words keep their kerning; letters are drawn one by one only when a
  // word is split across lines or the canvas cannot apply letter-spacing.
  const drawSpan = (node: Text, style: TextStyle, start: number, end: number, rect: DOMRect, whole: boolean) => {
    if (whole && (canSpace || !style.spaced)) {
      draw(style, node.data.slice(start, end), rect.left, rect);
      return;
    }
    for (let index = start; index < end; index += 1) {
      const box = charRect(node, index);
      if (box.width > 0) draw(style, node.data[index], box.left, box);
    }
  };

  for (let current = walker.nextNode(); current; current = walker.nextNode()) {
    const node = current as Text;
    const parent = node.parentElement;
    if (!parent || !belongsTo(parent, root) || !/\S/.test(node.data)) continue;

    const words: Array<Word & { whole: boolean }> = [];
    wordPattern.lastIndex = 0;
    for (let match = wordPattern.exec(node.data); match; match = wordPattern.exec(node.data)) {
      range.setStart(node, match.index);
      range.setEnd(node, match.index + match[0].length);
      const rects = range.getClientRects();
      if (rects.length === 0) continue;
      words.push({
        start: match.index,
        end: match.index + match[0].length,
        rect: rects.length === 1 ? rects[0] : range.getBoundingClientRect(),
        whole: rects.length === 1
      });
    }
    if (words.length === 0) continue;

    const style = textStyle(parent, ctx, styles);
    const clip = clipFor(parent, root, clips);

    if (!clip) {
      for (const word of words) drawSpan(node, style, word.start, word.end, word.rect, word.whole);
      painted.push(parent);
      continue;
    }

    const visible = words.filter(
      (word) => word.rect.bottom <= clip.bottom + 1.5 && word.rect.top >= clip.top - 1.5 && word.rect.left < clip.right - 0.5
    );
    if (visible.length === 0) continue;

    const truncated =
      clip.ellipsis && (visible.length < words.length || visible.some((word) => word.rect.right > clip.textRight + 0.5));

    ctx.save();
    ctx.beginPath();
    ctx.rect(clip.left, clip.top, clip.right - clip.left, clip.bottom - clip.top);
    ctx.clip();

    if (!truncated) {
      for (const word of visible) drawSpan(node, style, word.start, word.end, word.rect, word.whole);
    } else {
      // Rebuild what the browser shows on the cut line: as many letters as fit, then the ellipsis.
      const lastTop = Math.max(...visible.map((word) => word.rect.top));
      const lastLine = visible.filter((word) => lastTop - word.rect.top < 2);
      for (const word of visible) {
        if (lastTop - word.rect.top >= 2) drawSpan(node, style, word.start, word.end, word.rect, word.whole);
      }

      ctx.font = style.font;
      if (canSpace) ctx.letterSpacing = style.spacing;
      const limit = clip.textRight - ctx.measureText("…").width;
      const lineStart = lastLine[0].start;
      const lineEnd = lastLine[lastLine.length - 1].end;
      let cut = lineStart;
      let cutRight = lastLine[0].rect.left;
      for (let index = lineStart; index < lineEnd; index += 1) {
        const box = charRect(node, index);
        if (box.width === 0 && box.height === 0) continue;
        if (box.right > limit + 0.05) break;
        cut = index + 1;
        cutRight = box.right;
      }
      for (const word of lastLine) {
        if (word.start >= cut) break;
        const end = Math.min(word.end, cut);
        drawSpan(node, style, word.start, end, word.rect, word.whole);
      }
      draw(style, "…", cutRight, lastLine[0].rect);
    }

    ctx.restore();
    painted.push(parent);
  }

  return painted;
}

function capture(root: HTMLElement, mode: Mode): Shot | null {
  if (mode !== "intro" && hasRunningAnimation(root)) return null;

  const rect = root.getBoundingClientRect();
  if (rect.width < 2 || rect.height < 2) return null;

  const dpr = window.devicePixelRatio || 1;
  const bleed = BLEED[mode];
  // The canvas origin has to land on a device pixel, or the copy of the DOM comes out soft.
  const originX = snap(rect.left - bleed, dpr);
  const originY = snap(rect.top - bleed, dpr);
  const width = Math.ceil((rect.right + bleed - originX) * dpr);
  const height = Math.ceil((rect.bottom + bleed - originY) * dpr);
  if (width * height > MAX_PIXELS) return null;

  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  canvas.style.width = `${width / dpr}px`;
  canvas.style.height = `${height / dpr}px`;
  const ctx = canvas.getContext("2d", { willReadFrequently: true });
  if (!ctx) return null;

  const frames = paintFrames(ctx, root, originX, originY, dpr);
  const images = paintImages(ctx, root, originX, originY, dpr);
  ctx.setTransform(dpr, 0, 0, dpr, -originX * dpr, -originY * dpr);
  const text = paintText(ctx, root);
  ctx.setTransform(1, 0, 0, 1, 0, 0);

  let image: ImageData;
  try {
    image = ctx.getImageData(0, 0, width, height);
  } catch {
    // A picture from another origin taints the canvas; such a root simply stays plain DOM.
    return null;
  }
  const pixels = new Uint32Array(image.data.buffer);
  let count = 0;
  for (let index = 0; index < pixels.length; index += 1) {
    if (pixels[index] >>> 24 > 6) count += 1;
  }
  if (count === 0 || count > MAX_GRAINS) return null;

  const homeX = new Float32Array(count);
  const homeY = new Float32Array(count);
  const color = new Uint32Array(count);
  let cursor = 0;
  for (let y = 0; y < height; y += 1) {
    const row = y * width;
    for (let x = 0; x < width; x += 1) {
      const value = pixels[row + x];
      if (value >>> 24 > 6) {
        homeX[cursor] = x;
        homeY[cursor] = y;
        color[cursor] = value;
        cursor += 1;
      }
    }
  }

  return {
    canvas,
    ctx,
    image,
    width,
    height,
    dpr,
    offsetX: originX - rect.left,
    offsetY: originY - rect.top,
    rootWidth: rect.width,
    rootHeight: rect.height,
    count,
    homeX,
    homeY,
    color,
    text,
    frames,
    images
  };
}

/* ---------- Simulation ---------- */

function start(root: HTMLElement, mode: Mode): Instance | null {
  const existing = instances.get(root);
  if (existing) {
    if (mode === "stir") return existing;
    existing.stop();
  }

  const startedAt = performance.now();
  if (mode === "stir" && (cooldown.get(root) ?? 0) > startedAt) return null;

  const shot = capture(root, mode);
  if (!shot) {
    cooldown.set(root, startedAt + 300);
    return null;
  }

  const { canvas, ctx, image, width, height, dpr, count, homeX, homeY, color } = shot;
  const pixels = new Uint32Array(image.data.buffer);
  const x = Float32Array.from(homeX);
  const y = Float32Array.from(homeY);
  const vx = new Float32Array(count);
  const vy = new Float32Array(count);
  const energy = new Float32Array(count);
  const stiffness = new Float32Array(count);
  for (let index = 0; index < count; index += 1) {
    stiffness[index] = 0.014 + Math.random() * 0.018;
  }

  if (mode !== "stir") {
    const spread = SPREAD[mode] * dpr;
    for (let index = 0; index < count; index += 1) {
      const angle = Math.random() * Math.PI * 2;
      const distance = spread * (0.2 + Math.sqrt(Math.random()) * 0.8);
      x[index] += Math.cos(angle) * distance;
      y[index] += Math.sin(angle) * distance;
      // The intro settles left to right, like a line being set.
      energy[index] = mode === "intro" ? 1 + (homeX[index] / width) * 1.6 + Math.random() * 0.4 : 0.55 + Math.random() * 0.5;
    }
  }

  const layer = layerFor(root);
  let lastLeft = NaN;
  let lastTop = NaN;
  const place = (rect: DOMRect) => {
    const frame = layer.getBoundingClientRect();
    const left = snap(rect.left + shot.offsetX - frame.left, dpr);
    const top = snap(rect.top + shot.offsetY - frame.top, dpr);
    if (left !== lastLeft || top !== lastTop) {
      canvas.style.transform = `translate(${left}px, ${top}px)`;
      lastLeft = left;
      lastTop = top;
    }
  };

  // The buffer still holds the capture, so the first clear has to cover all of it.
  let dirtyFrom = 0;
  let dirtyTo = height;
  const render = () => {
    if (dirtyTo > dirtyFrom) pixels.fill(0, dirtyFrom * width, dirtyTo * width);
    let top = height;
    let bottom = 0;
    const fadeScale = 1 / (FADE_DISTANCE * dpr);

    for (let index = 0; index < count; index += 1) {
      const px = x[index];
      const py = y[index];
      if (px < -0.5 || py < -0.5) continue;
      const column = (px + 0.5) | 0;
      const row = (py + 0.5) | 0;
      if (column >= width || row >= height) continue;

      let value = color[index];
      const away = Math.abs(px - homeX[index]) + Math.abs(py - homeY[index]);
      if (away > 0) {
        const keep = 1 - Math.min(away * fadeScale, 1) * FADE;
        value = ((value & 0xffffff) | (((value >>> 24) * keep) << 24)) >>> 0;
      }
      const at = row * width + column;
      if (pixels[at] >>> 24 < value >>> 24) pixels[at] = value;
      if (row < top) top = row;
      if (row >= bottom) bottom = row + 1;
    }

    const from = Math.min(top, dirtyFrom);
    const to = Math.max(bottom, dirtyTo);
    if (to > from) ctx.putImageData(image, 0, 0, 0, from, width, to - from);
    dirtyFrom = bottom > top ? top : 0;
    dirtyTo = bottom > top ? bottom : 0;
  };

  let lastCx = 0;
  let lastCy = 0;
  let tracked = false;
  let windX = 0;
  let windY = 0;
  const step = (cx: number, cy: number, near: boolean) => {
    windX = windX * 0.6 + (tracked ? cx - lastCx : 0) * 0.4;
    windY = windY * 0.6 + (tracked ? cy - lastCy : 0) * 0.4;
    lastCx = cx;
    lastCy = cy;
    tracked = true;

    const speed = Math.hypot(windX, windY);
    // A resting cursor does nothing: dust only moves when something moves through it.
    const stirring = near && speed > 0.2 * dpr;
    const reach = RADIUS * dpr;
    const reachSquared = reach * reach;
    const force = stirring ? 0.25 + Math.min(speed / (16 * dpr), 1.6) : 0;
    let awake = 0;

    for (let index = 0; index < count; index += 1) {
      let px = x[index];
      let py = y[index];
      let ux = vx[index];
      let uy = vy[index];
      let charge = energy[index];
      const hx = homeX[index];
      const hy = homeY[index];
      let touched = false;

      if (stirring) {
        const dx = px - cx;
        const dy = py - cy;
        const distanceSquared = dx * dx + dy * dy;
        if (distanceSquared < reachSquared) {
          const distance = Math.sqrt(distanceSquared) + 0.01;
          const falloff = 1 - distance / reach;
          const kick = falloff * falloff * force;
          ux += (dx / distance) * kick * PUSH * dpr + windX * falloff * WIND + (Math.random() - 0.5) * kick * SCATTER * dpr;
          uy +=
            (dy / distance) * kick * PUSH * dpr +
            windY * falloff * WIND +
            (Math.random() - 0.5) * kick * SCATTER * dpr -
            kick * LIFT * dpr;
          charge = Math.min(1, charge + kick * 0.35);
          touched = true;
        }
      }

      if (!touched && charge === 0 && ux === 0 && uy === 0 && px === hx && py === hy) continue;

      if (charge > 0) {
        // Charged grains hang in the air before the pull home takes over.
        const float = charge > 1 ? 1 : charge;
        ux += (Math.random() - 0.5) * float * DRIFT * dpr;
        uy += (Math.random() - 0.5) * float * DRIFT * dpr;
        charge *= DECAY;
        if (charge < 0.02) charge = 0;
      }

      const pull = stiffness[index] * (charge > 1 ? 0.06 : 1 - 0.8 * charge);
      ux = (ux + (hx - px) * pull) * DAMPING;
      uy = (uy + (hy - py) * pull) * DAMPING;
      px += ux;
      py += uy;

      const offX = px - hx;
      const offY = py - hy;
      if (charge === 0 && offX * offX + offY * offY < 0.2 && ux * ux + uy * uy < 0.02) {
        px = hx;
        py = hy;
        ux = 0;
        uy = 0;
      } else {
        awake += 1;
      }

      x[index] = px;
      y[index] = py;
      vx[index] = ux;
      vy[index] = uy;
      energy[index] = charge;
    }
    return awake;
  };

  let raf = 0;
  let stopped = false;
  let last = startedAt;
  let budget = 0;
  let restedAt = startedAt;
  let moving = mode !== "stir";

  const observer = new MutationObserver(() => instance.stop());

  const instance: Instance = {
    awake: mode === "stir" ? 0 : count,
    stop: () => {
      if (stopped) return;
      stopped = true;
      if (raf) cancelAnimationFrame(raf);
      observer.disconnect();
      canvas.remove();
      for (const element of shot.text) element.removeAttribute("data-dust-hidden");
      for (const element of shot.frames) element.removeAttribute("data-dust-frame-hidden");
      for (const element of shot.images) element.removeAttribute("data-dust-image-hidden");
      instances.delete(root);
      instance.awake = 0;
      publish();
    }
  };

  const frame = (now: number) => {
    raf = 0;
    if (!root.isConnected) {
      instance.stop();
      return;
    }
    const rect = root.getBoundingClientRect();
    if (Math.abs(rect.width - shot.rootWidth) > 0.5 || Math.abs(rect.height - shot.rootHeight) > 0.5) {
      instance.stop();
      return;
    }
    place(rect);

    const cx = (pointer.x - rect.left - shot.offsetX) * dpr;
    const cy = (pointer.y - rect.top - shot.offsetY) * dpr;
    const near =
      pointer.fine &&
      pointer.x > rect.left - RADIUS &&
      pointer.x < rect.right + RADIUS &&
      pointer.y > rect.top - RADIUS &&
      pointer.y < rect.bottom + RADIUS;

    budget += Math.min(now - last, 60);
    last = now;
    let stepped = false;
    let awake = instance.awake;
    // The 1 ms slack keeps a 60 Hz display on exactly one step per frame.
    while (budget >= STEP_MS - 1) {
      budget -= STEP_MS;
      awake = step(cx, cy, near);
      stepped = true;
    }
    if (stepped) {
      if (awake > 0 || moving) render();
      moving = awake > 0;
      instance.awake = awake;
      publish();
    }

    if (awake > 0 || (near && now - pointer.movedAt < 400)) restedAt = now;
    if (now - restedAt > 150) {
      instance.stop();
      return;
    }
    raf = requestAnimationFrame(frame);
  };

  layer.appendChild(canvas);
  place(root.getBoundingClientRect());
  if (mode !== "stir") render();
  for (const element of shot.text) element.setAttribute("data-dust-hidden", "");
  for (const element of shot.frames) element.setAttribute("data-dust-frame-hidden", "");
  for (const element of shot.images) element.setAttribute("data-dust-image-hidden", "");
  // Our own attributes are not observed; any other change means the capture is stale.
  observer.observe(root, { childList: true, characterData: true, subtree: true });

  instances.set(root, instance);
  publish();
  raf = requestAnimationFrame(frame);
  return instance;
}

/* ---------- Public API ---------- */

/** Scatter every visible root inside `scope` and let it settle again. */
export function gust(scope: ParentNode = document) {
  if (!dustEnabled()) return;
  const roots = Array.from(scope.querySelectorAll<HTMLElement>(ROOT));
  if (scope instanceof HTMLElement && scope.matches(ROOT)) roots.unshift(scope);

  for (const root of roots) {
    const rect = root.getBoundingClientRect();
    const visible = rect.bottom > 0 && rect.top < window.innerHeight && rect.right > 0 && rect.left < window.innerWidth;
    if (visible) start(root, "burst");
  }
}

/** Assemble a `data-dust-intro` root from loose grains once its font is ready. */
export async function assemble(root: HTMLElement) {
  if (dustEnabled()) {
    const computed = getComputedStyle(root);
    const font = `${computed.fontStyle} ${computed.fontWeight} ${computed.fontSize} ${computed.fontFamily}`;
    try {
      await Promise.all([document.fonts.ready, document.fonts.load(font)]);
    } catch {
      // A font that fails to load still leaves readable fallback type to assemble.
    }
    if (root.isConnected) start(root, "intro");
  }
  root.removeAttribute("data-dust-intro");
}

export function subscribeGrains(listener: (awake: number) => void) {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

export function mountDust() {
  const fine = window.matchMedia("(hover: hover) and (pointer: fine)");

  const onMove = (event: PointerEvent) => {
    if (event.pointerType === "touch") return;
    pointer.fine = fine.matches;
    pointer.x = event.clientX;
    pointer.y = event.clientY;
    pointer.movedAt = performance.now();
    if (!pointer.fine || !dustEnabled()) return;

    const target = event.target;
    if (!(target instanceof Element)) return;
    const root = target.closest<HTMLElement>(ROOT);
    if (root && !instances.has(root)) start(root, "stir");
  };

  window.addEventListener("pointermove", onMove, { passive: true });
  window.addEventListener("resize", settleAll);

  return () => {
    window.removeEventListener("pointermove", onMove);
    window.removeEventListener("resize", settleAll);
    settleAll();
    for (const layer of document.querySelectorAll(".dust-layer")) layer.remove();
  };
}
