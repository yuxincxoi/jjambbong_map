import React from "react";
import { Link } from "react-router-dom";
import Title from "../components/Title";
import Input from "../components/Input";

export default function SignupPage() {
  return (
    <div>
      <h1>Signup Page</h1>
      <Title />
      <p className="flex justify-center mt-3 text-[#909090] font-thin">
        Create your Account
      </p>
      <Input placeholder="name" className="mt-3" />
      <Input placeholder="ID" />
      <Input placeholder="password" />
      <Input placeholder="confirm password" />
      <Link to="/">
        <button className="px-2 py-1 bg-main-color text-white rounded mr-2 hover:border-main-color hover:text-main-color hover:bg-white">
          Go to Home Page
        </button>
      </Link>
    </div>
  );
}
