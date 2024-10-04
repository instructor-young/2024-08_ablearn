import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "발랑 : 명품 쇼핑몰",
  description: "발랑에서 원하는 명품을 찾아보세요!",
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
