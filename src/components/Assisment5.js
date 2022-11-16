import React from 'react'
import './Assisment5.css';
import One from "../../src/img/logo.png";
import { AiOutlineBell } from 'react-icons/ai';
import { FaUserCircle } from 'react-icons/fa';
import { BsClock } from 'react-icons/bs';
import Two from "../../src/img/LMS-Assets/video.png";
import { IoMdDownload } from 'react-icons/io';

var Assisment5=()=> {
    return (
        <div>

            <div class="flex">
                <img class="p-10 h-[20%] w-[20%]" src={One} alt="this is logo" />
                <button class=" underline underline-offset-1 p-3 hover:bg-gray-50 absolute left-[75%] top-[9%] font-semibold" >Myclassroom</button>
                <AiOutlineBell size={50} color={'gray'} class="absolute left-[85%] top-[8%]" />
                < FaUserCircle size={50} color={'gray'} class="absolute left-[92%] top-[8%]" />
            </div>
            <div class="bg-[#EBF3FE] h-16 w-[100%] flex justify-center pt-2 ">
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
            <div>
            <p class="text-[120%] text-left pl-20 pt-10">Module 1</p>
                <div class="pl-20">
                    
                    <h1 class="text-2xl font-bold text-left">Programming Assignment: Linear Regression</h1>
                    <p class="text-left pt-8 text-[#555555]">Dead Line : Pass this assignment by May 5, 12:00pm IST</p>
                    <div class="flex text-[#555555] pt-7 gap-8">
                        <div class=" text-gray-500 font-semibold">
                            <p>Instructions</p>
                        </div>
                        <div class=" border-b-4 border-blue-500 font-semibold">
                            <p>View Solutions</p>
                        </div>

                    </div>

                    <hr class="w-[55%]" />
                   <div class="text-left">
                       <p class="pt-6">Answer</p>
                       <p class="text-[#737373]">
                       Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor<br/> invidunt ut labore et dolore 
                       magna aliquyam erat, sed diam voluptua. At vero eos et accusam <br/>et justo duo dolores et ea rebum. Stet clita kasd gubergren,
                        no sea takimata sanctus est Lorem <br/>ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam <br/>nonumy eirmod tempor invidunt ut labore 
                       et dolore magna aliquyam erat, sed diam voluptua.
                       </p>
                       <div class="flex pt-4">
                 <div class="text-[#4285F2]">
                    <IoMdDownload size={24} />
                  </div>
                  
                  <div class="pl-[1%] pb-10">
                   <p>Download Solutions</p>
                  </div>
                 </div>
                   </div>
                </div>
          </div>
            </div>
            )
}

            export default Assisment5