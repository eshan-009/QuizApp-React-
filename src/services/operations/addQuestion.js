import toast from "react-hot-toast";
import { quizRoutes } from "../api";
import { apiConnector } from "../apiconnector";
import { setLoader } from "../../redux/slices/authSlice";

const {ADDQUESTION} = quizRoutes

export const addQuestion = (data,topicId)=>{
    return async(dispatch)=>{
        dispatch(setLoader(true))
        const toastId = toast.loading("Adding Question")
        const body = {
            question : data.question,
            Options : [data.option1,data.option2,data.option3,data.option4],
            CorrectAnswer : data.correctAnswer
        }
        console.log(body,topicId)
        const token = JSON.parse(localStorage.getItem("token"))
        const newURL = ADDQUESTION+`/${topicId}`
        const response = await apiConnector("POST",newURL,body,{
            "Content-type": "application/json; charset=UTF-8",
            "Authorization" : `Bearer ${token}`})

            if(response.data.success)
                {
                 toast.dismiss(toastId)
                 toast.success("Question Added")
                
                }
                dispatch(setLoader(false))
    }
}