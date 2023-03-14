import React from 'react'
import { FaBars } from 'react-icons/fa' // importing react icons
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink} from './NavbarElements'
import { animateScroll as scroll } from 'react-scroll'

const Navbar = ({ toggle }) => {

    // function when click on logo it will scroll to the top of the page
const toggleHome = () => {
    scroll.scrollToTop();
};


    return(
        // fragments -> allows you to return multiple compontents instead of using <div>
        <>
        {/* Main navbar */}
            <Nav>
                <NavbarContainer>
                    <NavLogo to="/" onClick={toggleHome}>ReUse &nbsp; <i className="fa-solid fa-hand-holding-hand"></i></NavLogo>
                    {/* react router is similar to <a> but instead it's <link>. href= ->  to=*/}

{/* Small navbar icon */}
{/* when clicked the toggle will be trigger for the isOpen function in the page.jsx to show the small navmenu */}
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>

{/* Container for the menu items */}
{/* react-scoll properties to make the active class to work/ hover */}
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="about" smooth={true} duration={500} spy={true} exact='true' offet={-80}>About</NavLinks>
                        </NavItem>

                        <NavItem>
                            <NavLinks to="discover" smooth={true} duration={500} spy={true} exact='true' offet={-80}>Discover</NavLinks>
                        </NavItem>

                        <NavItem>
                            <NavLinks to="explore" smooth={true} duration={500} spy={true} exact='true' offet={-80}>Explore</NavLinks>
                        </NavItem>

                        <NavItem>
                            <NavLinks to="signup" smooth={true} duration={500} spy={true} exact='true' offet={-80}>Sign Up</NavLinks>
                        </NavItem>
                    </NavMenu>

{/* button to sign in*/}
                    <NavBtn>
                        <NavBtnLink to="/signin">Sign In</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </>
    );
}


export default Navbar;