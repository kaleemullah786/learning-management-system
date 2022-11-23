import React from 'react'
import { useNavigate } from 'react-router-dom';
import Logo from "../../../src/img/logo.png";
import { UserAuth } from '../../context';
import { Link } from "react-router-dom";

const TopBar = () => {
    const {logout} = UserAuth();
    const navigate = useNavigate();

    const handleLogout = async () =>{
        try {
            await logout()
            navigate('/login')
        } catch (error) {
            console.log(error.message);
        }
    }
  return (
    <div >
    <div className='flex mt-2 mb-2 h-15 items-center'>
        <div className="flex mx-4 mt-5 mb-3">
            <div className='flex items-center'> 
            <img src ={Logo} alt="logo" className='ml-3 h-6 sm:h-9' />
            </div>
        </div>
        <div className='ml-auto mr-24 rounded-lg px-2 py-2'>
            <Link to='/'>
                <label className='mr-8 ml-auto bg-lilac text-black cursor-pointer hover:text-blue-600 text-base'>Courses</label>
            </Link>
            <button onClick={handleLogout} className="bg-lilac py-2 px-4 bg-sky-500 hover:bg-sky-700 rounded-2xl">
            Logout
            </button>
        </div>
        <div>

        </div>
    </div>
    </div>
  )
}

export default TopBar