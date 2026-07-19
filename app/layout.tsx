import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tosin Ariyibi — Product Design Portfolio",
  description:
    "Senior Product Designer — Fintech & Health-tech. Designing trust into money & medicine.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        {/* eslint-disable-next-line @next/next/no-page-custom-font -- this rule targets pages/_document.js; the App Router root layout is the correct place for this link */}
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600;700;800;900&family=Archivo+Expanded:wght@700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col bg-canvas text-ink font-archivo antialiased">
        {children}
      </body>
    </html>
  );
}
