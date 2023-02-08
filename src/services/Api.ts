
//CREATE BY BEDSON GULTOM 8th-FEB-2023
import axios from "axios";
import IItems from "../interfaces/IItems"                               
class Api {
    get = async ()  =>{
        return  await axios.get("http://localhost:3001/items", {
            headers: {
                "Content-Type": "application/json",
                "Accept":"application/json",
                "Cache-Control":"no-cache, no-store",
                "Pragma": "no-cache",
            }
        })
    }

    getBy = async(id:string )=>{
        return await axios.get("http://localhost:3001/items/"+ id, {
            headers: {
                "Content-Type": "application/json",
                "Accept":"application/json",
                //handling response 304 on browser
                "Cache-Control":"no-cache, no-store",
                "Pragma": "no-cache",
            },
        });
    }

    create = async(state: IItems)=>{
        return await axios.post("http://localhost:3001/items", state, {
            headers: {
                "Content-Type": "application/json",
                "Accept":"application/json",
            }
        })
    }

    update = async(id: string, state: IItems)=>{
        return await axios.put("http://localhost:3001/items/" + id, state,{
            headers: {
                "Content-Type": "application/json",
                "Accept":"application/json"
            },
        })   
    }

    delete = async(id: string )=>{
        return await axios.delete("http://localhost:3001/items/"+ id, {
            headers: {
                "Content-Type": "application/json",
                "Accept":"application/json"
            },
        })   
    }

}

export default Api;