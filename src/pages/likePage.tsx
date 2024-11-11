import React from "react";
import { Link } from "react-router-dom";

export default function LikePage() {
  return (
    <div>
      <h1>Like Page</h1>
      <Link to="/">
        <button>Go to Home Page</button>
      </Link>
      <Link to="/myPage">
        <button>Go to My Page</button>
      </Link>
      <Link to="/mainPage">
        <button>Go to Main Page</button>
      </Link>
    </div>
  );
}
