import express from "express";
import { getFighter } from "../controller/fighter.controller.js";

const router = express.Router();

router.get("/", getFighter);
export default router;
