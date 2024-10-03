import React, { useEffect } from 'react'
import LoginForm from '../components/LoginForm'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Homescreen from './HomeScreen'

const LoginPage = () => {

    const navigate = useNavigate()
    const isLoggedIn = useSelector((state)=>state.Auth.isLoggedIn)
   useEffect(()=>{
    if(isLoggedIn)
    {
      navigate("/")
    }
  
   },[])
    return (
        <div className='mt-48 flex justify-center items-center' >
    {
        !isLoggedIn &&   <LoginForm/>  
    }
        </div>
      )
  
}

export default LoginPage
