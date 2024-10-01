import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'

const ScoreSheet = () => {
    
  
    const location = useLocation()
const {scorelist,totalMarks,tracker} = location.state || {}
const marksScored = scorelist.reduce((acc,curr)=>acc = acc+curr,0)


  return (
    <div>
     <div className='flex flex-col items-center text-2xl'>
     <p>Marks Scored : {marksScored}/{totalMarks} </p>
     
     </div>
        <h2 className='text-3xl w-full flex justify-center m-3'>Summary</h2>
     <div className='w-[90%] flex flex-col mx-auto'>
     {
       tracker &&   tracker.map((item,index)=><p key={index} className={`border w-full p-3 flex items-start ${item.score==1? "bg-[#a6ea8f] ":"bg-[#eb757f]"}`}><b>Q{index+1}:-</b>{item.question}</p>)
      }
     </div>
    </div>
  )
}

export default ScoreSheet
