import ModalProps from "../interfaces/components/Modal.interface";
import Button from "./Button";

export const Modal: React.FC<ModalProps> = ({ message }) => {
  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center bg-neutral-400 bg-opacity-50 backdrop-blur-sm">
        <div className="w-[400px] h-[250px] bg-white rounded-xl">
          <div className="text-center pt-16 h-32">{message}</div>
          <div className="mt-8">
            <Button buttonName="확인" />
          </div>
        </div>
      </div>
    </>
  );
};
