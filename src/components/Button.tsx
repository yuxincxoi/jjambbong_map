interface ButtonProps {
  buttonName: string;
  className?: string;
}

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
