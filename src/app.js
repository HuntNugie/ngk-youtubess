import express, { Router } from "express"; 
import expressEjsLayouts from "express-ejs-layouts";
import path from "path"
import morgan from "morgan";
import * as Routerss from "./routes/routers.js"
import {fileURLToPath} from "url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const app = express()


app.use((req,res,next)=>{
    res.locals.paths = req.path
    next()
})
app.set("view engine","ejs")
app.set("views",`${__dirname}/views`)
app.use(expressEjsLayouts)
app.use(morgan("dev"))

// route
app.get("/",(req,res)=>{
    res.redirect("/home")
});

app.use("/home",Routerss.homeRouter)
app.use("/about",Routerss.aboutRouter)
app.use("/search",Routerss.searchRouter)
export default app;
