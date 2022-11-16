import React from 'react';
import {useForm} from "react-hook-form";

import One from "../../src/img/background.png";
import Two from "../../src/img/logo.png";
import Three from "../../src/img/ggl.png";
import Four from "../../src/img/in.png";
import { Link } from 'react-router-dom';
var Signin=() =>{
  const {register,handleSubmit,formState:{errors}}=useForm();
    const onSubmit=(data)=>{
        console.log(data);
         window.location.href='/'
    }
    const linkedin=(data)=>{
      console.log(data);
      window.location.href='https://in.linkedin.com/'
    }
    const chrome=(data)=>{
      console.log(data);
      window.location.href='https://www.google.co.in/'
    }
  

    
  return (
    <div class="w-screen" style={{backgroundColor:"#EBF3FE"}}>
      
      <div class="h-[50%] w-[50%] absolute left-[22%] bottom-[28%] ">
        <img  alt='waiting for image' src={One} />
      
      </div>
      
      <div class="flex absolute top-20 left-[45%] mt-12">
        <img alt='waiting for image' src={Two} class="h-20 w-60" />
      </div>
      <form onSubmit={handleSubmit(onSubmit)} class="flex absolute top-52 left-[40%] ">
        <div class=" shadow-2xl shadow-gray-700 space-x-10 w-[80] h-[40%] mb-8 mt-9" >
          <div class="grid grid-cols-2 ">
          <button class="  text-2xl font-semibold bg-gray-300 p-5 " onClick={onSubmit}> SIGN UP</button>
          <button class=" text-2xl font-semibold ">SIGN IN</button>
          </div>
          
         
          <div class="p-5 pt-20">
            <input class="border-b-2 w-96 " type="text" placeholder='EMAIL' 
            {...register('email',{required:true,pattern:/^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,3})$/})}/><br/>
            <span class="text-sm text-red-500 ml-8">{errors.email&&"Invalid EmailId"}</span><br></br>
          </div>
          <div class="p-5 pt-8">
            <input class="border-b-2 w-96 " type="text" placeholder='PASSWORD' 
            {...register('password',{required:true,pattern:/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*\.]).{8,}$/})}/><br/>
            <span class="text-sm text-red-500 ml-8">{errors.password&&"Invalid Password"}</span>
          </div>
          <div>
          <button class=" underline underline-offset-1 p-3 hover:bg-gray-50 " >Forgot Password?</button>
          </div>
          
          <div class="p-6">
          
            <button class="bg-blue-500 hover:bg-blue-700 text-white  py-2 px-10 rounded-full">Sing In</button>
            <p>OR</p>
          </div>
          
          <div class="flex justify-center space-x-6 mb-7">
          <img alt='waiting for image' src={Four} class="h-12 w-12" onClick={linkedin} />
            <img alt='waiting for image' src={Three} class="h-12 w-12" onClick={chrome} />
          </div>



        </div>

      </form>


    </div>
  );
};

export default Signin;