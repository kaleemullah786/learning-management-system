import './App.css';


import Signup from './components/SignUp/Signup';
import Login from './components/Login/Login';
import Welcome from './components/Welcome';
import Myclassroom from './components/Myclassroom';
import Resetpsw from './components/Resetpsw';
import Orderdetails from './components/Orderdetails';
import Cirtificate from './components/Cirtificate';
import Cybersecurity from './components/Cybersecurity';
import Checkmail from './components/Checkmail';
import Editprofile from './components/Editprofile';
import Changepsw from './components/Changepsw';
import Invoices from './components/Invoices';
import Invoices1 from './components/Invoices1';
import Invoices2 from './components/Invoices2';
import Resetpsw1 from './components/Resetpsw1';
import Assisment1 from './components/Assisment1';
import Assisment2 from './components/Assisment2';
import Assisment3 from './components/Assisment3';
import Feedback from './components/Feedback';
import Courceinfo from './components/Courceinfo';
import Resources from './components/Resources';
import Assisment4 from './components/Assisment4';
import Projects from './components/Projects';
import Discuss from './components/Discuss';
import Assisment5 from './components/Assisment5';
import Courceinfo1 from './components/Courceinfo1';
import Navbar from './components/Navbar/Navbar'
import {Routes,Route} from 'react-router-dom';
import { AuthContextProvider } from "./context";
import ProtectedRoute from "./components/ProtectedRoute";
import StudentDashboard from './components/Dashboard/StudentDashboard';




function App() {
  return (
    <div className="App">
      {/* <Navbar/> */}

      <AuthContextProvider>
      <Routes>
        <Route path='/dashboard' element={<StudentDashboard />} />
        <Route path="/register" element={<Signup/>}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route
          path='/welcome'
          element={
            <ProtectedRoute>
              <Welcome />
            </ProtectedRoute>
          }
        />
        <Route path="/Myclassroom" element={<Myclassroom/>}></Route>
        <Route path='/Resetpsw' element={<Resetpsw/>}></Route>
        <Route path='/Orderdetails' element={<Orderdetails/>}></Route>
        <Route path='/Cirtificate' element={<Cirtificate/>}></Route>
        <Route path='/Cybersecurity' element={<Cybersecurity/>}></Route>
        <Route path='/Checkmail' element={<Checkmail/>}></Route>
        <Route path='/Editprofile' element={<Editprofile/>}></Route>
        <Route path='/Changepsw' element={<Changepsw/>}></Route>
        <Route path='/Invoices' element={<Invoices/>}></Route>
        <Route path='/Invoices1' element={<Invoices1/>}></Route>
        <Route path='/Invoices2' element={<Invoices2/>}></Route>
        <Route path='/Resetpsw1' element={<Resetpsw1/>}></Route>
        <Route path='/Assisment1' element={<Assisment1/>}></Route>
        <Route path='/Assisment2' element={<Assisment2/>}></Route>
        <Route path='/Assisment3' element={<Assisment3/>}></Route>
        <Route path='/Feedback' element={<Feedback/>}></Route>
        <Route path='/Courceinfo' element={<Courceinfo/>}></Route>
        <Route path='/Resources' element={<Resources/>}></Route>
        <Route path='/Assisment4' element={<Assisment4/>}></Route>
        <Route path='/Projects' element={<Projects/>}></Route>
        <Route path='/Discuss' element={<Discuss/>}></Route>
        <Route path='/Assisment5' element={<Assisment5/>}></Route>
        <Route path='/Courceinfo1' element={<Courceinfo1/>}></Route>
       
      </Routes>
      </AuthContextProvider>



      </div>
  );
}

export default App;
