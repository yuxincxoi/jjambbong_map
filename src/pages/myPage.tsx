import React, { useState } from "react";
import Title from "../components/Title";
import Input from "../components/Input";
import Button from "../components/Button";
import Nav from "../components/Nav";

export default function MyPage() {
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("비밀번호와 비밀번호 확인이 일치하지 않습니다.");
      return;
    }

    try {
      const updateData = {
        name,
        id,
        password,
      };

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
    } catch (error) {
      alert(`회원정보 수정 중 에러가 발생했습니다: ${error}`);
    }
  };

  return (
    <div className="mt-[170px]">
      <Nav />
      <Title />
      <Input
        type="text"
        placeholder="name"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="mt-4"
      />
      <Input
        type="text"
        placeholder="ID"
        name="id"
        value={id}
        onChange={(e) => setId(e.target.value)}
        disabled={true}
      />
      <Input
        type="password"
        placeholder="password"
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Input
        type="password"
        placeholder="confirm password"
        name="confirmPassword"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <Button
        buttonName="Save"
        onClick={handleSubmit}
        className="w-60 h-9 mt-4 px-2 py-1 bg-main-color text-white rounded-md hover:border-main-color hover:text-main-color hover:bg-white"
      />
    </div>
  );
}
