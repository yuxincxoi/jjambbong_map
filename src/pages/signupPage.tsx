import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Title from "../components/Title";
import Input from "../components/Input";
import Button from "../components/Button";

export default function SignupPage() {
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("비밀번호와 비밀번호 확인이 일치하지 않습니다.");
      return;
    }

    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ name, id, password }),
      });

      // 응답 상태 확인
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "회원가입 실패");
      }

      const data = await response.json();

      // 로그인 성공 시 인덱스 페이지로 이동
      navigate("/");
    } catch (error) {
      alert("회원가입 중 예기치 않은 오류가 발생했습니다.");
    }
  };

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
        <Input
          type="password"
          placeholder="confirm password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <Button
          buttonName="Sign up"
          onClick={(e) => handleSubmit(e)}
          className="w-60 h-9 mt-4 px-2 py-1 bg-main-color text-white rounded-md hover:border-main-color hover:text-main-color hover:bg-white"
        />
      </form>
      <div className="flex justify-start">
        <Link to="/">
          <Button
            buttonName="이전으로"
            className="px-2 py-1 bg-main-color text-white rounded mr-2 hover:border-main-color hover:text-main-color hover:bg-white"
          />
        </Link>
      </div>
    </div>
  );
}
