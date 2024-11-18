import React from "react";
import { Link } from "react-router-dom";
import Title from "../components/Title";
import Input from "../components/Input";
import Button from "../components/Button";

export default function SignupPage() {
  return (
    <div>
      <Title />
      <p className="flex justify-center mt-3 text-[#909090] font-thin">
        Create your Account
      </p>
      <Input placeholder="name" className="mt-3" />
      <Input placeholder="ID" />
      <Input placeholder="password" />
      <Input placeholder="confirm password" />
      <Link to="/">
        <Button
          buttonName="Sign up"
          className="w-60 h-9 mt-4 px-2 py-1 bg-main-color text-white rounded-md hover:border-main-color hover:text-main-color hover:bg-white"
        />
      </Link>
    </div>
  );
}
