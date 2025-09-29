import express from "express"; 
import expressEjsLayouts from "express-ejs-layouts";
import morgan from "morgan";
import defaultRouter from "./routes/indexRoutes.js"
const app = express()

app.set("view engine","ejs")
app.use(expressEjsLayouts)
app.use(morgan("dev"))

// route
app.use("/",defaultRouter);
export default app;
