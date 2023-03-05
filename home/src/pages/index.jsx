// home page

import React, {useState} from 'react'
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
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
        </>
    );
};

export default Home;