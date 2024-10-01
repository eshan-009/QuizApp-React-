

import React from 'react'
import { useForm } from 'react-hook-form'
import Button from '../components/Button';
import { signUp } from '../services/operations/auth';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const SignUpForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        formState: { errors ,isValid },
        watch,
      } = useForm();

      const password = watch("password");
      const confirmPassword = watch("confirmPassword");
  return (
    <div className='flex  flex-col w-3/4 justify-start items-center gap-20 mx-auto'>
        <p className='text-5xl '>SignUp</p>
      <form  
      className='flex flex-col w-full max-w-[30rem] h-full justify-start items-center gap-5 '
      onSubmit={handleSubmit((data) => dispatch(signUp(data.userName,data.email,data.password,data.isInstructor,navigate)))}>
      <input
      type='text'
       className=' outline-black border border-black w-full h-14 p-2 text-xl'
       placeholder='User name'
      {...register('userName')} />
      <input
       className='outline-black border border-black w-full h-14 p-2 text-xl'
       type='email'
         
        placeholder='email'
      {...register('email', { required: true })} />
      {errors.email && <p className='text-red-500'>email is required.</p>}

   

    

      <input 
         type='password'
       className='outline-black border border-black w-full h-14 p-2 text-xl'
        placeholder='password'
      {...register('password', { required: true })} />
      {errors.password && <p className='text-red-500'>Password is required.</p>}
      <input 
       className='outline-black border border-black w-full h-14 p-2 text-xl'
       type='password'
         name="confirmPassword"
        placeholder='Confirm Password'
      {...register('confirmPassword', { required: true })} />
      {(errors.confirmPassword || confirmPassword !== password) && (
    <p className='text-red-500'>Confirm password is required and must match.</p>
  )}

<div className=' w-full h-14 p-2 text-xl gap-3 flex justify-center items-center flex-wrap mb-3' >
<label htmlFor='isInstructor' >Instructor Account</label>
        <select 
        id='isInstructor'
        className='w-14'
        {...register("isInstructor")}>
            <option value="true">Yes</option>
            <option value="false">No</option>
        </select>
        {errors.isInstructor && <p className='text-red-500'>isInstructor is required.</p>}
</div>
      <button 
    className='w-2/3 h-16 text-xl bg-yellow-300 rounded-lg'
    disabled = {!isValid}
    >SignUp</button>
      </form>
    
    </div>
  )
}

export default SignUpForm
