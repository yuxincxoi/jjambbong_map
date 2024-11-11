import React from "react";
import { Link } from "react-router-dom";

export default function MyPage() {
  return (
    <div>
      <h1>My Page</h1>
      <Link to="/mainPage">
        <button>Go to Main Page</button>
      </Link>
      <Link to="/">
        <button>Go to Home Page</button>
      </Link>
    </div>
  );
}
