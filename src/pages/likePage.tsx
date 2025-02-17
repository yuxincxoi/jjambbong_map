import React, { useState } from "react";
import Title from "../components/Title";
import Map from "../components/main/Map";
import PlaceListTable from "../components/main/placeListTable/PlaceListTable";
import Nav from "../components/Nav";
import NavToggle from "../components/NavToggle";

export default function LikePage() {
  const [isNavVisible, setIsNavVisible] = useState(true);

  const toggleNav = () => {
    setIsNavVisible((prev) => !prev);
  };

  return (
    <div className="h-screen flex flex-col">
      <Nav />
      <div className="flex flex-col-reverse lg:flex-row relative overflow-hidden z-40">
        <div className="w-full lg:w-[25%] relative z-50">
          <NavToggle onToggle={toggleNav} isNavVisible={isNavVisible} />
          <Title className="mt-4 ml-2 text-start hidden lg:block" />
          <PlaceListTable disabled={true} isVisible={isNavVisible} />
        </div>
        <div className="transition-all duration-300 lg:flex-1 lg:h-auto h-[300px]">
          <Map isNavVisible={isNavVisible} />
        </div>
      </div>
    </div>
  );
}
