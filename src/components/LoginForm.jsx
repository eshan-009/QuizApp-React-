import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form';
import { login } from '../services/operations/auth';
import Button from './Button';

const LoginForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

  return (
    <div className=' w-3/4   flex flex-col  gap-10 items-center'>
      <h1 className='text-3xl '>Login</h1>
     <form 
     className='flex flex-col max-w-[30rem] items-center gap-3 m-2 w-full'
      onSubmit={handleSubmit((data) =>dispatch(login(data.email,data.password,navigate)))}>
        <input
        className='outline-black border border-black w-full h-12 p-3'
        placeholder='Email'
        type='email'
        {...register('email')}
        />
        {errors.email && <p>email is required.</p>}
        <input
         className='outline-black border border-black w-full h-12 p-3'
         type='password'
        placeholder='Password'
        {...register('password')}
        />

        <Button
        buttonText={"Login"}
        buttonStyle = {"bg-yellow-300 h-11 w-44"}
        />
     </form>
    </div>
  )
}

export default LoginForm
