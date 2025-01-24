import { useState } from "react";
import ModalProps from "../interfaces/components/Modal.interface";
import Button from "./Button";

export const Modal: React.FC<ModalProps> = ({ message }) => {
  const [isHidden, setIsHidden] = useState(false);

  const handleHidden = () => {
    setIsHidden((prev) => !prev);
  };

  return (
    <>
      <div
        className={`fixed inset-0 flex items-center justify-center bg-neutral-400 bg-opacity-50 backdrop-blur-sm ${
          isHidden ? "hidden bg-none backdrop-blur-none" : ""
        }`}
      >
        <div className="w-[400px] h-[250px] bg-white rounded-xl">
          <div className="text-center pt-16 h-32 text-lg">{message}</div>
          <div className="mt-8">
            <Button
              buttonName="확인"
              onClick={handleHidden}
              className="font-thin bg-main-color text-white hover:font-normal w-[160px] h-12 rounded-md"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export const CloseModal: React.FC<ModalProps> = ({ message }) => {
  const [isHidden, setIsHidden] = useState(false);

  const handleHidden = () => {
    setIsHidden((prev) => !prev);
  };

  return (
    <>
      <div
        className={`fixed inset-0 flex items-center justify-center bg-neutral-400 bg-opacity-50 backdrop-blur-sm ${
          isHidden ? "hidden bg-none backdrop-blur-none" : ""
        }`}
      >
        <div className="w-[400px] h-[250px] bg-white rounded-xl">
          <div
            onClick={handleHidden}
            className="text-right mr-4 mt-2 font-thin text-lg cursor-pointer"
          >
            X
          </div>
          <div className="h-[120px] flex items-center justify-center text-md">
            {message}
          </div>
        </div>
      </div>
    </>
  );
};

export const ConfirmModal: React.FC<ModalProps> = ({ message }) => {
  const [isHidden, setIsHidden] = useState(false);

  const handleHidden = () => {
    setIsHidden((prev) => !prev);
  };

  return (
    <>
      <div
        className={`fixed inset-0 flex items-center justify-center bg-neutral-400 bg-opacity-50 backdrop-blur-sm ${
          isHidden ? "hidden bg-none backdrop-blur-none" : ""
        }`}
      >
        <div className="w-[400px] h-[250px] bg-white rounded-xl">
          <div className="text-center pt-16 h-32 text-md">{message}</div>
          <div className="mt-8 flex justify-evenly">
            <Button
              buttonName="확인"
              className="font-thin bg-main-color text-white hover:font-normal w-[160px] h-12 rounded-md"
            />
            <Button
              buttonName="취소"
              onClick={handleHidden}
              className="font-thin bg-neutral-200 hover:font-normal w-[160px] h-12 rounded-md"
            />
          </div>
        </div>
      </div>
    </>
  );
};
