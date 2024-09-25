import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import "@/supabase/client";

export const metadata: Metadata = {
  title: "Next With Supabase",
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
