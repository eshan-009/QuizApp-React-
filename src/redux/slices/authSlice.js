import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoggedIn : localStorage.getItem("token") ? true : false,
    token  : localStorage.getItem("token") ? localStorage.getItem("token") : null,
    isInstructor : localStorage.getItem("isInstructor")==="false"  && false || localStorage.getItem("isInstructor")==="true"  && true || null ,
    loaderStatus : false
}
const authSlice = createSlice({
    name : "Auth",
    initialState : initialState,
    reducers :{
        setLoggedIn : (state,action)=>{
            state.isLoggedIn = action.payload
        },
        setToken : (state,action)=>{
            localStorage.setItem("token",JSON.stringify(action.payload))
            state.token = action.payload
        },
        setInstructor :(state,action)=>{
            state.isInstructor = action.payload
            localStorage.setItem("isInstructor",action.payload)
        } ,
        setLoader:(state,action)=>{
            state.loaderStatus = action.payload
        }  
    }
})

export const {setLoggedIn,setToken,setInstructor,setLoader} = authSlice.actions
export default authSlice.reducer