import { PropsWithChildren } from "react";
import AuthProvider from "./_components/AuthProvider";
import ModalProvider from "./_components/ModalProvider";
import TanstackQueryProvider from "./_components/TanstackQueryProvider";

function ProvidersLayout({ children }: PropsWithChildren) {
  return (
    <TanstackQueryProvider>
      <AuthProvider>
        <ModalProvider>{children}</ModalProvider>
      </AuthProvider>
    </TanstackQueryProvider>
  );
}

export default ProvidersLayout;
