import React from 'react'
import { FaBars } from 'react-icons/fa' // importing react icons
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink} from './NavbarElements'

const Navbar = ({ toggle }) => {
    return(
        // fragments -> allows you to return multiple compontents instead of using <div>
        <>
        {/* Main navbar */}
            <Nav>
                <NavbarContainer>
                    <NavLogo to="/">ReUse &nbsp; <i class="fa-solid fa-hand-holding-hand"></i></NavLogo>
                    {/* react router is similar to <a> but instead it's <link>. href= ->  to=*/}

{/* Small navbar icon */}
{/* when clicked the toggle will be trigger for the isOpen function in the page.jsx to show the small navmenu */}
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>

{/* Container for the menu items */}
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="about">About</NavLinks>
                        </NavItem>

                        <NavItem>
                            <NavLinks to="discover" activeClassName="active">Discover</NavLinks>
                        </NavItem>

                        <NavItem>
                            <NavLinks to="explore" activeClassName="active">Explore</NavLinks>
                        </NavItem>

                        <NavItem>
                            <NavLinks to="signup" activeClassName="active">Sign Up</NavLinks>
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