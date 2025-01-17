import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import UserInfo from "./UserInfo";

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
            <UserInfo />
            <hr />
          </div>
          <div>
            <div>
              <Link to="/mainPage">
                <Button buttonName="Home" />
              </Link>
            </div>
            <div>
              <Link to="/likePage">
                <Button buttonName="Like" />
              </Link>
            </div>
            <div>
              <Link to="/myPage">
                <Button buttonName="My page" />
              </Link>
            </div>
          </div>
          <div>
            <Link to="/">
              <Button buttonName="로그아웃" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
