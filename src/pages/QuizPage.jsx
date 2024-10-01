import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import QuestionCard from '../components/QuestionCard';
import Button from '../components/Button';
import { useLocation, useNavigate } from 'react-router-dom';


const QuizPage = () => {
    // const quizData = useSelector((state) => state.Data.quizData);
      const tracker = useSelector((state)=>state.Data.tracker)
     const location = useLocation()
     const {quizData} = location.state || {}
      const quizLength = quizData ? quizData.length : 0

      const navigate = useNavigate()
    const Score =[]
    function quizSubmission()
    {
        tracker.map((item)=>{
            if(item.score==1)
            {
                Score.push(1)
            }
        })
        navigate("/scoresheet",{state : {scorelist : Score,totalMarks:quizLength,tracker:tracker},replace:true})
      
    }

  return (
    <div className='flex flex-col items-center mb-6'>
      {
        quizData ? quizData.map((item,index)=><QuestionCard 
        
        key={index} index={index} item={item}/>) : "No Data"
      }

      <Button
        clickHandler={quizSubmission}
       buttonText={'Submit Quiz'}/>
    </div>
  )
}

export default QuizPage
