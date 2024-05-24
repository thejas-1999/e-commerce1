import express from "express";
import { getDemo } from "../controllers/user.controller.js";

const router = express.Router();

router.get("/", getDemo);

export default router;
