// home page

import React, {useState} from 'react'
import InfoSection from '../Compontents/InfoSection';
import ExploreSection from '../Compontents/ExploreSection';
import { homeObjOne, homeObjTwo, homeObjThree } from '../Compontents/InfoSection/Data';
import FirstSection from '../Compontents/FirstSection';
import Navbar from '../Compontents/Navbar';
import Sidebar from '../Compontents/Sidebar';
import Footer from '../Compontents/Footer';

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
        <InfoSection {...homeObjOne} /> 
        <InfoSection {...homeObjTwo} /> 
        {/* card/market section between the info section */}
        <ExploreSection/>
        <InfoSection {...homeObjThree} /> 

        {/* footer */}
        <Footer />
        </>
    );
};

export default Home;