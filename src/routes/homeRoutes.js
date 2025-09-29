import {Router} from "express"
import { welcome } from "../controller/homeController.js"
const route = Router()

route.get("/",welcome)

export default route;