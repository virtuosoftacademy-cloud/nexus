import type { Metadata } from "next";
import {  Ancizar_Sans, Inter } from "next/font/google";
import "./globals.css";

// Inter → --font-sans  (matches globals.css @theme: --font-sans: var(--font-sans))
const inter = Inter({
  variable: "--font-inter-sans",
  display: "swap",
});

// Ancizar Sans → --font-mono  (matches globals.css @theme: --font-mono: var(--font-geist-mono))
const ancizarSans = Ancizar_Sans({
  variable: "--font-ancizar-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nexus | Advisory and Services",
  description: "Advisory and Services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${ancizarSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}