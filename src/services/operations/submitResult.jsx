import toast from "react-hot-toast";
import { quizRoutes } from "../api";
import { apiConnector } from "../apiconnector";
import { setLoader } from "../../redux/slices/authSlice";

const {SUBMITQUIZ} = quizRoutes

export const submitResult = (marksScored,totalMarks,topicId)=>{
    return async(dispatch)=>{

      
        const token = JSON.parse(localStorage.getItem("token"))
        const newurl = SUBMITQUIZ+`/${topicId}`
        const response = await apiConnector("POST",newurl,{marksScored:marksScored,totalMarks:totalMarks},{
            "Content-type": "application/json; charset=UTF-8",
            "Authorization" : `Bearer ${token}`})

    }
}