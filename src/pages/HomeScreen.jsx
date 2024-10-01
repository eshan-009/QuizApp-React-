import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getTopics } from '../services/operations/getTopics'
import Card from '../components/Card'
import { Link } from 'react-router-dom'
import { clearTracker } from '../redux/slices/dataSlice'

const Homescreen = () => {
    const dispatch = useDispatch()
    const tracker = useSelector((state)=>state.Data.tracker)
    const isInstructor = useSelector((state)=>state.Auth.isInstructor)
    useEffect(()=>{
        dispatch(getTopics())
    },[])
    const topicData = useSelector((state)=>state.Data.topicList)
    if(tracker.length>0)
        {
           dispatch(clearTracker())
        }
   
  return (
    <div>
      
        <h1 className='flex justify-center text-3xl m-2 mb-3'>Quiz Catalogue</h1>

       <div className='flex flex-wrap justify-center gap-2'>
       {
            topicData ?   topicData.map((item,index)=><Card key={index} item={item}/>)  : "NO DATA"
        }
       </div>
   
      
    </div>
  )
}

export default Homescreen
