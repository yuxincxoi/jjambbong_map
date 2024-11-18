import ButtonProps from "../interfaces/components/Button.interface";

const Button: React.FC<ButtonProps> = ({ buttonName, className }) => {
  return (
    <>
      <div className="flex justify-center">
        <button className={`${className}`}>{buttonName}</button>
      </div>
    </>
  );
};

export default Button;
