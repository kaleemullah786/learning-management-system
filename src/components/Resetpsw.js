import React from 'react'
import One from "../../src/img/LMS-Assets/screen8.png";
import Two from "../../src/img/logo.png";


var Resetpsw=()=> {
  return (
    <div>
        <div class=" bg-sky-50 w-[90%]">
        <div class=" w-[100%] ">
               <img  alt='waiting for image' src={One} />
        </div>
        </div>
         
     
      <div class="flex absolute top-20 left-[45%] mt-12">
        <img alt='waiting for image' src={Two} class="h-20 w-60" />
      </div>
      <form class="flex absolute top-60 left-[30%] bg-white w-[40%] h-[70%] justify-center shadow-1xl">
        <div class="space-x-10 w-[80] h-[40%] mb-8 mt-9" >
        <div>
          <p class="font-semibold text-2xl text-gray-500">RESET YOUR PASSWORD</p>
          <p class="text-1xl pt-5">Please provide the email address you used when you signed up <br/>for your OSAcad account.</p>
      </div>
      
          
        <div class="p-5 pt-24">
            <input class="border-b-2 w-[120%] " type="text" placeholder='EMAIL ADDRESS' />
          </div>
          
          
          
          <div class="p-6 pt-20">
          
            <button class=" w-52 bg-blue-500 hover:bg-blue-700 text-white  py-2 px-10 rounded-full">SEND EMAIL</button>
           
          </div>
          
         



        </div>

      </form>

    </div>
  )
}

export default Resetpsw