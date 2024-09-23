import React, { PropsWithChildren } from "react";
import Header from "./_components/Header";

function RootLayout({ children }: PropsWithChildren) {
  return (
    <div id="root-layout">
      <Header />
      {children}
    </div>
  );
}

export default RootLayout;
