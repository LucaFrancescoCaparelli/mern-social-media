import express from "express";
import {
  getUser,
  getUserFriends,
  addRemoveFriend,
} from "../controllers/users.js";
import { verifytToken } from "../middleware/auth.js";

const router = express.Router();

/* READ */
router.get("/:id/friends", verifytToken, getUserFriends);
router.get("/:id", verifytToken, getUser);

/* UPDATE */
router.patch("/:id/:friendId", verifytToken, addRemoveFriend);

export default router;
