import express from "express";
import { updateUser, likePlace } from "../controllers/userController";
import { authenticateUser } from "../middlewares/auth.middleware";

const router = express.Router();

// 회원정보 수정
router.put("/:id", authenticateUser, updateUser);
router.post("/likeplace", authenticateUser, likePlace);

export default router;
