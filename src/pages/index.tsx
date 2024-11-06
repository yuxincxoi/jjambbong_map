import React from "react";
import ReactDOM from "react-dom/client";
import "../tailwind.css";
import Map from "../components/main/Map";
import Title from "../components/Title";
import InputSearch from "../components/main/InputSearch";
import PlaceListTable from "../components/main/PlaceListTable";

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
