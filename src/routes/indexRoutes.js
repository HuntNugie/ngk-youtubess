import {Router} from "express"
import { welcome } from "../controller/indexController.js"
const router = Router()

router.get("/",welcome)

export default router;