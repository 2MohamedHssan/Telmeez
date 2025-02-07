"use client";

import { z } from 'zod'; 
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const schema = z.object({
  name:z.string().min(1,"name is required"),
  userName:z.string().min(1,"user name is required"),
  email:z.string().email(),
  age: z.number({ required_error: 'Age is required', invalid_type_error: 'Age must be a number',})
  .min(18, 'You must be at least 18 years old')
  .max(120, 'Age must be less than or equal to 120'),
  password:z.string().min(8,"Password must be at least 8 characters long"),
  gender:z.string(),
  Role:z.string()
})

// enums

type FormField = z.infer<typeof schema>

const Register = () => {
  const router = useRouter()
  const { 
    register,
    reset,
    handleSubmit,
    formState:{errors, isSubmitting},
  } = useForm<FormField>({
    resolver:zodResolver(schema)
})
  
const onSubmitre: SubmitHandler<FormField> = async (data)=>{
  await new Promise((res)=> setTimeout(res, 1000))
  console.log("form data:",data.name);
  router.push(`/?name=${data.name}`);
  reset();
}  


  return (
    <div className="flex items-center p-4 justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit(onSubmitre)} className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center mb-6 text-gray-700"> Register </h1>
        <div className='text-gray-700 flex justify-center  gap-10'>
        <label className=' cursor-pointer'>
          <input type="radio" className='cursor-pointer ml-3'
            value="student" {...register('Role', { required: true })}
          /> Student </label>
        <label className=' cursor-pointer'>
          <input type="radio" className=' cursor-pointer'
            value="teacher" {...register('Role', { required: true })} /> Teacher </label>
      </div>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-600 mb-2"
          >
            Full Name
          </label>
          <input
            type="text" id="name" autoComplete='true' {...register("name")}
            className="w-full px-4 py-2 border text-black border-gray-300 rounded-md focus:outline-none"
          />
        {errors.name && (<div className='text-red-500 pt-2'>{errors.name.message}</div>)}
        </div>
        <div className="mb-6">
          <label
            htmlFor="userName"
            className="block text-sm font-medium text-gray-600 mb-2"
          >
            User Name
          </label>
          <input
            type="text"
            id="userName"
            autoComplete='true'
              {...register("userName")}
            className="w-full px-4 py-2 text-black border border-gray-300 rounded-md focus:outline-none"
          />
        {errors.userName && (<div className='text-red-500 pt-2'>{errors.userName.message}</div>)}
        </div>

        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-600 mb-2"> Email </label>
          <input
            type="email" id="email" {...register("email")} autoComplete='true'
            className="text-black w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
          />
        {errors.email && (<div className='text-red-500 pt-2'>{errors.email.message}</div>)}
        </div>

        <div className="mb-4">
          <label
            htmlFor="password" className="block text-sm font-medium text-gray-600 mb-2"> Password </label>
          <input
            type="password" id="password" {...register("password")}
            className="w-full px-4 py-2 border text-black border-gray-300 rounded-md focus:outline-none"
          />
        {errors.password && (<div className='text-red-500 pt-2'>{errors.password.message}</div>)}
        </div>

        <div className="mb-4">
          <label htmlFor="age" className="block text-sm font-medium text-gray-600 mb-2"> Age </label>
          <input type="number" id="age" {...register("age",{valueAsNumber:true})}
            className="w-full px-4 py-2 text-black border border-gray-300 rounded-md focus:outline-none"
          />
          {errors.age && (<div className="text-red-500 pt-2">{errors.age.message}</div>)}
      </div>

        <div className="mb-4">
          <label
            htmlFor="gender" className="block text-sm font-medium text-gray-600 mb-2"> Gender </label>
          <select id="gender" {...register("gender")}
          className="w-full px-4 py-2 border text-gray-700 border-gray-300 rounded-md focus:outline-none">
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          {errors.gender && (<div className='text-red-500 pt-2'>{errors.gender.message}</div>)}
        </div>

        <button
          type="submit"
          disabled={isSubmitting} onClick={handleSubmit(onSubmitre)}
          className="w-full bg-orange-500 text-white font-semibold py-2 rounded-md hover:bg-orange-600 transition-colors"
        > {isSubmitting ? "Looding..." : "Sing Up"} </button>

        <div className="relative mt-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-gray-500">OR</span>
          </div>
        </div>

        <button
          type="button"
          className="w-full flex items-center justify-center text-black border border-orange-500 font-semibold py-2 rounded-md mt-4 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
            className="h-5 w-5 mr-2"
          >
            <path
              fill="#EA4335"
              d="M24 9.5c3.44 0 6.16 1.18 8.16 3.17l6.08-6.09C34.15 3.28 29.54 1.5 24 1.5 14.85 1.5 7.25 7.67 4.4 15.64l7.4 5.74C13.52 13.91 18.32 9.5 24 9.5z"
            />
            <path
              fill="#4285F4"
              d="M46.33 24.55c0-1.66-.14-3.26-.42-4.82H24v9.12h12.7c-.55 2.86-2.2 5.27-4.71 6.89l7.44 5.73C44.56 37.01 46.33 31.21 46.33 24.55z"
            />
            <path
              fill="#FBBC05"
              d="M11.81 28.78c-.43-1.26-.67-2.61-.67-4.03s.24-2.77.67-4.03l-7.4-5.74C2.88 18.1 1.5 21 1.5 24s1.38 5.9 2.91 8.02l7.4-5.74z"
            />
            <path
              fill="#34A853"
              d="M24 46.5c5.54 0 10.14-1.83 13.53-4.96l-7.44-5.73c-2.05 1.36-4.72 2.16-6.09 2.16-5.68 0-10.48-4.41-11.83-10.32l-7.4 5.74C7.25 40.33 14.85 46.5 24 46.5z"
            />
            <path fill="none" d="M0 0h48v48H0z" />
          </svg>
          Continue with Google
        </button>
        <div className=" text-right mt-2">
        <Link href="./login" className="text-gray-500 text-sm py-2 font-medium hover:text-gray-800">Alredy have account </Link>
      </div>
      </form>
    </div>
  );
};

export default Register;
