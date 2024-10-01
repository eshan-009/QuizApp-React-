import toast from "react-hot-toast";
import { setInstructor, setLoader, setLoggedIn, setToken } from "../../redux/slices/authSlice";
import { authRoutes } from "../api";
import { apiConnector } from "../apiconnector";

const {LOGIN,SIGNUP} = authRoutes

export const signUp = (userName,email,password,isInstructor,navigate)=>{
   
    return async(dispatch)=>{
        dispatch(setLoader(true))
        const toastId = toast.loading("Signing In")
        const body = {
            userName : userName,
            email : email,
            password : password ,
            isInstructor:isInstructor=="false" ? false : true
        }
        console.log(body)
        const response = await apiConnector("POST",SIGNUP,body)

       if(response.data.success)
       {
        toast.dismiss(toastId)
        toast.success("Signed up successfully")
        dispatch(setLoader(false))
        navigate("/login")
       }
       else
       {
        toast.dismiss(toastId)
        dispatch(setLoader(false))
        toast.error("Error Signing in!! Try Again")
       }

       
      
    }
}

export const login = (email,password,navigate)=>{
    return async(dispatch)=>{
        dispatch(setLoader(true))
        const toastId = toast.loading("Logging In")
        const body = {
            email : email,
            password : password 
        }

        const response = await apiConnector("POST",LOGIN,body)
        console.log(response)
   
     
       
      
       if(response.data.success)
       {
        if(response.data.isInstructor)
            {
               
                dispatch(setInstructor(response.data.isInstructor))
            }
        dispatch(setLoggedIn(true))
        dispatch(setToken(response.data.token))
        toast.dismiss(toastId)
        toast.success("Logged In")
        dispatch(setLoader(false))
        navigate("/")
       
       }
       else
       {
        toast.dismiss(toastId)
      
        toast.error("Error Logging in!! Try Again")
     
       }
      setTimeout(()=>{
        toast.dismiss(toastId)
        dispatch(setLoader(false))
      },2000)

    }
}
