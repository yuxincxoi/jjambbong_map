import { useState } from "react";

const InputSearch = () => {
  const [searchKeyword, setSearchKeyword] = useState("");

  return (
    <>
      <div className="flex justify-center mt-6">
        <input
          type="text"
          placeholder="대전 짬뽕"
          value={searchKeyword}
          className="w-[40%] h-10 border-2 px-4 rounded-2xl hover:border-main-color focus:outline-none focus:border-main-color"
        />
      </div>
    </>
  );
};

export default InputSearch;
