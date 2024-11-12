import React from "react";
import { Link } from "react-router-dom";

export default function SignupPage() {
  return (
    <div>
      <h1>Signup Page</h1>
      <Link to="/">
        <button className="px-2 py-1 bg-main-color text-white rounded mr-2 hover:border-main-color hover:text-main-color hover:bg-white">
          Go to Home Page
        </button>
      </Link>
    </div>
  );
}
