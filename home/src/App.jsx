import React from 'react'
import './App.css'
import Navbar from './Compontents/Navbar'
import {BrowserRouter as Router} from 'react-router-dom' //react router to move between pages
import Sidebar from './Compontents/Sidebar';
import Home from './pages'



function App() {
  return(
    <Router>
      {/* homepage */}
      <Home />
    </Router>
  );
}
export default App;
