import React from "react";
import ReactDOM from "react-dom/client";
import "../tailwind.css";
import Map from "../components/Map";
import Title from "../components/Title";
import InputSearch from "../components/InputSearch";
import PlaceListTable from "../components/PlaceListTable";

const App: React.FC = () => {
  return (
    <>
      <Title page="wka" />
      <Map />
      <InputSearch />
      <PlaceListTable />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(<App />);
