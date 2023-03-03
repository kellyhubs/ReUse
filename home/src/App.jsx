import React from 'react'
import Navbar from './Compontents/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'



function App() {
  return (
    <>
    {/* ROUTES */}
    <Router> 

      {/* NAVBAR COMPONENT */}
      <Navbar />
      <Routes>
        <Route exact path='/' /> 
        {/* Route to homepage with the home compontent */}
      </Routes>




    </Router>
    </>
  );
}
export default App;
