import type { Metadata } from "next";
import localfont from "next/font/local";
import Script from "next/script";
import "./globals.css";

const arcade_font = localfont({
  src: './resources/fonts/ARCADE_N.ttf'
})

export const metadata: Metadata = {
  title: "Tetris by Martín Capuano",
  description: "Tetris by Martín Capuano - A simple Tetris game built with Next.js and TypeScript."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${arcade_font.className}`}
      >
        {children}
        <Script src="tetris.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
