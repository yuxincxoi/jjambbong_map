import express from "express";
import { updateUser, likePlace } from "../controllers/userController";

const router = express.Router();

// 회원정보 수정
router.put("/:id", updateUser);
router.post("/likeplace", likePlace);

export default router;
