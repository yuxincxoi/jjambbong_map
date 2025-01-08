import { Response } from "express";
import User from "../../db/models/User.model";
import { IUser } from "../../db/interfaces/User.interface";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { AuthenticatedRequest } from "../middlewares/auth.middleware";

// 회원정보 수정
export const updateUser = async (req: AuthenticatedRequest, res: Response) => {
  try {
    const userId = req.userId;
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
export const likePlace = async (req: AuthenticatedRequest, res: Response) => {
  try {
    const userId = req.userId;
    const { likedPlaces } = req.body;

    // 사용자 찾기
    const user = await User.findOne({ id: userId });
    if (!user) {
      return res.status(404).json({ message: "사용자를 찾을 수 없습니다." });
    }

    // 이미 좋아요한 장소인지 확인
    const existingIndex = user.likePlace.findIndex(
      (place) =>
        place.placeName === likedPlaces.placeName &&
        place.address === likedPlaces.address
    );

    if (existingIndex !== -1) {
      user.likePlace.splice(existingIndex, 1);
      console.log("좋아요 취소");
      console.log(user.likePlace);
    } else {
      user.likePlace.push(likedPlaces);
      console.log("좋아요 추가");
      console.log(user.likePlace);
    }

    // 변경사항 저장
    await user.save();

    res.status(200).json({ message: "likePlace가 업데이트되었습니다." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "likePlace 업데이트 실패" });
  }
};

export const userInfo = async (req: AuthenticatedRequest, res: Response) => {
  try {
    const userId = req.userId;

    if (!userId) {
      return res.status(401).json({ message: "인증되지 않은 사용자입니다." });
    }

    const user = await User.findOne({ id: userId });
    if (!user) {
      return res.status(404).json({ message: "사용자를 찾을 수 없습니다." });
    }

    res.status(200).json({ name: user.name });
  } catch (error) {
    console.error("Error fetching user data:", error);
    res.status(500).json({ message: "서버 오류가 발생했습니다." });
  }
};
