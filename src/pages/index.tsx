import React from "react";
import ReactDOM from "react-dom/client";
import "../tailwind.css";
import Map from "../components/Map";
import Title from "../components/Title";

const App: React.FC = () => {
  return (
    <>
      <Title page="wka" />
      <Map />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(<App />);
