import React from 'react'
import { useForm } from 'react-hook-form';
import Button from '../components/Button';
import { useDispatch, useSelector } from 'react-redux';
import { addQuestion } from '../services/operations/addQuestion';
import { useNavigate } from 'react-router-dom';

const AddQuestionPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const {
        register,
        setValue,
        handleSubmit,
        formState: { errors ,isValid},
        watch
      } = useForm();

      const correctAnswer = watch("correctAnswer");
      const option1 =watch("option1");
      const option2 =watch("option2");
      const option3 =watch("option3");
      const option4 = watch("option4");

      const validateCorrectAnswer = (value) =>
        value === option1 || value === option2 || value === option3 || value === option4 || 'Correct Answer should match one of the options';

      const topicId = useSelector((state)=>state.Data.currentTopic)
      
  return (
    <div className='flex justify-center'>
      <form 
      className='flex flex-col gap-4 w-96 m-2 '
      onSubmit={handleSubmit((data) =>{
        dispatch(addQuestion(data,topicId))
        setValue("correctAnswer","")
        setValue("option1","")
        setValue("option2","")
        setValue("option3","")
        setValue("option4","")
        setValue("question","")
      })}>
      <input 
      className='border w-full h-14 p-3'
      placeholder='Question'
      {...register('question',{required:true})} 
      />
      {errors.question && <p>question is required.</p>}
    <input 
     className='border w-full h-14 p-3'
    placeholder='Option 1'
      {...register('option1',{required:true})} 
      />
     {errors.option1 && <p>option1 is required.</p>}
    <input 
     className='border w-full h-14 p-3'
       placeholder='Option 2'
      {...register('option2',{required:true})} 
      />
         {errors.option2 && <p>option2 is required.</p>}
    <input 
     className='border w-full h-14 p-3'
       placeholder='Option 3'
      {...register('option3',{required:true})} 
      />
         {errors.option3 && <p>option3 is required.</p>}
    <input 
     className='border w-full h-14 p-3'
       placeholder='Option 4'
      {...register('option4',{required:true})} 
      />
         {errors.option4 && <p>option4 is required.</p>}
    <input 
     className='border w-full h-14 p-3'
       placeholder='Correct Answer'
      {...register('correctAnswer',{required:true, validate: validateCorrectAnswer,})} 
      />
    {errors.correctAnswer || !(correctAnswer === option1 || correctAnswer === option2 || correctAnswer === option3 || 
    correctAnswer === option4) && (<p>Correct Answer is required and  should match one of the options</p>)}
     <div className='flex justify-center'>
     <Button
       disable = {!isValid}
      buttonText={'Add Question'}
    
      />
     </div>
      </form>
    </div>
  )
}

export default AddQuestionPage
