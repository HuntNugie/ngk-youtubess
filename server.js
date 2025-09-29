import app from "./src/app.js"
import dotenv from "dotenv"

dotenv.config()

const port = process.env.PORT || 3000


app.use((req,res)=>{
    res.status(404).send("tidak ada halaman")
})
app.listen(port,()=>{
    console.log(`berjalan di http://localhost:${port}`)
})