# UI Effects Selection

## Direction

The portfolio should stay minimal, compact, monochrome, and readable. Effects are allowed only when they improve perceived quality without turning the site into an animation showcase.

Use ReactBits-style effects as small accents:

- Text reveal on first load.
- Subtle text state changes on hover.
- Soft project row/card interaction.
- Small counter animations for proof metrics.
- Compact logo/stack loop only if it does not increase vertical height.

Avoid any effect that makes the page feel like a landing-page demo, gaming site, or cyberpunk UI.

## Visual Rules

- No full-page animated hero background.
- No colorful gradients as the main identity.
- No big typography just to show text effects.
- No constant movement in the first viewport except one very small text or count animation.
- Monochrome palette only: charcoal, gray, off-white.
- Any shine/glow must be grayscale and low opacity.
- All effects must respect `prefers-reduced-motion`.

## Selected Effects

### 1. Split Text

Use for:

- Main hero headline only.

Configuration:

- Split by words, not characters.
- Low movement: `y: 8-12px`, opacity from 0 to 1.
- Short duration.
- Left aligned.

Reason:

It gives the first line a crafted feel without making the font large or noisy.

Do not use for:

- Every section title.
- Long paragraphs.
- Project descriptions.

### 2. Blur Text

Use for:

- Hero supporting copy or section intro.

Configuration:

- Animate by words.
- Very low blur.
- One-time reveal only.

Reason:

It fits the quiet monochrome style better than glitch or scramble effects.

Do not use for:

- Navigation.
- Buttons.
- Repeated project cards.

### 3. Decrypted Text

Use for:

- Small technical labels, such as `Base`, `Farcaster`, `Wallet Analytics`, or project category labels.
- Optional hover effect on project category text.

Configuration:

- Trigger on hover or once on view.
- Use original characters only if available.
- Low iteration count.
- No cyberpunk color.

Reason:

It matches the Web3/on-chain theme, but must remain tiny and restrained.

Do not use for:

- Main headline.
- Body paragraphs.
- Large blocks of text.

### 4. Shiny Text

Use for:

- One or two muted metadata labels only.
- Example: `Founder of zkCodex` or `Building on Base`.

Configuration:

- Base color `#a3a3a3`.
- Shine color `#e6e6e6`.
- Slow speed.
- Long delay.
- Pause on hover.

Reason:

In grayscale, this can add polish without becoming decorative.

Do not use for:

- Headline.
- All links.
- Every project title.

### 5. Count Up

Use for:

- Small stats row.

Stats:

- `69` repositories.
- `23` private repos.
- `4` flagship products.
- `35+` supported zkCodex networks.

Configuration:

- Small font size.
- Short duration.
- Run once when visible.

Reason:

It gives factual motion without visual clutter.

### 6. Logo Loop

Use for:

- Stack strip only, if there is room.

Content:

- Next.js
- TypeScript
- React
- Tailwind
- Wagmi
- Viem
- Farcaster
- Zora
- Supabase
- Expo

Configuration:

- Text labels or monochrome icons.
- Small height, around 22-28px.
- Slow speed.
- Fade edges enabled.
- Pause on hover.

Reason:

It can replace a large stack grid and keep the page compact.

Do not use if:

- It makes the homepage feel too animated.
- It takes more height than a simple stack list.

### 7. Masonry

Use for:

- Not recommended for the main homepage.
- Possible only for a future project archive or screenshots page.

Reason:

Masonry is visually busy and fights the compact ledger-style project layout.

### 8. Pixel Card

Use for:

- Optional micro-treatment for DrawCoin or 8bitMinter only.

Configuration:

- Monochrome pixel border.
- No colored pixel animation.
- Small card or icon container only.

Reason:

It can reference the retro/token creator projects without changing the whole portfolio style.

### 9. Border Glow

Use for:

- Featured project rows/cards on hover only.

Configuration:

- Grayscale border glow.
- Very low opacity.
- No colored glow.
- Only active while hovering/focusing.

