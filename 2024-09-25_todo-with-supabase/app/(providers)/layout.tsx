import AuthProvider from "@/providers/auth.provider";
import TanstackQueryProvider from "@/tanstack/query/client";
import React from "react";

function ProvidersLayout({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <TanstackQueryProvider>{children}</TanstackQueryProvider>
    </AuthProvider>
  );
}

export default ProvidersLayout;
