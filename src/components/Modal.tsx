import ModalProps from "../interfaces/components/Modal.interface";
import Button from "./Button";

const Modal: React.FC<ModalProps> = ({ message }) => {
  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center bg-neutral-400 bg-opacity-50 backdrop-blur-sm">
        <div className="w-[400px] h-[250px] bg-white rounded-xl">
          <div className="text-right mr-4 mt-2 font-thin text-lg cursor-pointer">
            X
          </div>
          <div className="text-center pt-8 h-32">{message}</div>
          <div className="h-20">
            <Button buttonName="확인" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
