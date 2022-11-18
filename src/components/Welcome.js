import React from 'react'
import One from "../../src/img/logo.png";
import Two from "../../src/img/LMS-Assets/amazon.jpg";
import Three from "../../src/img/LMS-Assets/python.jpg";
import Four from "../../src/img/LMS-Assets/dev_ops.jpg";
import { FaCloudDownloadAlt } from 'react-icons/fa';
import { BsCheck2Circle } from 'react-icons/bs';
import { FaUserCircle } from 'react-icons/fa';

var Welcome=()=> {
    return (

        <div >
            <div class="flex">
                <img class="p-10 h-[20%] w-[20%]" src={One} alt="this is logo" />
                < FaUserCircle size={50} color={'gray'} class="absolute left-[92%] top-[8%]" />
            </div>
            <div>
                <p class="text-[#4285F2] text-5xl font-semibold pt-16">Welcome Daniel Kaleem</p>
                <p class="text-gray-500 text-2xl font-semibold pt-16">Browse Programs</p>
            </div>
            <div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 ">
                {/* <!--Card 1--> */}
                <div class="rounded overflow-hidden shadow-lg w-[80%] ">
                    <img class="w-full" src={Two} alt="Mountain" />
                    <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2">AWS</div>
                        <p class="text-gray-700 text-base">
                            Amazon Web Services, Inc. is a subsidiary of Amazon providing on-demand cloud computing
                            platforms and APIs to individuals, companies, and governments, on a metered pay-as-you-go basis.
                        </p>
                    </div>
                    <div class="grid grid-cols-2">
                        <div class="flex justify-center space-x-6">
                            <FaCloudDownloadAlt size={40} color={'gray'} />
                            <p>Cirriculum</p>
                        </div>
                        <div>
                            <BsCheck2Circle size={25} color={'gray'} />
                            <p>Enroll Now</p>
                        </div>
                    </div>

                </div>
                {/* <!--Card 2--> */}
                <div class="rounded overflow-hidden shadow-lg w-[80%]">
                    <img class="w-full" src={Three} alt="River" />
                    <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2">River</div>
                        <p class="text-gray-700 text-base">
                            Python is a high-level, general-purpose programming language. Its design philosophy emphasizes code
                            readability with the use of significant indentation. Its language constructs and object-oriented approach.
                        </p>
                    </div>
                    <div class="px-6 pt-4 pb-2">
                        <FaCloudDownloadAlt size={25} color={'gray'} />
                        <BsCheck2Circle size={25} color={'gray'} />
                    </div>
                </div>
                {/* <!--Card 3--> */}
                <div class="rounded overflow-hidden shadow-lg w-[80%]">
                    <img class="w-full" src={Four} alt="Forest" />
                    <div class="px-6 py-4">
                        <div class="font-bold text-xl mb-2">Forest</div>
                        <p class="text-gray-700 text-base">
                            DevOps is a set of practices that combines software development and IT operations. It aims to shorten the systems development life cycle and provide continuous delivery with high software quality. DevOps is
                            complementary with Agile software development.
                        </p>
                    </div>
                    <div class="px-6 pt-4 pb-2 ">
                        <FaCloudDownloadAlt size={25} color={'gray'} />
                        <BsCheck2Circle size={25} color={'gray'} />
                    </div>
                </div>
            </div> 
         </div >

         
    )
}

export default Welcome