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

  const handleSubmit = async () => {
    const { id, ...updateData } = formData;

    if (updateData.password !== updateData.confirmPassword) {
      alert("비밀번호와 비밀번호 확인이 일치하지 않습니다.");
      return;
    }

    try {
      const response = await fetch(`/api/users/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updateData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "회원정보 수정에 실패했습니다.");
      }

      const updatedUser = await response.json();
      alert("회원정보가 성공적으로 수정되었습니다.");
      console.log("수정된 사용자:", updatedUser);
    } catch (error) {
      console.error("에러 발생:", error);
      alert(`회원정보 수정 중 에러가 발생했습니다: ${error}`);
    }
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
        name="id"
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
        name="confirmPassword"
        value={formData.confirmPassword}
        onChange={handleChange}
      />
      <Button
        buttonName="Save"
        onClick={handleSubmit}
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
