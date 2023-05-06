import express from "express";
import { getFeedPosts, getUserPosts, likePost } from "../controllers/posts.js";
import { verifytToken } from "../middleware/auth.js";

const router = express.Router();

/* READ */
router.get("/", verifytToken, getFeedPosts);
router.get("/:userId/posts", verifytToken, getUserPosts);

/* UPDATE */
router.patch("/:id/like", verifytToken, likePost);

export default router;
