import { createSlice, current } from "@reduxjs/toolkit";
import { act } from "react";
const initialState = {
topicList : [],
quizData : [],
currentTopic : null,
tracker:[]
}
const dataSlice = createSlice({
    name : "Data",
    initialState : initialState,
    reducers :{
        setTopics : (state,action)=>{
        
           state.topicList = action.payload
        },
        setQuizData : (state,action)=>{ 
       state.quizData = action.payload
        },

        setCurrentTopic : (state,action)=>{
            state.currentTopic = action.payload
        },
        setTracker :(state,action)=>{
            state.tracker = state.tracker.filter((item)=>item.question!==action.payload.question)
            state.tracker.push(action.payload)
        },
        clearTracker:(state,action)=>{
            state.tracker = []
        }
    }
})

export const {setTopics,setQuizData,setCurrentTopic,setTracker,clearTracker} = dataSlice.actions
export default dataSlice.reducer