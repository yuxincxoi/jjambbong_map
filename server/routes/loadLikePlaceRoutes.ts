import express from "express";
import { loadLikePlace } from "../controllers/loadLikePlaceController";
import { authenticateUser } from "../middlewares/auth.middleware";

const router = express.Router();

router.get("/likes", authenticateUser, loadLikePlace);

export default router;
