import React from 'react'
import './Feedback.css';
import One from "../../src/img/logo.png";
import Two from "../../src/img/LMS-Assets/video.png";
import { AiOutlineBell } from 'react-icons/ai';
import { FaUserCircle } from 'react-icons/fa';
import { BsClock } from 'react-icons/bs';
import { VscStarFull } from 'react-icons/vsc';

var Feedback=()=> {
  return (
    <div>

            <div class="flex">
                <img class="p-10 h-[20%] w-[20%]" src={One} alt="this is logo" />
                <button class=" underline underline-offset-1 p-3 hover:bg-gray-50 absolute left-[75%] top-[9%] font-semibold" >Myclassroom</button>
                <AiOutlineBell size={50} color={'gray'} class="absolute left-[85%] top-[8%]" />
                < FaUserCircle size={50} color={'gray'} class="absolute left-[92%] top-[8%]" />
            </div>
            <div class="bg-[#EBF3FE] h-16 w-[100%] flex justify-center pt-2 ">
                <BsClock size={32} class="text-[#656565] absolute right-[90%]"/>
               <p class="text-2xl text-[#656565] absolute right-[56%]">Your Upcoming Class at 28-04-20 IST 5:30pm</p>
               <button class="bg-blue-500 hover:bg-blue-700 text-white  py-1 px-16 mb-3 ml-[40%]">
                   Join Class</button>
             </div>
        
             <div class="grid grid-cols-2 gap-2 pt-10">
           <div class="scro">
           <p class="text-[100%] text-[#000000] text-left pl-10 pt-12 pb-8">Recorded Classes</p>
           <div class="text-left text-1xl pl-20" >
               <p class="text-[120%] text-[#000000]">Module 1: UI Design</p>
               <p class="text-[#919191]">1. Lorem ipsum dolor sit amet, consetetur</p>
               <p class="text-[#919191]">1. Lorem ipsum dolor sit amet, consetetur</p>
               <p class="text-[#919191]">1. Lorem ipsum dolor sit amet, consetetur</p>
               <p class="text-[#919191]">1. Lorem ipsum dolor sit amet, consetetur</p>
               <p class="text-[120%] text-[#000000]">Module 2: UX Design</p>
               <p class="text-[#919191]">1. Lorem ipsum dolor sit amet, consetetur</p>
               <p class="text-[#919191]">1. Lorem ipsum dolor sit amet, consetetur</p>
               <p class="text-[#919191]">1. Lorem ipsum dolor sit amet, consetetur</p>
               <p class="text-[#919191]">1. Lorem ipsum dolor sit amet, consetetur</p>
               <p class="text-[120%] text-[#000000]">Module 2: UX Design</p>
               <p class="text-[120%] text-[#000000]">Module 2: UX Design</p>
               <p class="text-[120%] text-[#000000]">Module 2: UX Design</p>
               <p class="text-[120%] text-[#000000]">Module 2: UX Design</p>
               <p class="text-[#919191]">1. Lorem ipsum dolor sit amet, consetetur</p>
               <p class="text-[#919191]">1. Lorem ipsum dolor sit amet, consetetur</p>
               <p class="text-[#919191]">1. Lorem ipsum dolor sit amet, consetetur</p>
               <p class="text-[#919191]">1. Lorem ipsum dolor sit amet, consetetur</p>
               <p class="text-[120%] text-[#000000]">Module 2: UX Design</p>
               <p>1. Lorem ipsum dolor sit amet, consetetur</p>
               <p>1. Lorem ipsum dolor sit amet, consetetur</p>
               <p>1. Lorem ipsum dolor sit amet, consetetur</p>
               <p>1. Lorem ipsum dolor sit amet, consetetur</p>
           </div>
            </div>

            <div class=" h-[80%] w-[100%] absolute left-[35%]">
                <img src={Two} alt="this is logo" />
            </div>
           </div>
       
            {/* <!-- Primary Navbar items --> */}
        <nav class="bg-white border-b-2">
		<div class="max-w-6xl mx-auto px-4">
			<div class="flex justify-between">
				<div class="flex space-x-7">
					<div class="hidden md:flex items-center space-x-1">
						<a
							href=""
							class="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
							>Course Info</a>
						<a
							href=""
							class="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
							>Resources</a>
						<a
							href=""
							class="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
							>Assisments</a>
						<a
							href=""
							class="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
							>Projects</a>
                        <a
							href=""
							class="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
							>Discuss</a>
                        <a
							href=""
							class="py-4 text-gray-500 border-b-4 border-blue-500 font-semibold "
							>Feedback</a>
					</div>
				</div>
			</div>
		</div>
	</nav>
    <div>
        <p class="text-[#8B8B8B] pr-[87%] pt-20">Rate:</p>
        <div class="flex pl-20 ">
                <VscStarFull size={32} class="text-[#CACACA]"/>
                <VscStarFull size={32} class="text-[#CACACA]"/>
                <VscStarFull size={32} class="text-[#CACACA]"/>
                <VscStarFull size={32} class="text-[#CACACA]"/>
                <VscStarFull size={32} class="text-[#CACACA]"/>
        </div>
    </div>
    <div class="absolute left-[5%] top-[120%]">
    < FaUserCircle size={40}  class="text-[#CACACA]" />
    </div>
    <div class="pl-36 pt-10">
    <div class="flex gap-[30%] ">
        <p class="text-[#CACACA]">Write Review</p>
        <div><button class=" text-[#097BDF] font-semibold ">Submit</button></div>
    </div>
    <hr class="w-[40%] "/>
    </div>
    <div>
    <button class="bg-[#E6BF02] hover:bg-blue-700 text-white  py-2 px-10 rounded-full absolute left-[70%] top-[130%]">Have a doubt? Rise a query</button>
    </div>
   
    </div>
  )
}

export default Feedback