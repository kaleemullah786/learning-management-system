import React from 'react'
import { AiOutlineBell } from 'react-icons/ai';
import { FaUserCircle } from 'react-icons/fa';
import One from "../../src/img/logo.png";
import Two from "../../src/img/LMS-Assets/sceen19.png";

var Changepsw=()=> {
    return (
        <div>
            <div class="flex">
                <img class="p-10 h-[20%] w-[20%]" src={One} alt="this is logo" />
                <button class=" underline underline-offset-1 p-3 hover:bg-gray-50 absolute left-[75%] top-[9%] font-semibold" >Myclassroom</button>
                <AiOutlineBell size={50} color={'gray'} class="absolute left-[85%] top-[8%]" />
                < FaUserCircle size={50} color={'gray'} class="absolute left-[92%] top-[8%]" />
            </div>
            <div>
                <ul class="text-left ml-16 border-5">
                    <li><a href="#" class="block p-4 text-[#444444] font-semibold">Edit Profile</a></li>
                    <li><a href="#" class="block p-4 text-[#444444] font-semibold">Change Password</a></li>
                    <li><a href="#" class="block p-4 text-[#444444] font-semibold">Invoices</a></li>
                    <li><a href="#" class="block p-4 text-[#444444] font-semibold">Certificate</a></li>
                </ul>
            </div>
            <form class="bg-white rounded overflow-hidden shadow-lg w-[60%] h-[50%] absolute left-[25%] bottom-[30%]">
               
                <div class="p-8">
                    <div class="p-4 mt-8"><input class="border-b-2 w-[90%] " type="text" placeholder='Old Password' /></div>
                    <div class="p-4"><input class="border-b-2 w-[90%] " type="text" placeholder='New Password' /></div>
                    <div class="p-4"><input class="border-b-2 w-[90%] " type="text" placeholder='Confirm Password' /></div>
                   
                </div>
                
                     <div class="p-4 absolute left-12">
                     <button class="bg-blue-500 hover:bg-blue-700 text-white  py-2 px-6">Change Password</button>
                     </div>
                    
            </form>
                     <div>
                     <img class="p-10 h-[20%] w-[20%]" src={Two} alt="this is logo" />   
                     </div>

        </div>

    )
}

export default Changepsw