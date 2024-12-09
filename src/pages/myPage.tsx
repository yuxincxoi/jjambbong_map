import React, { useState } from "react";
import { Link } from "react-router-dom";
import Title from "../components/Title";
import Input from "../components/Input";
import Button from "../components/Button";

export default function MyPage() {
  const [formData, setFormData] = useState({
    name: "",
    id: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="mt-[170px]">
      <Title />
      <Input
        placeholder="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        className="mt-4"
      />
      <Input
        placeholder="ID"
        name="ID"
        value={formData.id}
        onChange={handleChange}
      />
      <Input
        placeholder="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
      />
      <Input
        placeholder="confirm password"
        name="confirm password"
        value={formData.confirmPassword}
        onChange={handleChange}
      />
      <Button
        buttonName="Save"
        className="w-60 h-9 mt-4 px-2 py-1 bg-main-color text-white rounded-md hover:border-main-color hover:text-main-color hover:bg-white"
      />
      <div className="flex justify-start">
        <Link to="/mainPage">
          <Button
            buttonName="Main Page"
            className="px-2 py-1 bg-main-color text-white rounded mr-2 hover:border-main-color hover:text-main-color hover:bg-white"
          />
        </Link>
        <Link to="/">
          <Button
            buttonName="Logout"
            className="px-2 py-1 bg-main-color text-white rounded hover:border-main-color hover:text-main-color hover:bg-white"
          />
        </Link>
      </div>
    </div>
  );
}
