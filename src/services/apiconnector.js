import axios from "axios"


export const axiosInstance = axios.create({})

export const apiConnector = (method,URL,body,headers,params)=>{
    return axiosInstance({
        method : method,
        url : URL,
        data : body ? JSON.stringify(body) : null,
        headers : headers ? headers :  {
            "Content-type": "application/json; charset=UTF-8",
           
        } ,
        params : params ? params : null
    })
}