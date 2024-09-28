import React, { PropsWithChildren } from "react";
import Header from "./_components/Header";

function RootLayout({ children }: PropsWithChildren) {
  return (
    <div id="root-layout" className="bg-yellow-200 min-h-screen sm:bg-red-200">
      <Header />
      {children}
    </div>
  );
}

export default RootLayout;
