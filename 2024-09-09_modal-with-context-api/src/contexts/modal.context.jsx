import { createContext, useContext, useState } from "react";
import Backdrop from "../components/Backdrop/Backdrop";

// #1. 만든다
const initialValue = {
  open: () => {},
  close: () => {},
};

const ModalContext = createContext(initialValue);

// #2. 사용한다
export const useModal = () => useContext(ModalContext);

// #3. 범위를 지정해서 값을 내려준다.
export function ModalProvider({ children }) {
  const [modalElement, setModalELement] = useState(null);

  const open = (modalElement) => {
    setModalELement(modalElement);
  };
  const close = () => {
    setModalELement(null);
  };

  const value = {
    open,
    close,
  };

  return (
    <ModalContext.Provider value={value}>
      {children}
      {modalElement && <Backdrop>{modalElement}</Backdrop>}
    </ModalContext.Provider>
  );
}
