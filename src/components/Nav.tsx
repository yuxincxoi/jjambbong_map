import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import UserInfo from "./UserInfo";

const Nav: React.FC = () => {
  const navBtn = "url('./img/navBtn.png')";
  const homeBtn = "url('./img/homeBtn.png')";
  const myPageBtn = "url('./img/myPageBtn.png')";
  const likePageBtn = "url('./img/emptyHeart.png')";

  const [isHidden, setIsHidden] = useState(true);
  const [page, setPage] = useState<JSX.Element | string>("");

  const handleHover = () => {
    setIsHidden((prev) => !prev);
  };

  useEffect(() => {
    const newPage = window.location.pathname.split("/").pop() || "";

    setPage(newPage);
  }, [window.location.pathname]);

  return (
    <>
      <div className="flex fixed bottom-10 left-6 z-50">
        <div
          className="w-24 h-24 mt-64 pr-2 bg-cover bg-no-repeat transform transition duration-500 hover:scale-105"
          style={{ backgroundImage: navBtn }}
          onMouseEnter={handleHover}
          onMouseLeave={handleHover}
        ></div>
        <div
          className={`w-48 h-72 rounded-lg border border-stone-300 transition-opacity duration-500 ${
            isHidden ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
          onMouseLeave={handleHover}
        >
          <div>
            <UserInfo />
            <hr />
          </div>
          <div className="ml-2 mt-3">
            <div className="flex mx-auto mt-1">
              <div
                className="w-7 h-7 mt-1 mr-2 ml-2 mb-1 bg-cover bg-no-repeat"
                style={{ backgroundImage: homeBtn }}
              ></div>
              <Link to="/mainPage">
                <Button
                  buttonName="Home"
                  className={`text-xl mt-1 hover:font-normal ${
                    page === "mainPage" ? "font-normal" : "font-thin"
                  }`}
                />
              </Link>
            </div>
            <div className="flex mx-auto mt-1">
              <div
                className="w-7 h-7 mt-1 mr-2 ml-2 mb-1 bg-cover bg-no-repeat"
                style={{ backgroundImage: likePageBtn }}
              ></div>
              <Link to="/likePage">
                <Button
                  buttonName="Like"
                  className={`text-xl mt-1 hover:font-normal ${
                    page === "likePage" ? "font-normal" : "font-thin"
                  }`}
                />
              </Link>
            </div>
            <div className="flex mx-auto mt-1">
              <div
                className="w-7 h-7 mt-1 mr-2 ml-2 mb-1 bg-cover bg-no-repeat"
                style={{ backgroundImage: myPageBtn }}
              ></div>
              <Link to="/myPage">
                <Button
                  buttonName="My page"
                  className={`text-xl mt-1 hover:font-normal ${
                    page === "myPage" ? "font-normal" : "font-thin"
                  }`}
                />
              </Link>
            </div>
          </div>
          <div className="flex justify-end mr-4 mt-9">
            <Link to="/">
              <Button
                buttonName="로그아웃"
                className="underline text-[#A6A6A6] text-sm hover:no-underline"
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
