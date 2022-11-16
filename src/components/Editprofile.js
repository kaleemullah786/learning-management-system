import React from 'react'
import { AiOutlineBell } from 'react-icons/ai';
import { FaUserCircle } from 'react-icons/fa';
import One from "../../src/img/logo.png";
import Two from "../../src/img/LMS-Assets/sceen19.png";

var Editprofile=()=> {
    return (
        <div>
            <div class="flex">
                <img class="p-10 h-[20%] w-[20%]" src={One} alt="this is logo" />
                <button class=" underline underline-offset-1 p-3 hover:bg-gray-50 absolute left-[75%] top-[9%] font-semibold" >Myclassroom</button>
                <AiOutlineBell size={50} color={'gray'} class="absolute left-[85%] top-[8%]" />
                < FaUserCircle size={50} color={'gray'} class="absolute left-[92%] top-[8%]" />
            </div>
            <div class="">
                <ul class="text-left ml-16 ">
                    <li><a href="#" class="block p-4 text-[#444444] font-semibold">Edit Profile</a></li>
                    <li><a href="#" class="block p-4 text-[#444444] font-semibold">Change Password</a></li>
                    <li><a href="#" class="block p-4 text-[#444444] font-semibold">Invoices</a></li>
                    <li><a href="#" class="block p-4 text-[#444444] font-semibold">Certificate</a></li>
                </ul>
            </div>
            <form class="bg-white rounded overflow-hidden shadow-lg w-[40%] h-[70%] absolute left-[30%] bottom-[10%]">
                <div class="flex absolute left-[10%] gap-4 ">
                    < FaUserCircle size={70} color={'#C9C9C9'} />
                    <p class="mt-8 text-[#555555]">Change Photo</p>
                </div>
                <div class="p-8">
                    <div class="p-4 mt-8"><input class="border-b-2 w-[90%] " type="text" placeholder='Full Name' /></div>
                    <div class="p-4"><input class="border-b-2 w-[90%] " type="text" placeholder='User Name' /></div>
                    <div class="p-4"><input class="border-b-2 w-[90%] " type="text" placeholder='E-mail' /></div>
                    <div class="p-4"><input class="border-b-2 w-[90%] " type="text" placeholder='Phone' /></div>
                    <div class="p-4"><input class="border-b-2 w-[90%] " type="text" placeholder='Location' /></div>
                </div>
                <div class="flex pl-16">
                    <p>Gender</p>
                    <div class="flex">
                     <div class="flex items-center mb-2 mr-4">
                         <input type="radio" class="h-4 w-4 text-gray-700 px-3 py-3 border rounded mr-2" />
                         <label for="radio-example-1" class="text-gray-600">Male</label>    
                     </div>
                     <div class="flex items-center mb-2">
                         <input type="radio"  class="h-4 w-4 text-gray-700 px-3 py-3 border rounded mr-2" />
                         <label for="radio-example-2" class="text-gray-600">Female</label>
                     </div>
                     <div class="flex items-center mb-2">
                         <input type="radio"  class="h-4 w-4 text-gray-700 px-3 py-3 border rounded mr-2" />
                         <label for="radio-example-2" class="text-gray-600">Others</label>
                     </div>
                     

                  </div>
                 
                </div>
                     <div class="p-4 absolute left-12">
                     <button class="bg-blue-500 hover:bg-blue-700 text-white  py-2 px-10">Submit</button>
                     </div>
                    
            </form>
                     <div>
                     <img class="p-10 h-[20%] w-[20%]" src={Two} alt="this is logo" />   
                     </div>

        </div>

    )
}

export default Editprofile