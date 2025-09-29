import axios from "axios";
import dotenv from "dotenv"
dotenv.config()

const api = process.env.API

export const welcome = function(req,res){
    res.send("<h1>Hello Express dari Nugie</h1>")
}