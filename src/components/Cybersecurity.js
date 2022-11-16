import React from 'react'
import One from "../../src/img/bgscreen.png";
import Two from "../../src/img/logo.png";
import Three from "../../src/img/LMS-Assets/screentwelve-one.png";
import Four from "../../src/img/LMS-Assets/amazon.jpg";
import { BsArrowRight } from 'react-icons/bs';
import { BsFillCheckCircleFill } from 'react-icons/bs';

var Cybersecurity=()=> {
  return (
    <div>
         <div class=" bg-sky-50 bg-fixed">
            <img  alt='waiting for image' src={One} />
         </div>
         <div class="flex absolute top-[1%] left-[40%] mt-12">
            <img alt='waiting for image' src={Two} class="h-20 w-68" />
         </div>
         <div class="absolute bottom-[60%] left-[42%] ">
         <img alt='waiting for image' src={Three} class="h-[20%] w-[30%]" /> 
         <BsFillCheckCircleFill size={40} class="absolute left-[38%] bottom-[40%] text-[#29B300]"/>
         </div>
         <div>
             <p class="text-4xl text-[#3C3C3C] font-semibold absolute left-[30%] bottom-[48%]">Welcome to the world of cyber security</p>
         </div>
         <div>
         <div class="grid grid-cols-3 rounded overflow-hidden shadow-lg w-[70%] h-[20%] absolute left-[10%] bottom-[20%]">
                    <div>
                        <img class="w-full" src={Four} alt="amazon" />
                    </div>
                    <div class="pl-10">
                        <div class="font-bold text-2xl mb-2 text-left absolute top-[36%] left-[36%] text-[#5C5C5C]">AWS</div>
                    </div>
                    <div class="pt-20">
                        <button class="bg-[#4285F2] w-[15%] h-[20%] text-white absolute bottom-[40%] rounded-[5%]">
                            <p class="text-[80%]" >Start Cource</p><BsArrowRight size={30} class="text-white absolute bottom-[9%] right-[10%]"/>
                        </button>
                    </div>
                    

                </div>
                <div class=" absolute bottom-[9%] border-stone-700 left-[40%]">
                    <button class="bg-[#FFFFFF]  p-3">
                    My Class Room
                        </button>
                    </div>
         </div>
    </div>
  )
}

export default Cybersecurity