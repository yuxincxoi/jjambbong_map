import InputProps from "../interfaces/components/Input.interface";

const Input: React.FC<InputProps> = ({ placeholder, className }) => {
  return (
    <>
      <div className="flex justify-center mt-2">
        <input
          type="text"
          placeholder={placeholder}
          className={`w-60 h-10 px-4 border-[1px] rounded-md hover:border-main-color focus:outline-none focus:border-main-color font-extralight ${className}`}
        />
      </div>
    </>
  );
};

export default Input;
