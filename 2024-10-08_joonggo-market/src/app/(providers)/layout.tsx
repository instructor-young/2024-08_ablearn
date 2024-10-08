"use client";

import { PropsWithChildren } from "react";
import AuthProvider from "./_components/AuthProvider";
import TanstackQueryProvider from "./_components/TanstackQueryProvider";

function ProvidersLayout({ children }: PropsWithChildren) {
  return (
    <TanstackQueryProvider>
      <AuthProvider>{children}</AuthProvider>
    </TanstackQueryProvider>
  );
}

export default ProvidersLayout;
