import React from 'react'
import Signup from '../SignUp/Signup';
import Login from '../Login/Login';
// import Navbar from  '../Navbar/Navbar';
import {Routes,Route} from 'react-router-dom';
import ProtectedRoute from "../ProtectedRoute"; 
import StudentDashboard from "../Dashboard/StudentDashboard";
import { AuthContextProvider }  from '../../context';
import Welcome from "../Welcome";

import Coursecategory from '../Courses/Coursecategory';


const MyRoutes = () => {
    
  return (
    <div>
      
      <AuthContextProvider>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Signup/>}></Route>
        <Route path='/dashboard' element={<StudentDashboard />} />
        <Route path='/test' element={<Coursecategory />} />
        <Route path='/welcome'element={<ProtectedRoute><Welcome /> </ProtectedRoute> }/>     
      </Routes>
      </AuthContextProvider>
      
    </div>
  )
}

export default MyRoutes
