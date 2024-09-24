import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Next 복습",
  description: "2024-09-24 Next 복습하기",
};

export default function HTMLLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={"antialiased"}>{children}</body>
    </html>
  );
}
