import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"]
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "Codexsha - Web3 Product Builder",
  description:
    "Minimal portfolio for Codexsha, focused on Base, Farcaster Mini Apps, wallet analytics, AI creator tools, on-chain games, and mobile products.",
  metadataBase: new URL("https://codexsha.dev"),
  openGraph: {
    title: "Codexsha - Web3 Product Builder",
    description:
      "Building useful Web3 products from idea to mainnet.",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
