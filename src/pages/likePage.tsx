import React from "react";
import { Link } from "react-router-dom";

export default function LikePage() {
  return (
    <div>
      <h1>Like Page</h1>
      <Link to="/">
        <button className="px-2 py-1 bg-main-color text-white rounded mr-2 hover:border-main-color hover:text-main-color hover:bg-white">
          Go to Home Page
        </button>
      </Link>
      <Link to="/myPage">
        <button className="px-2 py-1 bg-main-color text-white rounded mr-2 hover:border-main-color hover:text-main-color hover:bg-white">
          Go to My Page
        </button>
      </Link>
      <Link to="/mainPage">
        <button className="px-2 py-1 bg-main-color text-white rounded mr-2 hover:border-main-color hover:text-main-color hover:bg-white">
          Go to Main Page
        </button>
      </Link>
    </div>
  );
}
