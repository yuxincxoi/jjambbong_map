import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Title from "../components/Title";
import Input from "../components/Input";
import Button from "../components/Button";
import { Modal, CloseModal, ConfirmModal } from "../components/Modal";
import { validateEmail } from "../modules/validation/emailValidation";
import { validatePassword } from "../modules/validation/passwordValidation";
import { validateName } from "../modules/validation/nameValidation";

export default function SignupPage() {
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isModalHidden, setIsModalHidden] = useState(true);
  const [isCloseModalHidden, setIsCloseModalHidden] = useState(true);
  const [isConfirmModalHidden, setIsConfirmModalHidden] = useState(true);
  const [modalMessage, setModalMessage] = useState("");
  const navigate = useNavigate();

  const createUser = async () => {
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

      setIsCloseModalHidden(false);
      setModalMessage("회원가입이 완료되었습니다!");

      // 로그인 성공 시 2초 후 인덱스 페이지로 이동
      setTimeout(() => {
        setIsCloseModalHidden(true);
        navigate("/");
      }, 2000);
    } catch (error) {
      alert("회원가입 중 예기치 않은 오류가 발생했습니다.");
    }
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (!validateName(name)) {
      setIsModalHidden(false);
      setModalMessage(
        "이름은 2자 이상 20자 이하의 한글 또는 영문만 가능합니다."
      );
      return;
    }

    if (!validateEmail(id)) {
      setIsModalHidden(false);
      setModalMessage("유효한 이메일 주소를 입력하세요.");
      return;
    }

    if (!validatePassword(password)) {
      setIsModalHidden(false);
      setModalMessage(
        "비밀번호는 8자 이상/영문/숫자/특수문자를 포함해야 합니다."
      );
      return;
    }

    if (password !== confirmPassword) {
      setIsModalHidden(false);
      setModalMessage("비밀번호와 비밀번호 확인이 일치하지 않습니다.");
      return;
    }

    setIsConfirmModalHidden(false);
    setModalMessage("회원가입 하시겠습니까?");
  };

  return (
    <div className="mt-[140px]">
      <Modal
        message={modalMessage}
        isHidden={isModalHidden}
        setIsHidden={setIsModalHidden}
      />
      <CloseModal
        message={modalMessage}
        isHidden={isCloseModalHidden}
        setIsHidden={setIsCloseModalHidden}
      />
      <ConfirmModal
        message={modalMessage}
        isHidden={isConfirmModalHidden}
        setIsHidden={setIsConfirmModalHidden}
        onConfirm={createUser}
      />
      <Title />
      <p className="flex justify-center mt-3 text-[#909090] font-thin">
        Create your Account
      </p>
      <form className="mt-5">
        <Input
          type="text"
          placeholder="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-3"
        />
        <p className="flex w-80 mx-auto px-2 mt-1 text-[#909090] font-thin text-sm">
          * 2~20자 이하의 한글 또는 영문
        </p>
        <Input
          type="text"
          placeholder="email"
          name="id"
          value={id}
          onChange={(e) => setId(e.target.value)}
          className="mt-3"
        />
        <Input
          type="password"
          placeholder="password"
          name="id"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mt-9"
        />
        <p className="flex w-80 mx-auto px-2 mt-1 text-[#909090] font-thin text-sm">
          * 8자 이상/영문/숫자/특수문자 포함
        </p>
        <Input
          type="password"
          placeholder="confirm password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="mt-3"
        />
        <Button
          buttonName="Sign up"
          onClick={(e) => handleSubmit(e)}
          className="w-80 h-9 mt-10 px-2 py-1 bg-main-color text-white rounded-md hover:border-main-color hover:text-main-color hover:bg-white"
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
