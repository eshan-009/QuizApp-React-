import { setTopics } from "../../redux/slices/dataSlice";
import { quizRoutes } from "../api";
import { apiConnector } from "../apiconnector";


const {GETTOPICS} = quizRoutes

export const getTopics = ()=>{
    return async(dispatch)=>{
        
        const response = await apiConnector("GET",GETTOPICS);
       
        dispatch(setTopics(response.data.data))
       
    }
}