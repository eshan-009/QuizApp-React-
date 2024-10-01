import React from 'react'
import { useSelector } from 'react-redux'
import LoginPage from '../pages/LoginPage'

const ProtectedRoute = ({children}) => {
    const isLoggedIn = useSelector((state)=>state.Auth.isLoggedIn)
    if(isLoggedIn)
    {
        return children
    }
    else
    {
      return  <LoginPage></LoginPage>
    }
 
}

export default ProtectedRoute
