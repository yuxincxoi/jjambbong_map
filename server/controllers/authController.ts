import { Request, Response } from "express";
import User from "../../db/models/User.model";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

// 로그인
export const loginUser = async (req: Request, res: Response) => {
  const { id, password } = req.body;

  // 사용자 조회
  const user = await User.findOne({ id });
  if (!user) {
    return res
      .status(401)
      .json({ message: "아이디 또는 비밀번호가 잘못되었습니다." });
  }

  // 비밀번호 검증
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res
      .status(401)
      .json({ message: "아이디 또는 비밀번호가 잘못되었습니다." });
  }
};

// 회원가입
export const registerUser = async (userData: any) => {
  const { email, password, name } = userData;

  // 중복 이메일 확인
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    throw new Error("이미 존재하는 이메일입니다.");
  }

  // 사용자 생성
  const newUser = new User({
    email,
    password,
    name,
  });

  return await newUser.save();
};
