import { Request, Response } from "express";
import User from "../../db/models/User.model";
import { IUser } from "../../db/interfaces/User.interface";
import bcrypt from "bcryptjs";

// 회원정보 수정
export const updateUser = async (req: Request, res: Response) => {
  try {
    const userId = req.params.id;
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
