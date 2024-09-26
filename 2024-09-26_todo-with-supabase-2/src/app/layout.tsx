import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "투두2",
  description: "투두리스트2",
};

export default function HTMLLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={"antialiased bg-gray-200"}>{children}</body>
    </html>
  );
}
