import InputProps from "../interfaces/components/Input.interface";

const Input: React.FC<InputProps> = ({
  type,
  placeholder,
  className,
  name,
  value,
  disabled,
  onChange,
}) => {
  return (
    <>
      <div className="flex justify-center mt-2">
        <input
          type={type}
          placeholder={placeholder}
          name={name}
          value={value}
          disabled={disabled}
          onChange={onChange}
          className={`w-60 h-10 px-4 border-[1px] rounded-md hover:border-main-color focus:outline-none focus:border-main-color font-extralight ${className}`}
        />
      </div>
    </>
  );
};

export default Input;
