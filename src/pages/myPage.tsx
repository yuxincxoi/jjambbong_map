import React, { useState, useEffect } from "react";
import Title from "../components/Title";
import Input from "../components/Input";
import Button from "../components/Button";
import Nav from "../components/Nav";
import { Modal, CloseModal, ConfirmModal } from "../components/Modal";
import { validatePassword } from "../modules/validation/passwordValidation";
import { validateName } from "../modules/validation/nameValidation";
import { validateConfirmPassword } from "../modules/validation/confirmPasswordValidation";
import { validateFields } from "../modules/validation/fieldsValidation";

export default function MyPage() {
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isModalHidden, setIsModalHidden] = useState(true);
  const [isCloseModalHidden, setIsCloseModalHidden] = useState(true);
  const [isConfirmModalHidden, setIsConfirmModalHidden] = useState(true);
  const [modalMessage, setModalMessage] = useState("");

  useEffect(() => {
    const fetchUserName = async () => {
      try {
        const response = await fetch("/api/users/me", {
          method: "GET",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (response.ok) {
          const data = await response.json();
          setName(data.name);
          setId(data.id);
        } else {
          console.error("Failed to fetch user information.");
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserName();
  }, []);

  const updateUserInfo = async () => {
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

      setIsCloseModalHidden(false);
      setModalMessage("수정이 완료되었습니다!");

      setTimeout(() => {
        setIsCloseModalHidden(true);
        setPassword("");
        setConfirmPassword("");
      }, 2000);
    } catch (error) {
      alert(`회원정보 수정 중 에러가 발생했습니다: ${error}`);
    }
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (!validateName(name)) {
      setIsModalHidden(false);
      setModalMessage(
        "이름은 2자 이상 20자 이하의 한글 또는 영문만 가능합니다."
      );
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
    setModalMessage("정보를 수정하시겠습니까?");
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
        onConfirm={updateUserInfo}
      />
      <Nav />
      <Title />
      <form className="mt-5">
        <Input
          type="text"
          placeholder={name}
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          firstclassName="w-80 mt-3"
        />
        <Input
          type="text"
          placeholder={id}
          name="id"
          value={id}
          onChange={(e) => setId(e.target.value)}
          disabled={true}
          firstclassName="w-80 mt-8"
          secondclassName="transition duration-200 disabled:bg-gray-50 disabled:text-gray-400 disabled:border-gray-200 disabled:cursor-not-allowed disabled:opacity-75 focus:disabled:ring-0 focus:disabled:border-gray-200"
        />
        <Input
          type="password"
          placeholder="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          firstclassName="w-80 mt-8"
        />
        <p className="flex w-80 mx-auto px-2 mt-1 text-[#909090] font-thin text-xs">
          * 8자 이상/영문/숫자/특수문자 포함
        </p>
        <Input
          type="password"
          placeholder="confirm password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          firstclassName="w-80 mt-3"
        />
        <Button
          buttonName="Save"
          onClick={handleSubmit}
          className="w-80 h-9 mt-10 px-2 py-1 bg-main-color text-white rounded-md hover:border-main-color hover:text-main-color hover:bg-white"
        />
      </form>
    </div>
  );
}
