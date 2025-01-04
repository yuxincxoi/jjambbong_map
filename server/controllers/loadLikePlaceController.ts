import { Response } from "express";
import User from "../../db/models/User.model";
import { AuthenticatedRequest } from "../middlewares/auth.middleware";

// 좋아하는 장소 불러오기
export const loadLikePlace = async (
  req: AuthenticatedRequest,
  res: Response
) => {
  try {
    const userId = req.userId;

    const user = await User.findOne({ id: userId });
    if (!user) {
      return res.status(404).json({ message: "사용자를 찾을 수 없습니다." });
    }

    // 사용자의 좋아요 목록 반환
    return res.status(200).json(user.likePlace);
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "좋아요 목록을 불러오는 중 오류가 발생했습니다." });
  }
};
