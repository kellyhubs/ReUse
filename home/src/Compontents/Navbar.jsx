import React, { useState } from 'react'
import { Button } from './button'
import { Link } from 'react-router-dom' //react-router for the front end between pages (no data)
import './Navbar.css'


function Navbar(){

const [click, setClick] = useState(false);
// update the state with inital value of false
const [button, setButton] = useState(true);
//updating the state of the button

const handleClick = () => setClick(!click);
// reverse the state when click -> change the value to true
const closeSmallMenu = () => setClick(false);
// close the menu (makes it disappear)

const showButton = () => {
    if(window.innerWidth <= 960){
        setButton(false);
    }else{
        setButton(true);
    }
};
// function that display the button by removing and displaying it depending on the window sizing

window.addEventListener('resize', showButton);
// when resizing the screen (window) -> button shows 


    return(
    <>
        {/*  navbar */}
        <nav className = "navbar"> 
            <div className= "navbar-container">
                
                <Link to="/" className="navbar-logo">
                    ReUse <i className="fa-solid fa-hand-holding-hand"/>
                </Link>
                {/* React Logo on the navbar, Link tag is similar to <a> for React-router*/}

                {/* Hamburger navbar for smaller screens  */}
                <div className='small-nav' onClick={handleClick}> 
                {/* when clicked the value changes the class of the icon (toggles the icons) hamburger menu -> bars menu*/}
                <i className={click ? 'fas fa-times': 'fas fa-bars'} /> 
                </div>
                {/* click the value (true) toggle to the nav menu , else  disappear */}
                    <ul className={click ? 'small-nav active': 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to ='/' className='nav-links' onClick={closeSmallMenu} >
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to ='/about' className='nav-links' onClick={closeSmallMenu} >
                                About
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to ='/market' className='nav-links' onClick={closeSmallMenu} >
                                Market
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to ='/signup' className='nav-links-small' onClick={closeSmallMenu} >
                                Sign Up
                            </Link>
                        </li>
                    </ul>  
                    {/* if button is true, returns button compontent with styling */}
                    {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
            </div>
        </nav>
    </>
    )
}

export default Navbar