import Modal from "shared/ui/Modal";
import LoginRegisterForm from "../LoginRegisterForm/LoginRegisterForm";
import { ReactNode } from "react";

interface LoginRegisterModalProps {
  children?: ReactNode;
  isOpend: boolean;
  onClose?: () => void;
}
const LoginRegisterModal = ({
  children,
  isOpend = false,
  onClose,
}: LoginRegisterModalProps) => {
  return (
    <Modal isOpend={isOpend} onClose={onClose}>
      <LoginRegisterForm></LoginRegisterForm>
    </Modal>
  );
};

export default LoginRegisterModal;