Reason:

It gives project rows a premium feel while keeping the border-led design.

### 10. Click Spark

Use for:

- Optional Easter-egg on primary CTA buttons only.

Configuration:

- Gray sparks.
- Small radius.
- Short duration.
- Disabled on reduced motion.

Reason:

It adds tactile feedback without persistent movement.

Do not use globally across the page.

## Background Effects

Background effects should be mostly avoided. The user wants a simple border/background design. If one is used, it must be section-scoped, low opacity, and static-looking.

### Noise

Use:

- Yes, as a static texture overlay.

Configuration:

- Opacity around `0.025-0.04`.
- No visible movement.
- Applied globally or to cards as a subtle material texture.

Reason:

It makes the charcoal background feel less flat without becoming an effect.

### Grainient

Use:

- Maybe, only as a static monochrome texture in a small project detail header.

Reason:

The gradient part can easily violate the monochrome direction. If used, colors must be near-gray.

### Dark Veil

Use:

- No for homepage.

Reason:

Too atmospheric and background-heavy for the compact product index. It may also be unnecessarily heavy for a minimal portfolio.

### Pixel Blast

Use:

- No for homepage.

Reason:

Too energetic and visually dominant. It fits games/retro pages better than a professional portfolio.

### Gradient Blinds

Use:

- No for homepage.

Reason:

Even if tuned grayscale, it reads as a visual background effect and conflicts with the sober layout.

### Laser Flow

Use:

- No for homepage.
- Maybe as a very small divider in a project detail page for BasePlay, but not initially.

Reason:

It depends on a dynamic light/shader feel. That is too much for the desired minimal style.

## Rejected Or Avoided Effects

### Circular Text

Avoid.

Reason:

It adds decorative branding but costs readability and compactness. The portfolio should not have floating circular labels or badge-like ornaments.

### True Focus

Avoid for the main UI.

Reason:

It uses focus borders and blur around words. This can look gimmicky in a professional portfolio and may fight the clean typography.

### Scroll Float

Avoid.

Reason:

The site should feel compact and stable. Floating text makes the layout feel more like a marketing page.

### Scrambled Text

Avoid except tiny hover labels.

Reason:

Scramble effects are easy to overuse and can reduce readability. Decrypted Text is a better fit if we need this theme.

### Rotating Text

Avoid.

Reason:

Changing hero words can make the positioning feel less decisive. The site should state the value clearly once.

### Scroll Velocity

Avoid.

Reason:

Marquee-style movement is too visually loud for a compact portfolio.

### Staggered Menu

Avoid.

Reason:

The site only needs a simple header. A staggered full menu would add unnecessary interaction.

## Component System

Use shadcn-style primitives for the base UI:

- Button
- Separator
- Badge-like labels, implemented with simple spans if possible
- Sheet only if mobile navigation needs it

Use ReactBits-style components only as copied local components, not as a broad dependency or visual theme.

## Final Effect Set For Implementation

Use these:

1. Split Text for the hero headline.
2. Blur Text for the hero supporting copy or first section intro.
3. Count Up for compact stats.
4. Decrypted Text for small project category hover labels.
5. Border Glow for featured project hover/focus state.
6. Noise as a very subtle static texture.

Optional after first UI pass:

1. Logo Loop for stack labels.
2. Shiny Text for one small metadata label.
3. Click Spark for primary CTA only.

Do not use initially:

- Dark Veil
- Pixel Blast
- Gradient Blinds
- Laser Flow
- Circular Text
- True Focus
- Scroll Float
- Rotating Text
- Scroll Velocity
- Staggered Menu
- Masonry

## Layout Implication

The chosen effects support this structure:

- A compact hero with animated text reveal.
- A small stats row with count-up numbers.
- A border-led featured project list with restrained hover polish.
- Mini apps as dense rows or compact cards.
- A stack strip/list that can optionally loop.
- Project detail pages with the same monochrome system and fewer effects.

