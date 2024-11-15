import React from "react";
import { Link } from "react-router-dom";
import Title from "../components/Title";
import Input from "../components/Input";

function IndexPage() {
  return (
    <div>
      <h1>Home Page</h1>
      <Title />
      <Input placeholder="ID" className="mt-4" />
      <Input placeholder="password" />
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
