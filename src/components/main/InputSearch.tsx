import { useState } from "react";
import { searchPlace } from "../../modules/map/searchPlace";

const InputSearch = () => {
  const [searchKeyword, setSearchKeyword] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchKeyword(e.target.value);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      searchPlace(searchKeyword);
    }
  };

  return (
    <>
      <div className="flex justify-center mt-6">
        <input
          type="text"
          placeholder="대전 짬뽕"
          value={searchKeyword}
          onChange={handleInputChange}
          onKeyDown={handleKeyPress}
          className="w-[40%] h-10 border-2 px-4 rounded-2xl hover:border-main-color focus:outline-none focus:border-main-color"
        />
      </div>
    </>
  );
};

export default InputSearch;
