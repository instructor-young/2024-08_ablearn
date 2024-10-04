"use client";

import Backdrop from "@/components/Backdrop";
import { useModalStore } from "@/zustand/modal.store";
import { PropsWithChildren } from "react";

function ModalProvider({ children }: PropsWithChildren) {
  const modal = useModalStore((state) => state.modal);

  return (
    <>
      {children}
      {modal && <Backdrop>{modal}</Backdrop>}
    </>
  );
}

export default ModalProvider;
