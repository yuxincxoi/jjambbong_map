export default interface ModalProps {
  message: string;
  isHidden: boolean;
  setIsHidden: React.Dispatch<React.SetStateAction<boolean>>;
  onConfirm?: () => void;
}
