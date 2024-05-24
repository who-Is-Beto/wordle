import { FC, ReactNode, ReactPortal } from "react";
import { createPortal } from "react-dom";

type ModalProps = {
  children: ReactNode;
};

const Modal: FC<ModalProps> = ({ children }): ReactPortal => {
  const modalRoot = document.getElementById("modalRoot");

  return createPortal(<div>{children}</div>, modalRoot!);
};

export default Modal;
