import React from 'react'
import './App.css'
import Navbar from './Compontents/Navbar'
import {BrowserRouter as Router} from 'react-router-dom' //react router



function App() {
  return(
    <Router>
      <Navbar />
    </Router>
  );
}
export default App;
