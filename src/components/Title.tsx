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
          I <span style={{ color: "red" }}>LIKE</span> 짬뽕
        </>
      );
    } else if (page === "myPage" && title) {
      newTitle = (
        <>
          <span style={{ color: "red" }}>I</span> LIKE 짬뽕
        </>
      );
    } else if (title) {
      newTitle = (
        <>
          I LIKE <span style={{ color: "red" }}>짬뽕</span>
        </>
      );
    }

    setTitle(newTitle);
  }, [window.location.pathname]);

  return (
    <>
      <div>
        <h1>{title}</h1>
      </div>
    </>
  );
};

export default Title;
