import React from 'react'
import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom' //react router to move between pages
import Home from './pages'
import SigninPage from './pages/signin';
import MarketPlace from './pages/MarketPlace';
import Garden from './pages/garden';
import GardenItem from './pages/GardenItem'

function App() {
  return(
    <Router>
      {/* Routes component is used to render components only when the path will be matched. Otherwise, it returns to the not found component. */}
      <Routes>
        {/* route to homepage */}
        <Route path="/" element={<Home />}  />

        {/* route to sign in page */}
        <Route path="/signin" element={<SigninPage />} />
      </Routes>
    </Router>
  );
}
export default App;
