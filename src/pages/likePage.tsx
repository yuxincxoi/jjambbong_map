import React from "react";
import Title from "../components/Title";
import Map from "../components/main/Map";
import PlaceListTable from "../components/main/placeListTable/PlaceListTable";
import Nav from "../components/Nav";

export default function LikePage() {
  return (
    <>
      <Nav />
      <div className="flex flex-col-reverse lg:flex-row">
        <div className="w-full lg:w-[25%]">
          <Title className="mt-4 ml-2 text-start hidden lg:block" />
          <PlaceListTable disabled={true} />
        </div>
        <div className="h-[300px] lg:h-auto lg:flex-1">
          <Map />
        </div>
      </div>
    </>
  );
}
