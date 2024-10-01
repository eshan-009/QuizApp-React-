import React from 'react'
import LoginForm from '../components/LoginForm'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const LoginPage = () => {

    const navigate = useNavigate()
    const isLoggedIn = useSelector((state)=>state.Auth.isLoggedIn)
    return (
        <div className='mt-48 flex justify-center items-center' >
          <LoginForm/>
        </div>
      )
  
}

export default LoginPage
