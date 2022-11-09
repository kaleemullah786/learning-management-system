import logo from './logo.svg';
import './App.css';
import Login from './components/Login/Login'
import Register from './components/SignUp/Register';
import { Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
    <Routes>
      <Route path='/signin' element={<Login />} />
      <Route path='/signup' element={<Register />} />

    </Routes>
    </div>
  );
}

export default App;
