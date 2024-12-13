import React, { useState } from "react";
import { Link } from "react-router-dom";
import Title from "../components/Title";
import Input from "../components/Input";
import Button from "../components/Button";

export default function SignupPage() {
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="mt-[170px]">
      <Title />
      <p className="flex justify-center mt-3 text-[#909090] font-thin">
        Create your Account
      </p>
      <form>
        <Input
          type="text"
          placeholder="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-3"
        />
        <Input
          type="text"
          placeholder="ID"
          name="id"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <Input
          type="password"
          placeholder="password"
          name="id"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Input type="password" placeholder="confirm password" />
        <Link to="/">
          <Button
            buttonName="Sign up"
            className="w-60 h-9 mt-4 px-2 py-1 bg-main-color text-white rounded-md hover:border-main-color hover:text-main-color hover:bg-white"
          />
        </Link>
      </form>
    </div>
  );
}
