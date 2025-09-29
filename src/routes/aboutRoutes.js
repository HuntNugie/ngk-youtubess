import { Router } from "express";
import { index } from "../controller/aboutController.js";
const router = Router()

router.get("/",index)

export default router;