import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "JAMS Design System",
  description: "JAMS 디자인 시스템 프리뷰",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" data-brand="jk" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
