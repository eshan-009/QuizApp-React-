import { setQuizData, setTopics } from "../../redux/slices/dataSlice";
import { quizRoutes } from "../api";
import { apiConnector } from "../apiconnector";

const {GETQUIZ} = quizRoutes

export const getQuiz = (topicId,navigate)=>{
    console.log(topicId)
    return async(dispatch)=>{
        const token = JSON.parse(localStorage.getItem("token"))
       
        const newURL = GETQUIZ+`/${topicId}`
      

        const response = await apiConnector("GET",newURL,{},{
            "Content-type": "application/json; charset=UTF-8",
            "Authorization" : `Bearer ${token}`})

        
            if(response.data.success)
            {
                dispatch(setQuizData(response.data.quiz));
                navigate("/quiz")
            }
            
       
    }
}