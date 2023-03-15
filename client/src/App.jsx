import React from 'react'
import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom' //react router to move between pages
import Mainpost from './pages/mainPost';


function App() {
  return(
    <Router>
      {/* Routes component is used to render components only when the path will be matched. Otherwise, it returns to the not found component. */}
      <Routes>
        <Route path="/" element={<Mainpost />} />
      </Routes>
    </Router>
  );
}
export default App;
