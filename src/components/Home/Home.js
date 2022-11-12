import React from 'react'
import { Link } from 'react-router-dom'
import NewCourses from '../NewCourses/NewCourses'

const Home = () => {
    return (
        <>
            <div className='flex flex-col dark:bg-gray-900 pb-5'>
                <div className='flex w-2/3 pt-9 px-4 md:px-12'>
                    <h1 className='text-white m-0 text-4xl sm:text-7xl lg:text-8xl'>Start learning from <span className='text-purple-700'>the world's best platform</span></h1>
                </div>
                <div className='flex'><button className='outline-none mx-2 md:mx-12 mt-10 transition-all hover:cursor-pointer bg-blue-700 hover:bg-blue-400 rounded w-full md:w-fit py-1 px-2'><Link to={'/courses'} className='text-white text-base lg:text-lg hover:text-white'>Get Started</Link></button></div>
            </div>
            <NewCourses />
        </>
    )
}

export default Home