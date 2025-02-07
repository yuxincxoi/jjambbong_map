import React from "react";
import Title from "../components/Title";
import Map from "../components/main/Map";
import PlaceListTable from "../components/main/placeListTable/PlaceListTable";
import Nav from "../components/Nav";

export default function LikePage() {
  return (
    <>
      <Nav />
      <div className="flex">
        <div className="w-[25%]">
          <Title className="mt-4 ml-2 text-start" />
          <PlaceListTable disabled={true} />
        </div>
        <Map />
      </div>
    </>
  );
}
