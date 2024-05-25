import { ReactNode, useState } from "react";
import style from "./Modal.module.scss";
import { classNames } from "shared/lib/classNames/classNames";
interface ModalProps {
  children?: ReactNode;
  isOpend: boolean;
  onClose?: () => void;
}
const Modal = ({ children, isOpend = false, onClose }: ModalProps) => {
  const [closing, setClosing] = useState(false);

  const OnContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };
  const CloseHandler = () => {
    if (onClose) {
      setClosing(true);
      setTimeout(() => {
        onClose();
        setClosing(false);
      }, 200);
    }
  };
  return (
    <div
      className={classNames(style.Modal, {
        [style.opened]: isOpend,
        [style.closing]: closing,
      })}
    >
      <div className={style.overlay} onClick={CloseHandler}>
        <div className={style.content} onClick={OnContentClick}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
