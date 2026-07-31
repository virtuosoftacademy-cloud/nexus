

import type { Metadata } from "next";
import {  Ancizar_Serif, Inter } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  icons: {
    icon: [
      { url: "/assets/logo.png", media: "(prefers-color-scheme: light)" },
      { url: "/assets/logo-white.png", media: "(prefers-color-scheme: dark)" },
    ],
    apple: [
      { url: "/assets/logo.png", media: "(prefers-color-scheme: light)" },
      { url: "/assets/logo-white.png", media: "(prefers-color-scheme: dark)" },
    ],
  },
};

const inter = Inter({
  variable: "--font-inter-sans",
  display: "swap",
});

const ancizarSans = Ancizar_Serif({
  variable: "--font-ancizar-sans",
  weight: ["300","400", "500", "600", "700","800","900"],
  subsets: ["latin"],
  display: "swap",
});

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