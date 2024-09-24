import Link from "next/link";
import React, { PropsWithChildren } from "react";

function layout({ children }: PropsWithChildren) {
  return (
    <div>
      <header className="border-b border-black">
        <Link href="/">홈</Link>|
        <Link href="/image-uploader">이미지 업로더</Link>
      </header>
      {children}
    </div>
  );
}

export default layout;
