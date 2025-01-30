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
      <div className="flex justify-center items-center">
        <div className="w-60">
          <div className="relative h-14 leading-[40px]">
            <input
              aria-label="input"
              type={type}
              name={name}
              value={value}
              disabled={disabled}
              onChange={onChange}
              className={`absolute w-full outline-none px-4 leading-[40px] border-[1px] bg-transparent transition duration-100 z-1 rounded-md hover:border-main-color focus:border-main-color font-extralight peer ${className}`}
            />
            <div className="absolute h-5 text-md mx-4 my-1 transition duration-200 text-gray-400 font-extralight bg-white leading-[35px] z-2 peer-focus:text-main-color peer-focus:leading-[30px] peer-focus:transform peer-focus:-translate-y-5 peer-focus:scale-[0.88]">
              {placeholder}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Input;
