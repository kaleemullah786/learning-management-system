import React from 'react'
import { FaUserCircle } from 'react-icons/fa';
import One from "../../src/img/logo.png";
import { AiOutlineBell } from 'react-icons/ai';
import Two from "../../src/img/LMS-Assets/amazon.jpg";
import { BsArrowRight } from 'react-icons/bs';
import { VscStarFull } from 'react-icons/vsc';
import Three from "../../src/img/LMS-Assets/python.jpg";

var Myclassroom=()=> {
    return (
        <div>
           
                {/* Card..1 */}
                <div class="flex">
                    <img class="p-10 h-[20%] w-[20%]" src={One} alt="this is logo" />
                    <button class=" underline underline-offset-1 p-3 hover:bg-gray-50 absolute left-[75%] top-[9%] font-semibold" >Myclassroom</button>
                    <AiOutlineBell size={50} color={'gray'} class="absolute left-[85%] top-[8%]" />
                    < FaUserCircle size={50} color={'gray'} class="absolute left-[92%] top-[8%]" />
                </div>

                <div class="grid grid-cols-3 rounded overflow-hidden shadow-lg w-[80%] h-[25%] absolute left-[10%]">
                    <div>
                        <img class="w-full" src={Two} alt="amazon" />
                    </div>
                    <div class="pl-10">
                        <div class="font-bold text-xl mb-2 text-left">AWS</div>
                        <p class="text-left">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                            labore et dolore magna aliquyam erat.</p>
                        <div class="flex pt-10">
                            <VscStarFull class="text-[#4285F2]"/>
                            <VscStarFull class="text-[#4285F2]"/>
                            <VscStarFull class="text-[#4285F2]"/>
                            <VscStarFull class="text-[#4285F2]"/>
                            <VscStarFull />
                        </div>
                    </div>
                    <div class="pt-20">
                        <button class="bg-[#4285F2] w-[35%] h-[30%] text-white">
                            Continue<BsArrowRight size={30} class="text-white absolute bottom-[40%] right-[11%]" />
                        </button>
                    </div>

                </div>
                {/* Card...2 */}
    
                <div class="mt-[15%]">
               

                <div class="grid grid-cols-3 rounded overflow-hidden shadow-lg w-[80%] h-[25%] absolute left-[10%]">
                    <div>
                        <img class="w-full" src={Three} alt="python" />
                    </div>
                    <div class="pl-10">
                        <div class="font-bold text-xl mb-2 text-left">Python</div>
                        <p class="text-left">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam 
                            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.</p>
                            <div class="flex pt-10">
                            <VscStarFull class="text-[#4285F2]"/>
                            <VscStarFull class="text-[#4285F2]"/>
                            <VscStarFull class="text-[#4285F2]"/>
                            <VscStarFull />
                            <VscStarFull />
                        </div>
                    </div>
                    <div class="pt-20">
                        <button class="bg-[#4285F2] w-[35%] h-[30%] text-white">
                            Continue<BsArrowRight size={30} class="text-white absolute bottom-[40%] right-[11%]" />
                        </button>
                    </div>

                </div>
                <div class="flex absolute top-[90%] left-[40%] gap-8 text-black font-semibold">
                    <p>© Digital Lync 2020</p>
                    <p>Privacy Policy</p>
                </div>
                </div>
        </div>
    )
}

export default Myclassroom