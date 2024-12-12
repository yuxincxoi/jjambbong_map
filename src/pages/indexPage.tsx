import React, { useState } from "react";
import { Link } from "react-router-dom";
import Title from "../components/Title";
import Input from "../components/Input";
import Button from "../components/Button";

function IndexPage() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  };

  return (
    <div className="mt-[200px]">
      <Title />
      <form>
        <Input placeholder="ID" className="mt-4" />
        <Input placeholder="password" />
        <Link to="/mainPage">
          <Button
            buttonName="Sign in"
            onClick={(e) => handleSubmit(e)}
            className="w-60 h-9 mt-4 px-2 py-1 bg-main-color text-white rounded-md hover:border-main-color hover:text-main-color hover:bg-white"
          />
        </Link>
      </form>
      <div className="flex mt-8 justify-center text-sm">
        <p className="text-[#909090] font-thin">Don't have an account ?</p>
        <Link to="/signupPage">
          <Button
            buttonName="Sing up"
            className="underline text-[#0570DA] hover:no-underline ml-3"
          />
        </Link>
      </div>
    </div>
  );
}

export default IndexPage;
