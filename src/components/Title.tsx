import { useEffect, useState } from "react";
// import TitleProps from "../interfaces/components/Title.interface";

const Title: React.FC = () => {
  const [title, setTitle] = useState<JSX.Element | string>("I LIKE 짬뽕");

  useEffect(() => {
    const page = window.location.pathname.split("/").pop();
    let newTitle: JSX.Element | string = "I LIKE 짬뽕";

    if (page === "likePage" && title) {
      newTitle = (
        <>
          I <span className="text-main-color">LIKE</span> 짬뽕
        </>
      );
    } else if (page === "myPage" && title) {
      newTitle = (
        <>
          <span className="text-main-color">I</span> LIKE 짬뽕
        </>
      );
    } else if (title) {
      newTitle = (
        <>
          I LIKE <span className="text-main-color">짬뽕</span>
        </>
      );
    }

    setTitle(newTitle);
  }, [window.location.pathname]);

  return (
    <>
      <div>
        <h1 className="text-4xl font-bold text-[#a9a9a9]">{title}</h1>
      </div>
    </>
  );
};

export default Title;
