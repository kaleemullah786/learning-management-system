import React from 'react'
import One from "../../src/img/bgscreen.png";
import Two from "../../src/img/logo.png";


var Resetpsw1=()=> {
  return (
    <div>
         <div class=" bg-sky-50 bg-fixed">
            <img  alt='waiting for image' src={One} />
         </div>
         <div class="flex absolute top-[1%] left-[40%] mt-12">
            <img alt='waiting for image' src={Two} class="h-20 w-68" />
         </div>
       
         <div class="bg-white rounded overflow-hidden shadow-lg w-[40%] h-[60%] absolute left-[30%] bottom-[10%]">
                   
                    <p class="text-[#515151] font-semibold text-xl mt-20">RESET YOUR PASSWORD</p>
                <div class="p-8">
                    
                    <div class="p-4 "><input class="border-b-2 w-[90%] " type="text" placeholder='New Password' /></div>
                 
                    <div class="p-4"><input class="border-b-2 w-[90%] " type="text" placeholder='Confirm Password' /></div>
                   
                </div>
                <div>
                  <button class="bg-blue-500 hover:bg-blue-700 text-white w-[40%] py-2 px-10 rounded-[10px] ">Submit</button>
                </div>


                </div>
               
        
    </div>
  )
}

export default Resetpsw1