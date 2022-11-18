import React from 'react'
import { FaBuffer, FaChartBar, FaUserAlt } from "react-icons/fa";


const StudentDashboard = () => {
    console.log('running');
  return (
    <div className='flex'>
        <div className='flex justify-center  bg-gray-300 h-screen w-[200px]'>
        <div className='flex flex-col'>
            <div className='flex justify-center mt-10 mx-5'>
                <div className='flex justify-center items-center w-10 h-10 rounded-sm'>
                    <FaUserAlt className='text-2xl text-gray-700' />
                </div>
            </div>
            <div className='text-l font-light p-1'>Student Name</div>
            <div className='flex justify-center items-center mt-10'>
                <div className='flex justify-center items-center w-10 h-10 rounded-sm'>
                    <FaChartBar className='text-2xl text-gray-700' />
                </div>
                <div className='text-l font-bold text-sky-500 hover:text-purple-700 cursor-pointer'>Dashboard</div>
            </div>
            <div className='flex justify-center items-center mt-2'>
                <div className='flex justify-center items-center w-10 h-10 rounded-sm'>
                    <FaBuffer className='text-2xl text-gray-700' />
                </div>
                <div className='text-l font-bold text-sky-500  hover:text-purple-700 cursor-pointer'>All Courses</div>
            </div>

        </div>

        </div>
    </div>
  );
}

export default StudentDashboard
