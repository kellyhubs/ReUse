// home page

import React, {useState} from 'react'
import AboutSection from '../Compontents/AboutSection';
import { homeObjOne } from '../Compontents/AboutSection/Data';
import FirstSection from '../Compontents/FirstSection';
import Navbar from '../Compontents/Navbar';
import Sidebar from '../Compontents/Sidebar';

const Home = () => {

// updating the state, change it to the reverse 
const [isOpen, setIsOpen] = useState(false)

// set the state from false to true (toggling it )
const toggle = () => {
    setIsOpen(!isOpen)
}


    return(
        <>
        {/* Navbar/Sidebar */}
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />

        {/* Main Section */}
            <FirstSection />

        {/* About/Info Section */}
        {/* passing in the data from the data.jsx */}
        <AboutSection {...homeObjOne} /> 
        </>
    );
};

export default Home;