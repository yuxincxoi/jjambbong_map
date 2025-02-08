import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Title from "../components/Title";
import Input from "../components/Input";
import Button from "../components/Button";
import { Modal, CloseModal, ConfirmModal } from "../components/Modal";
import { validateEmail } from "../modules/validation/emailValidation";
import { validatePassword } from "../modules/validation/passwordValidation";
import { validateName } from "../modules/validation/nameValidation";
import { validateConfirmPassword } from "../modules/validation/confirmPasswordValidation";
import { validateFields } from "../modules/validation/fieldsValidation";

export default function SignupPage() {
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isModalHidden, setIsModalHidden] = useState(true);
  const [isCloseModalHidden, setIsCloseModalHidden] = useState(true);
  const [isConfirmModalHidden, setIsConfirmModalHidden] = useState(true);
  const [modalMessage, setModalMessage] = useState("");
  const [btnStyle, setBtnStyle] = useState("bg-sub-color");
  const navigate = useNavigate();

  useEffect(() => {
    if (
      !validateName(name) ||
      !validateEmail(id) ||
      !validatePassword(password) ||
      !validateConfirmPassword(password, confirmPassword) ||
      !validateFields(id, name, password, confirmPassword)
    ) {
      setBtnStyle("bg-sub-color hover:text-sub-color");
    } else {
      setBtnStyle("");
    }
  }, [name, id, password, confirmPassword]);

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

    if (!validateConfirmPassword(password, confirmPassword)) {
      setIsModalHidden(false);
      setModalMessage("비밀번호와 비밀번호 확인이 일치하지 않습니다.");
      return;
    }

    setIsConfirmModalHidden(false);
    setModalMessage("회원가입 하시겠습니까?");
  };

  const handleDuplication = async () => {
    try {
      if (!id) {
        setIsModalHidden(false);
        setModalMessage("이메일을 입력해주세요.");
        return;
      }

      const response = await fetch(
        `/api/users/email-check?id=${encodeURIComponent(id)}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        }
      );

      // 응답 상태 확인
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "이메일 중복 확인 실패");
      }

      const data = await response.json();

      setIsModalHidden(false);
      setModalMessage(
        data.isDuplicate
          ? "이미 사용 중인 이메일입니다."
          : "사용 가능한 이메일입니다."
      );
    } catch (error) {
      alert("이메일 중복 확인 중 예기치 않은 오류가 발생했습니다.");
    }
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
      <p className="flex justify-center text-[#909090] font-thin text-2xl">
        Create your Account
      </p>
      <form className="mt-5">
        <Input
          type="text"
          placeholder="이름"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          firstclassName="w-80 mt-3"
        />
        <div className="mt-8 flex justify-center">
          <Input
            type="text"
            placeholder="E-mail"
            name="id"
            value={id}
            onChange={(e) => setId(e.target.value)}
            firstclassName="w-80"
          />
          <Button
            buttonName="중복 확인"
            type="button"
            onClick={handleDuplication}
            className="bg-main-color w-16 h-8 text-white text-sm rounded-lg absolute z-10 my-[5px] mr-[74px] hover:border-main-color hover:text-main-color hover:bg-white"
          />
        </div>
        <Input
          type="password"
          placeholder="비밀번호"
          name="id"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          firstclassName="w-80 mt-8"
        />
        <p className="flex w-80 mx-auto px-2 mt-1 text-[#909090] font-thin text-xs">
          * 8자 이상/영문/숫자/특수문자 포함
        </p>
        <Input
          type="password"
          placeholder="비밀번호 확인"
          name="confirmPassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          firstclassName="w-80 mt-3"
        />
        <Button
          buttonName="Sign up"
          onClick={(e) => handleSubmit(e)}
          className={`w-80 h-9 mt-10 px-2 py-1 text-white rounded-md bg-main-color hover:border-main-color hover:text-main-color hover:bg-white ${btnStyle}`}
        />
      </form>
      <div className="flex justify-center">
        <Link to="/">
          <Button
            buttonName="이전으로"
            className="w-80 h-9 mt-2 px-2 py-1 rounded-md font-medium border-main-color text-main-color bg-white"
          />
        </Link>
      </div>
    </div>
  );
}
