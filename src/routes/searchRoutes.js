import { Router } from "express";
import { index } from "../controller/searchController.js";
const router = Router()

router.get("/",index)

export default router;