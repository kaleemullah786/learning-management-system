import React, { useRef } from 'react';
import { useForm } from "react-hook-form";
import One from "../../src/img/background.png";
import Two from "../../src/img/logo.png";
import Three from "../../src/img/ggl.png";
import Four from "../../src/img/in.png";
import { Link } from 'react-router-dom';
import axios from 'axios';
var Signup = () => {
  const { register, handleSubmit, formState: { errors }, watch } = useForm();
  const password = useRef({});
  password.current = watch("password", "");

  const onSubmit = (data) => {
    console.log(data);
    axios.post(`https://fetch-api-mock-default-rtdb.firebaseio.com/register.json`,data)
    .then(()=>alert('successfully done!'))

  }
  const linkedIn=(data)=>{
    // console.log(data);
    window.location.href='https://in.linkedin.com/'
  }
  const chrome=(data)=>{
    // console.log(data);
    window.location.href='https://www.google.co.in/'
  }

  return (
    <div >

      <div class="h-[80%] w-[80%] absolute left-[22%] bottom-[24%] ">
        <img alt='waiting for image' src={One} />

      </div>

      <div class="flex absolute top-20 left-[45%] mt-12">
        <img alt='waiting for image' src={Two} class="h-20 w-60" />
      </div> 
      <form onSubmit={handleSubmit(onSubmit)} class="flex absolute top-52 left-[40%] ">
        <div class=" shadow-2xl shadow-gray-700 space-x-10 w-[96] h-[40%] mb-8 mt-9" >
          <div class="grid grid-cols-2 ">
            <button class="text-2xl font-semibold" >SIGN UP</button>
            <button class=" text-2xl font-semibold bg-gray-300 p-5"> <Link to={'/Signin'}> SIGN IN</Link> </button>

          </div>

          <input type="text" class="border outline-0 border-t-0 border-l-0 border-r-0 text-sm ml-8 mt-4 border-gray-300" placeholder="FIRST NAME"
            {...register('firstname', { required: true })}></input>


          <input type="text" class="border outline-0 border-t-0 border-l-0 border-r-0 ml-12 text-sm mt-4 border-gray-300" placeholder='LAST NAME'
            {...register('lastname', { required: true })}></input><br></br>
          <span class="text-sm text-red-500 ml-8">{errors.firstname && "firstname Required"}</span>
          <span class="text-sm text-red-500 ml-20">{errors.lastname && "lastname Required"}</span><br></br>

          <div class="p-3">
            <input class="border-b-2 w-96 " type="text" placeholder='EMAIL'
              {...register('email', { required: true, pattern: /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,3})$/ })}/><br/>
            <span class="text-sm text-red-500 ml-8">{errors.email && "Invalid EmailId"}</span><br></br>
          </div>
  
          <input class="border-b-2 w-96 " type="text" placeholder='MOBILE' {...register('number', { required: true, pattern: /^[0-9]{10}$/ })} /><br />
          <span class="text-sm text-red-500 ml-8">{errors.number && "Invalid Number"}</span><br></br>

          <input type="password" class="border outline-0 border-t-0 border-l-0 border-r-0 text-sm ml-8 mt-4 border-gray-300" placeholder="PASSWORD"
            {...register('password', { required: true, pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*\.]).{8,}$/ })} />

          <input type="password" class="border outline-0 border-t-0 border-l-0 border-r-0 ml-12 text-sm mt-4 border-gray-300" placeholder='CONFIRM PASSWORD'
            {...register('cpassword', { required: true, validate: value => value === password.current })} /><br></br>
          <span class="text-sm text-red-500 ml-8">{errors.password && "Invalid Password"}</span>
          <span class="text-sm text-red-500 ml-20">{errors.cpassword && "password does not match"}</span><br></br>
          <div class="p-6">
            <input type='submit' class="bg-blue-500 hover:bg-blue-700 text-white  py-2 px-10 rounded-full text-center" value={'Sing Up'}/>
            <p class="text-gray-400 p-3">OR</p>
          </div>
          <div class="flex justify-center space-x-6 mb-7">
            <img alt='waiting for image' src={Four} class="h-12 w-12" onClick={linkedIn}/>
            <img alt='waiting for image' src={Three} class="h-12 w-12" onClick={chrome}/>
          </div>



        </div>

      </form>


    </div>
  );
};

export default Signup;