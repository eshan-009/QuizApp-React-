import React from 'react'
import { useForm } from 'react-hook-form';
import Button from '../components/Button';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addTopic } from '../services/operations/addTopic';

const AddTopicPage = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

   
    const {
        register,
        setValue,
        handleSubmit,
        formState: { errors,isValid },
      } = useForm();
  return (

    <div className='flex flex-col items-center mt-8 '>
        <h2 className='text-xl mb-5'>Add the Topic name in the input Below</h2>
      <form 
      className='flex flex-col items-center gap-3 m-2'
      onSubmit={handleSubmit((data) => {
        dispatch(addTopic(data.name,data.imageUrl,navigate))
        setValue("name","")
        setValue("imageUrl","")
      })}>
      <input 
      className=' border border-slate-500 rounded-sm outline-slate-500 h-10 w-56 p-3'
      placeholder='Topic Name'
      {...register('name',{ required: true })} 
      />
      {errors.name && <p>Topic Name is required.</p>}

      <input 
      className=' border border-slate-500 rounded-sm outline-slate-500 h-10 w-56 p-3'
      placeholder='Image URL'
      {...register('imageUrl',{ required: true })} 
      />

      <Button
      disable = {!isValid}
      buttonText={'Add Topic'}
      />
      </form>
    </div>
  )
}

export default AddTopicPage
