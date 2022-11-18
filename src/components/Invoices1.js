import React from 'react'
import { AiOutlineBell } from 'react-icons/ai';
import { FaUserCircle } from 'react-icons/fa';
import One from "../../src/img/logo.png";
import Two from "../../src/img/LMS-Assets/sceen19.png";
import Three from "../../src/img/LMS-Assets/amazon.jpg";
import Four from "../../src/img/LMS-Assets/python.jpg";

var Invoices=()=> {
    return (
        <div>
            <div class="flex">
                <img class="p-10 h-[20%] w-[20%]" src={One} alt="this is logo" />
                <button class=" underline underline-offset-1 p-3 hover:bg-gray-50 absolute left-[75%] top-[9%] font-semibold" >Myclassroom</button>
                <AiOutlineBell size={50} color={'gray'} class="absolute left-[85%] top-[8%]" />
                < FaUserCircle size={50} color={'gray'} class="absolute left-[92%] top-[8%]" />
            </div>
            <div class="bg-white rounded overflow-hidden shadow-lg w-[15%] h-[50%] ml-12 ">
                <ul class=" ml-16 border-5">
                    <li><a href="#" class="block p-4 text-[#444444] font-semibold text-left">Edit Profile</a></li>
                    <li><a href="#" class="block p-4 text-[#444444] font-semibold text-left">Change Password</a></li>
                    <li><a href="#" class="block p-4 text-[#444444] font-semibold text-left">Invoices</a></li>
                    <li><a href="#" class="block p-4 text-[#444444] font-semibold text-left">Certificate</a></li>
                </ul>
            </div>
            <form class="bg-white rounded overflow-hidden shadow-lg w-[60%] h-[50%] absolute left-[25%] bottom-[30%]">

                <div class="grid grid-cols-3 flex absolute top-[20%] left-[10%]">
                    <div>
                        <img src={Three} class="h-20 w-32"></img>
                    </div>
                    <div >
                        <p class="bg-grey-50 absolute left-[40%] bottom-[80%] ">AWS</p>

                    </div>
                    <div>
                        <hr class="w-[120%] h-[5%] bg-[#4285F2] absolute top-[30%] left-[40%]" />
                    </div>
                    
                </div>
                    <div class="absolute left-[60%] top-[35%]">
                        <b>100% Course Completed</b>

                    </div>

                <div class="flex absolute left-[50%] top-[40%]">
                    <button class=" underline underline-offset-1 p-3 text-[#4285F2] text-[80%] " >DOWNLOAD CERTIFICATE </button>
                    <button class=" underline underline-offset-1 p-3 text-[#555555] text-[80%] " >VERIFY CERTIFICATE</button>
                </div>



                <div class="grid grid-cols-2 flex absolute top-[60%] left-[10%]">
                    <div>
                        <img src={Four} class="h-20 w-32 " />
                    </div>
                    <div >
                        <p class="bg-grey-50 absolute left-[65%] top-[10%]">Python</p>
                       
                       <div >
                       <hr class="w-[120%] h-[5%] bg-[#4285F2] absolute top-[60%] left-[70%]" />
                       </div> 
                      
                    </div>

                </div>
                  <div class="absolute top-[80%] left-[57%]">
                      <p>You can Download Certificate after<br/> complete course completion</p>
                  </div>
                <div class="bg-grey-50 absolute left-[60%] top-[73%]">  
                    
                   <b>40% Course Completed</b>
                </div>

            </form>
            <div>
                <img class="p-10 h-[20%] w-[20%]" src={Two} alt="this is logo" />
            </div>

        </div>

    )
}

export default Invoices