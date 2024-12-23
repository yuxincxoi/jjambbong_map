import { Request, Response, NextFunction } from "express";
import { decodeToken } from "../utils/jwtUtils";

export interface AuthenticatedRequest extends Request {
  userId?: string;
}

export const authenticateUser = (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
) => {
  // 쿠키에서 토큰 가져오기
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({ message: "인증 토큰이 없습니다." });
  }

  const decoded = decodeToken(token);
  if (!decoded) {
    return res.status(401).json({ message: "유효하지 않은 토큰입니다." });
  }

  req.userId = decoded.id;
  next();
};
