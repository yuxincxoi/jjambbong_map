import React from "react";
import ReactDOM from "react-dom/client";
import "./test.css";

const App: React.FC = () => {
  return (
    <div>
      <h1>Hello world !</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(<App />);
