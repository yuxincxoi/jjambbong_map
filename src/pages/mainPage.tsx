import { useState } from "react";
import Map from "../components/main/Map";
import Title from "../components/Title";
import PlaceListTable from "../components/main/placeListTable/PlaceListTable";
import Nav from "../components/Nav";
import NavToggle from "../components/NavToggle";

const MainPage: React.FC = () => {
  const [isNavVisible, setIsNavVisible] = useState(true);

  const toggleNav = () => {
    setIsNavVisible((prev) => !prev);
  };

  return (
    <div className="h-screen flex flex-col">
      <Nav />
      <div className="flex flex-col-reverse lg:flex-row relative overflow-hidden z-40">
        <div className="w-full lg:w-[25%] relative z-50 lg:bg-white">
          <NavToggle onToggle={toggleNav} isNavVisible={isNavVisible} />
          <Title className="mt-4 ml-2 text-start hidden lg:block" />
          <PlaceListTable disabled={false} isVisible={isNavVisible} />
        </div>
        <div
          className={`transition-all duration-300 lg:flex-1 ${
            isNavVisible
              ? "h-[300px] lg:h-auto"
              : "h-[calc(100vh-80px)] lg:h-auto"
          }`}
        >
          <Map />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
