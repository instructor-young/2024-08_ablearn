import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "중고마켓 :: 다양한 중고 물품을 찾아 보세요",
  description: "당근마켓 + 중고나라",
};

export default function HTMLLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={"antialiased"}>{children}</body>
    </html>
  );
}
