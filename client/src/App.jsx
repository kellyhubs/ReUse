import React from 'react'
import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom' //react router to move between pages
import { Container } from '@mui/material';

import Mainpost from './pages/mainPost';
import AppBar from './Compontents/Appbar/Appbar';
import Auth from './Compontents/Auth/Auth'


function App() {
  return(
    <Router>
      <Container maxWidth="lg">
        <AppBar />
          {/* Routes component is used to render components only when the path will be matched. Otherwise, it returns to the not found component. */}
          <Routes>
            <Route path="/" element={<Mainpost />} />
            <Route path="/auth" element={<Auth />} />
          </Routes>
      </Container>
    </Router>
  );
}
export default App;
