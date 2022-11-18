import React from 'react'
import One from "../../src/img/logo.png";
import { AiOutlineBell } from 'react-icons/ai';
import { FaUserCircle } from 'react-icons/fa';
import { BsClock } from 'react-icons/bs';
import { BsArrowLeft } from 'react-icons/bs';
import { BsFillCheckCircleFill } from 'react-icons/bs';

var Assisment1=() =>{
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
        
        <div class="flex p-6 text-[#656565]">
               <BsArrowLeft size={36} class="ml-[5%]"/>
               <p class="text-xl text-[#404040] ml-5">Assisments</p>
        </div>
        <hr/>
        <div class="absolute right-[94%] top-[45%]"><p class="text-[#C2C2C2] ">Results :</p></div>
        <div class="text-left p-20">
            
            <p class="text-[#424242] font-semibold p-2">Question 1: <br/>A front-end developer works with languages and framework</p>
            <p class="flex p-2"><BsFillCheckCircleFill size={28} class="text-[#1EC818]"/>HTML,CSS and Javascript</p>
            <hr class="w-[80%] justify-center p-2 h-[40%]"/>
            <p class="text-[#424242] font-semibold p-2">Question 2: <br/>A front-end developer works with languages and framework</p>
            <p class="flex p-2"><BsFillCheckCircleFill size={28} class="text-[#1EC818]"/>HTML,CSS and Javascript</p>
            <p class="flex p-2"><BsFillCheckCircleFill size={28} class="text-[#1EC818]"/>HTML,CSS and Bootstrap</p>
        </div>
        <div>
        <button class="bg-blue-500 hover:bg-[#31A4F5] text-white font-semibold py-1 px-9 mb-3 ml-[40%]">Continue to next module</button>
        </div>
        
            {/* <!-- Primary Navbar items --> */}
        <nav class="bg-white border-b-2">
		<div class="max-w-6xl mx-auto px-4">
			<div class="flex justify-between">
				<div class="flex space-x-7">
					<div class="hidden md:flex items-center space-x-1">
						<a
							href=""
							class="py-4 text-gray-500 border-b-4 border-blue-500 font-semibold "
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
							class="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
							>Feedback</a>
					</div>
				</div>
			</div>
		</div>
	</nav>
    <div class="text-left pl-[10%]">
        <p class="text-[#4E4E4E] font-bold pt-12 p-8 pl-1">About This Course</p>
        <p>Course Name: UI/UX</p>
        <hr class="w-[20%] p-2 "/>
        <p>Start Course: 28-04-2020</p>
        <hr class="w-[20%] p-2"/>
        <p>Duration: 20hr</p>
        <hr class="w-[20%] p-2"/>
        <p>Modules: 10</p>
        <hr class="w-[20%] p-2"/>
        <p>Prerequisities: No</p>
        <hr class="w-[20%] p-2"/>
        <p>Skill Level: Beginner</p>
    </div>
    </div>
  )
}

export default Assisment1