import express from "express";
import { loadLikePlace } from "../controllers/loadLikePlaceController";

const router = express.Router();

router.get("/mainPage", loadLikePlace);

export default router;
