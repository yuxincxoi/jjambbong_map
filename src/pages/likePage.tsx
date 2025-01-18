import React from "react";
import Title from "../components/Title";
import Map from "../components/main/Map";
import PlaceListTable from "../components/main/placeListTable/PlaceListTable";
import Nav from "../components/Nav";

export default function LikePage() {
  return (
    <div>
      <Nav />
      <Title />
      <Map />
      <PlaceListTable />
    </div>
  );
}
