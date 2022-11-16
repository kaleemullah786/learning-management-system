import React from 'react'
import './Assisment4.css';
import One from "../../src/img/logo.png";
import { AiOutlineBell } from 'react-icons/ai';
import { FaUserCircle } from 'react-icons/fa';
import { BsClock } from 'react-icons/bs';
import Two from "../../src/img/LMS-Assets/video.png";
import { IoMdDownload } from 'react-icons/io';

var Assisment4=()=> {
    return (
        <div clsss="w-[40%]">

            <div>
                <img class="p-10 h-[20%] w-[20%]" src={One} alt="this is logo" />
                <button class=" underline underline-offset-1 p-3 hover:bg-gray-50 absolute left-[75%] top-[9%] font-semibold" >Myclassroom</button>
                <AiOutlineBell size={50} color={'gray'} class="absolute left-[85%] top-[8%]" />
                < FaUserCircle size={50} color={'gray'} class="absolute left-[92%] top-[8%]" />
            </div>
            <div class="bg-[#EBF3FE]  flex justify-center pt-2 ">                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   ``
                <BsClock size={32} class="text-[#656565] absolute right-[90%]" />
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
            <nav class="bg-white border-b-2 ">
                <div class="max-w-6xl mx-auto pr-8">
                    <div class="flex justify-between">
                        <div class="flex space-x-7">
                            <div class="hidden md:flex items-center space-x-8">
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
                                    class="py-4 text-gray-500 border-b-4 border-blue-500 font-semibold"
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
            <div class="pl-20">
                <h1 class="text-2xl font-semibold text-left pt-20">Programming Assignment: Linear Regression</h1>
                <p class="text-left pt-8 text-[#555555]">Dead Line : Pass this assignment by May 5, 12:00pm IST</p>
                <div class="flex text-[#555555] pt-7">
                        <div  class=" text-gray-500 border-b-4 border-blue-500 font-semibold">
                            <p>Instructions</p>
                        </div>
                        <div class="pl-[2%]">
                            <p>View Solutions</p>
                        </div>
                       
                </div>

                    <hr class="w-[55%]"/>
                    <div class="flex grid grid-cols-3 gap-8 text-left pt-7">
                        <div class="text-[#555555]">
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                                 tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
                                <br/><br/> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut</p>
                             
                        </div>
                        <div class="text-[#555555]"> 
                            <p>How to submit</p>
                            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt.</p>
                            <div class="pt-5"><button class="bg-[#4285F2] hover:bg-blue-700 text-white  py-2 px-10 ">Submit assigments</button></div>
                        </div>
                        <div></div>
                    </div>
            </div>
            <div>
                <button class="bg-[#E6BF02] hover:bg-blue-700 text-white  py-2 px-10 rounded-full absolute left-[70%] top-[170%]">Have a doubt? Rise a query</button>
            </div>
        </div>
    )
}

export default Assisment4