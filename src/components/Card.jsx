import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getQuiz } from '../services/operations/getQuiz';
import { useNavigate } from 'react-router-dom';
import { setCurrentTopic } from '../redux/slices/dataSlice';

const Card = ({item}) => {
 const dispatch = useDispatch()
 const navigate = useNavigate()
 const isLoggedIn = useSelector((state)=>state.Auth.isLoggedIn)

  return (
    <div 
    onClick={(e)=>{
        e.preventDefault();
        if(!isLoggedIn)
        {
            navigate("/login")
        }
        else
        {
            dispatch(getQuiz(item._id,navigate))
        dispatch(setCurrentTopic(item._id))
        }
        
      
    }}
  
    className='border w-60 h-80 flex flex-col justify-between items-center py-8 hover:scale-90'>
        <img className='max-w-56' src={item.imageUrl} ></img>
      <p>{item.name}</p>
    </div>
  )
}

export default Card
