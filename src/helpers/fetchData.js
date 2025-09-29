import axios from "axios";

export const getData = async(link)=>{
    const response = await axios.get(link)
    const data = response.data
    return data
}