import ButtonProps from "../interfaces/components/Button.interface";

const Button: React.FC<ButtonProps> = ({ buttonName, className, onClick }) => {
  return (
    <>
      <div className="flex justify-center">
        <button type={type} onClick={onClick} className={`${className}`}>
          {buttonName}
        </button>
      </div>
    </>
  );
};

export default Button;
