import React from 'react'
import One from "../../src/img/bgscreen.png";
import Two from "../../src/img/logo.png";


var Cybersecurity=()=> {
  return (
    <div>
         <div class=" bg-sky-50 bg-fixed">
            <img  alt='waiting for image' src={One} />
         </div>
         <div class="flex absolute top-[1%] left-[40%] mt-12">
            <img alt='waiting for image' src={Two} class="h-20 w-68" />
         </div>
       
         <div class="bg-white rounded overflow-hidden shadow-lg w-[40%] h-[60%] absolute left-[30%] bottom-[10%]">
                   
                    <p class="text-[#515151] font-semibold text-xl mt-32">CHECK YOUR MAIL</p>
                    <p class="text-[#515151] font-semibold text-[100%] mt-8">An email with password reset instructions has been sent to<br/> your email address</p>

                </div>
              
        
    </div>
  )
}

export default Cybersecurity