"use client";

import { useModalStore } from "@/zustand/modal.store";
import { PropsWithChildren } from "react";

function Backdrop({ children }: PropsWithChildren) {
  const closeModal = useModalStore((state) => state.closeModal);

  const handleClickBackdrop = () => closeModal();
  return (
    <div
      onClick={handleClickBackdrop}
      className="bg-black/40 fixed top-0 bottom-0 left-0 right-0 flex items-center justify-center"
    >
      {children}
    </div>
  );
}

export default Backdrop;
