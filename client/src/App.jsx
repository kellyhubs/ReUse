import React from 'react'
import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom' //react router to move between pages
import Home from './pages'
import SigninPage from './pages/signin';
import UserFeedPage from './pages/userfeed';

function App() {
  return(
    <Router>
      {/* Routes component is used to render components only when the path will be matched. Otherwise, it returns to the not found component. */}
      <Routes>
        {/* route to homepage */}
        <Route path="/" element={<Home />}  />

        {/* route to sign in page */}
        <Route path="/signin" element={<SigninPage />} />

        {/* route to userfeed page */}
        <Route path="/feed" element={<UserFeedPage />} />
      </Routes>
    </Router>
  );
}
export default App;
