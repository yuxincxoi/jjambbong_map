import { Request, Response } from "express";
import User from "../../db/models/User.model";
import { IUser } from "../../db/interfaces/User.interface";

// 회원정보 수정
export const updateUser = async (req: Request, res: Response) => {
  const user = await User.findById(userId);
  if (!user) {
    throw new Error("사용자를 찾을 수 없습니다.");
  }

  Object.keys(updateData).forEach((key) => {
    if (key in user) {
      (user as any)[key] = updateData[key as keyof IUser];
    }
  });

  return await user.save();
};
