import React from "react";
import { Link } from "react-router-dom";
import Title from "../components/Title";
import Input from "../components/Input";
import Button from "../components/Button";

export default function MyPage() {
  return (
    <div>
      <Title />
      <Input placeholder="name" />
      <Input placeholder="ID" />
      <Input placeholder="password" />
      <Input placeholder="confirm password" />
      <Button
        buttonName="Save"
        className="w-60 h-9 mt-4 px-2 py-1 bg-main-color text-white rounded-md hover:border-main-color hover:text-main-color hover:bg-white"
      />
      <div className="flex justify-start">
        <Link to="/mainPage">
          <Button
            buttonName="Go to Main Page"
            className="px-2 py-1 bg-main-color text-white rounded mr-2 hover:border-main-color hover:text-main-color hover:bg-white"
          />
        </Link>
        <Link to="/">
          <Button
            buttonName="Go to Home Page"
            className="px-2 py-1 bg-main-color text-white rounded hover:border-main-color hover:text-main-color hover:bg-white"
          />
        </Link>
      </div>
    </div>
  );
}
