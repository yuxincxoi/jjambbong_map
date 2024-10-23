import React from "react";
import ReactDOM from "react-dom/client";
import "../tailwind.css";
import Map from "../components/Map";

const App: React.FC = () => {
  return (
    <>
      <Map />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(<App />);
