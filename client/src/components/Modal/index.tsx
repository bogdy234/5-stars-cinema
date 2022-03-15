import { FC, ReactElement } from "react";

interface ModalProps {
  children: ReactElement;
  showModal: boolean;
}

const Modal: FC<ModalProps> = ({ children, showModal }): ReactElement => {
  return (
    <div
      className={`fixed z-10 left-0 top-0 w-full h-full overflow-auto bg-black bg-opacity-50 ${
        !showModal && "hidden"
      }`}
    >
      {children}
    </div>
  );
};

export default Modal;
