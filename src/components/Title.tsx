import { useEffect } from "react";
import TitleProps from "../interfaces/components/title.interface";

const Title: React.FC<TitleProps> = ({ page }) => {
  useEffect(() => {
    const title = document.getElementById("title");
    if (page === "wka" && title) {
      title.style.backgroundColor = "blue";
    }
  }, [page]); // page 값이 변경될 때마다 실행

  return (
    <>
      <div>
        <h1 id="title">I LIKE 짬뽕</h1>
      </div>
    </>
  );
};

export default Title;
