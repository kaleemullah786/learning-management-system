import Login from './components/Login/Login'
import Register from './components/SignUp/Register';
import { Routes, Route } from 'react-router-dom';
import { AuthContextProvider } from './context/AuthContext';
function App() {
  return (
    <div className="App">
    <AuthContextProvider>
      <Routes>
        <Route path='/signin' element={<Login />} />
        <Route path='/signup' element={<Register />} />
      </Routes>
    </AuthContextProvider>

    </div>
  );
}

export default App;
