import React from 'react'
import './App.css'
import {BrowserRouter as Router} from 'react-router-dom' //react router to move between pages
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
