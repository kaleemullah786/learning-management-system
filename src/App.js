import React from 'react'
import { Route,BrowserRouter as Router, Routes} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
const App = () => {
  return (
    <div className='App'>
      <Router>
        <Navbar/>
        
      </Router>
    </div>
  )
}

export default App