import { Router } from "express";
import { getUser, addUser } from "../controllers/user.js";
const router = Router();

router.get("/", getUser);

router.post("/sign-in", addUser);

export default router;
