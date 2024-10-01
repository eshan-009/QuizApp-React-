import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearTracker, setTracker } from '../redux/slices/dataSlice'

const QuestionCard = ({item,index}) => {
    
    const [selected,setSelected] = useState(null)
    const dispatch = useDispatch();
   


    function clickHandler(e,index){
        e.preventDefault();
        setSelected(item.Options[index])
      
        dispatch(setTracker({question : item.question,score : `${item.Options[index]===item.CorrectAnswer ? 1 : 0}` }))
    }

  return (
    <div className=' w-4/5 '>
      <p className='text-2xl'>Q{index+1}{" "}{item.question}</p>

    <div className='flex flex-col items-start gap-3 p-4'>
    {
      item.Options ?  item.Options.map((elem,index)=><button onClick={(e)=>clickHandler(e,index)} key={index} className={`border w-full p-3 flex items-start hover:bg-[#f1faee] text-pretty text-left ${selected===elem ? "bg-[#f1faee]  border border-[#57cc99]":""} `}><b>{String.fromCharCode(65 + index)}) &nbsp;</b> {elem}</button>) : "NO Data"
      }
    </div>
    </div>
  )
}

export default QuestionCard
