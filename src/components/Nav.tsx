import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";

const Nav: React.FC = () => {
  const [isHidden, setIsHidden] = useState(true);

  const handleHover = () => {
    setIsHidden((prev) => !prev);
  };

  return (
    <>
      <div className="flex sticky">
        <div
          className="w-16 h-16 mt-64 pr-2 bg-black"
          onMouseEnter={handleHover}
          onMouseLeave={handleHover}
        ></div>
        <div
          className={`w-40 h-80 rounded-lg border border-stone-300 ${
            isHidden ? "hidden" : "block"
          }`}
          onMouseLeave={handleHover}
        >
          <div>
            <div>김개똥</div>
            <div>gg@gmail.com</div>
            <hr />
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
