import React from "react";
import { Link } from "react-router-dom";

function IndexPage() {
  return (
    <div>
      <h1>Home Page</h1>
      <Link to="/signupPage">
        <button className="px-2 py-1 bg-main-color text-white rounded mr-2 hover:border-main-color hover:text-main-color hover:bg-white">
          Go to Signup Page
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

export default IndexPage;
