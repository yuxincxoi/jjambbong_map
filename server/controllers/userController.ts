import { Request, Response } from "express";
import User from "../../db/models/User.model";
import { IUser } from "../../db/interfaces/User.interface";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

// 회원정보 수정
export const updateUser = async (req: Request, res: Response) => {
  try {
    // 쿠키에서 토큰 가져오기
    const token = req.cookies.token;
    if (!token) {
      return res.status(401).json({ message: "인증 토큰이 없습니다." });
    }

    // 토큰 해독하여 userId 추출
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET || "defaultSecret"
    ) as { id: string };
    const userId = decoded.id;
    const { name, password } = req.body;

    const user = await User.findOne({ id: userId });
    if (!user) {
      return res.status(404).json({ message: "사용자를 찾을 수 없습니다." });
    }

    // 이름 업데이트
    if (name) {
      user.name = name;
    }

    // 비밀번호 해싱
    if (password) {
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);
    }

    const updatedUser = await user.save();

    return res.status(200).json({
      message: "회원정보 수정 성공",
      user: {
        id: updatedUser.id,
        name: updatedUser.name,
      },
    });
  } catch (error) {
    return res.status(500).json({ message: "회원정보 수정 중 오류 발생" });
  }
};

// 좋아요 관리
export const likePlace = async (req: Request, res: Response) => {
  // 쿠키에서 토큰 가져오기
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({ message: "인증 토큰이 없습니다." });
  }

  try {
    // 토큰 해독하여 userId 추출
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET || "defaultSecret"
    ) as { id: string };
    const userId = decoded.id;
    const { likedPlaces } = req.body;

    await User.updateOne({ id: userId }, { $set: { likePlace: likedPlaces } });
    res.status(200).json({ message: "likePlace가 업데이트되었습니다." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "likePlace 업데이트 실패" });
  }
};
