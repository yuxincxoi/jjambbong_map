import React, { useState, useEffect } from "react";
import Title from "../components/Title";
import Input from "../components/Input";
import Button from "../components/Button";
import Nav from "../components/Nav";
import { Modal, CloseModal, ConfirmModal } from "../components/Modal";

export default function MyPage() {
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isModalHidden, setIsModalHidden] = useState(true);
  const [isCloseModalHidden, setIsCloseModalHidden] = useState(true);
  const [isConfirmModalHidden, setIsConfirmModalHidden] = useState(true);
  const [modalMessage, setMoalMessage] = useState("");

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
      setMoalMessage("수정이 완료되었습니다!");
    } catch (error) {
      alert(`회원정보 수정 중 에러가 발생했습니다: ${error}`);
    }
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setIsModalHidden(false);
      setMoalMessage("비밀번호와 비밀번호 확인이 일치하지 않습니다.");
      return;
    }

    setIsConfirmModalHidden(false);
    setMoalMessage("정보를 수정하시겠습니까?");
  };

  return (
    <div className="mt-[170px]">
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
      <Input
        type="text"
        placeholder={name}
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="mt-4"
      />
      <Input
        type="text"
        placeholder={id}
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
