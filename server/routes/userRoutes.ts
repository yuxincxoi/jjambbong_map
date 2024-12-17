import express from "express";
import { updateUser } from "../controllers/userController";

const router = express.Router();

// 회원정보 수정
router.put("/:id", updateUser);

export default router;
