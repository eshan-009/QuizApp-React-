import toast from "react-hot-toast";
import { quizRoutes } from "../api";
import { apiConnector } from "../apiconnector";
import { setLoader } from "../../redux/slices/authSlice";

const {ADDTOPIC} = quizRoutes

export const addTopic = (name,imageUrl,navigate)=>{
    return async(dispatch)=>{
        dispatch(setLoader(true))
        const toastId = toast.loading("Adding Topic")
        const token = JSON.parse(localStorage.getItem("token"))
     
        const response = await apiConnector("POST",ADDTOPIC,{name:name,imageUrl:imageUrl},{
            "Content-type": "application/json; charset=UTF-8",
            "Authorization" : `Bearer ${token}`})


           if(response.data.success)
           {
            toast.dismiss(toastId)
            toast.success("Topic Added")
           
           }
           dispatch(setLoader(false))
    }
}