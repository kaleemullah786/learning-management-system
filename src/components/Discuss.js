import React from 'react'
import './Disscus.css';
import One from "../../src/img/logo.png";
import { AiOutlineBell } from 'react-icons/ai';
import { FaUserCircle } from 'react-icons/fa';
import {AiFillCheckCircle} from 'react-icons/ai';
import {AiFillPlayCircle} from 'react-icons/ai';
import { BsClock } from 'react-icons/bs';
import Two from "../../src/img/LMS-Assets/video.png";
import { BsFillReplyFill } from 'react-icons/bs';


var Discuss=()=> {
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
                <p class="text-2xl text-[#656565] absolute right-[50%]">Your Upcoming Class at 28-04-20 IST 5:30pm</p>
                <button class="bg-blue-500 hover:bg-blue-700 text-white  py-1 px-16 mb-3 ml-[55%]">
                    Join Class</button>
            </div>

            <div class="grid grid-cols-2 gap-2 pt-10">
           <div class="scro">
           <p class="text-[100%] text-[#000000] text-left pl-10 pt-12 pb-8">Recorded Classes</p>
           <div class="text-left text-1xl pl-20" >
               <p class="text-[120%] text-[#000000]">Module 1: UI Design</p>
               <AiFillCheckCircle class="ml-6 relative top-5 right-10" color="green"/><p class="text-[#919191]">1. Lorem ipsum dolor sit amet, consetetur</p>
               <AiFillCheckCircle class="ml-6 relative top-5 right-10" color="green"/><p class="text-[#919191]">1. Lorem ipsum dolor sit amet, consetetur</p>
               <AiFillPlayCircle class="ml-6 relative top-5 right-10"  color="gray"/><p class="text-[#919191]">1. Lorem ipsum dolor sit amet, consetetur</p>
               <AiFillPlayCircle class="ml-6 relative top-5 right-10"  color="gray"/><p class="text-[#919191]">1. Lorem ipsum dolor sit amet, consetetur</p>
               <p class="text-[120%] text-[#000000]">Module 2: UX Design</p>
               <AiFillPlayCircle class="ml-6 relative top-5 right-10"  color="gray"/><p class="text-[#919191]">1. Lorem ipsum dolor sit amet, consetetur</p>
               <AiFillPlayCircle class="ml-6 relative top-5 right-10"  color="gray"/><p class="text-[#919191]">1. Lorem ipsum dolor sit amet, consetetur</p>
               <AiFillPlayCircle class="ml-6 relative top-5 right-10"  color="gray"/><p class="text-[#919191]">1. Lorem ipsum dolor sit amet, consetetur</p>
               <AiFillPlayCircle class="ml-6 relative top-5 right-10"  color="gray"/><p class="text-[#919191]">1. Lorem ipsum dolor sit amet, consetetur</p>
               <p class="text-[120%] text-[#000000]">Module 2: UX Design</p>
               <p class="text-[120%] text-[#000000]">Module 2: UX Design</p>
               <p class="text-[120%] text-[#000000]">Module 2: UX Design</p>
               <p class="text-[120%] text-[#000000]">Module 2: UX Design</p>
               <AiFillPlayCircle class="ml-6 relative top-5 right-10"  color="gray"/><p class="text-[#919191]">1. Lorem ipsum dolor sit amet, consetetur</p>
               <AiFillPlayCircle class="ml-6 relative top-5 right-10"  color="gray"/><p class="text-[#919191]">1. Lorem ipsum dolor sit amet, consetetur</p>
               <AiFillPlayCircle class="ml-6 relative top-5 right-10"  color="gray"/><p class="text-[#919191]">1. Lorem ipsum dolor sit amet, consetetur</p>
               <AiFillPlayCircle class="ml-6 relative top-5 right-10"  color="gray"/><p class="text-[#919191]">1. Lorem ipsum dolor sit amet, consetetur</p>
               <p class="text-[120%] text-[#000000]">Module 2: UX Design</p>
               <p>1. Lorem ipsum dolor sit amet, consetetur</p>
               <p>1. Lorem ipsum dolor sit amet, consetetur</p>
               <p>1. Lorem ipsum dolor sit amet, consetetur</p>
               <p>1. Lorem ipsum dolor sit amet, consetetur</p>
           </div>
            </div>

            <div class=" h-[80%] w-[100%] ml-[-200px]">
                <img src={Two} alt="this is logo" />
            </div>
           </div>



           
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
                                    class="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
                                >Assisments</a>
                                <a
                                    href=""
                                    class="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
                                >Projects</a>
                                <a
                                    href=""
                                    class="py-4 text-gray-500 border-b-4 border-blue-500 font-semibold"
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
            <div class="absolute top-[137%] left-[7%]">< FaUserCircle size={40} color={'gray'} /></div>
            <div class="absolute top-[148%] left-[7%]">< FaUserCircle size={40} color={'gray'} /></div>
            <div class="absolute top-[181%] left-[7%]">< FaUserCircle size={40} color={'gray'} /></div>
            <div class="text-left pl-40">
            
                <p class="pb-4 text-[#4C4C4C] pt-20">Start Discussion</p>
                <hr class="w-[50%]"/>
                <p class="pt-5">How To Upload file in AWS</p>
                <p class="pb-5 pt-3">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor <br/>invidunt ut labore et dolore magna aliquyam erat, 
                    sed diam voluptua. At vero eos </p>
                <hr class="w-[50%]"/>
                <div class="flex pt-3">
                    <BsFillReplyFill size={30} class="text-[#737373]"/>
                    <p>Reply</p>
                    <button class=" text-[#717171] font-semibold underline underline-offset-1 pl-[40%]">30 Reply</button>
                </div>
                <p class="pt-10">How To Upload file in AWS</p>
                <p class="pb-5 pt-3">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor <br/>invidunt ut labore et dolore magna aliquyam erat, 
                    sed diam voluptua. At vero eos </p>
                <hr class="w-[50%]"/>
                <div class="flex pt-3">
                    <BsFillReplyFill size={30} class="text-[#737373]"/>
                    <p>Reply</p>
                    <button class=" text-[#717171] font-semibold underline underline-offset-1 pl-[40%]">30 Reply</button>
                </div>
            </div>
            <div class="pt-8">
            <button class="text-white text-xs w-52 p-4 rounded-tr-3xl bg-yellow-500 ml-32 rounded-l-3xl relative bottom-10 " style={{marginLeft:804}}>Have a doubt?Rise a query</button>
            </div>
        
        </div>
    )
}

export default Discuss