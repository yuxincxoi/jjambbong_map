import { useState } from "react";
import InputSearchProps from "../../interfaces/components/main/InputSearch.interface";

const InputSearch = ({ onSearch, disabled, className }: InputSearchProps) => {
  const [searchKeyword, setSearchKeyword] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchKeyword(e.target.value);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onSearch(searchKeyword);
    }
  };

  return (
    <>
      <div className="flex justify-center mt-3 px-2 lg:px-0">
        <input
          type="text"
          placeholder="대전 짬뽕"
          value={searchKeyword}
          disabled={disabled}
          onChange={handleInputChange}
          onKeyDown={handleKeyPress}
          className={`w-full lg:w-[95%] h-10 border-2 px-4 rounded-2xl hover:border-main-color focus:outline-none focus:border-main-color transition duration-200 disabled:bg-gray-50 disabled:text-gray-400 disabled:border-gray-200 disabled:cursor-not-allowed disabled:opacity-75 focus:disabled:ring-0 focus:disabled:border-gray-200 ${className}`}
        />
      </div>
    </>
  );
};

export default InputSearch;
