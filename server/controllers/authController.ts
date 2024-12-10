import { Request, Response } from "express";
import User from "../../db/models/User.model";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

// 토큰 생성 함수
const generateToken = (id: string) => {
  return jwt.sign({ id }, process.env.JWT_SECRET as string);
};

// 로그인
export const loginUser = async (req: Request, res: Response) => {
  try {
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

    // 토큰 생성
    const token = generateToken(user._id.toString());

    // 쿠키에 토큰 설정
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production" || false,
      maxAge: 3600000,
      sameSite: "strict",
    });

    res.status(200).json({
      message: "로그인 성공",
      user: {
        id: user.id,
        name: user.name,
      },
    });
  } catch (error) {
    res.status(500).json({ message: "로그인 중 오류 발생", error });
  }
};

// 로그아웃
export const logoutUser = (req: Request, res: Response) => {
  res.clearCookie("token");
  res.status(200).json({ message: "로그아웃 성공" });
};

// 회원가입
export const registerUser = async (req: Request, res: Response) => {
  const { name, id, password } = req.body;

  // 중복 id 확인
  const existingUser = await User.findOne({ id });
  if (existingUser) {
    throw new Error("이미 존재하는 이메일입니다.");
  }

  // 사용자 생성
  const newUser = new User({
    id,
    password,
    name,
  });

  return await newUser.save();
};
