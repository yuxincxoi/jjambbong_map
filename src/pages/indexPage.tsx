import React from "react";
import { Link } from "react-router-dom";

function IndexPage() {
  return (
    <div>
      <h1>Home Page</h1>
      <Link to="/signupPage">
        <button>Go to Signup Page</button>
      </Link>
      <Link to="/mainPage">
        <button>Go to Main Page</button>
      </Link>
    </div>
  );
}

export default IndexPage;
