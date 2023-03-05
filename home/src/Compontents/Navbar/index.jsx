import React from 'react'
import { FaBars } from 'react-icons/fa' // importing react icons
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink} from './NavbarElements'

const Navbar = () => {
    return(
        // fragments -> allows you to return multiple compontents instead of using <div>
        <>
        {/* Main navbar */}
            <Nav>
                <NavbarContainer>
                    <NavLogo to="/">ReUse</NavLogo>
                    {/* react router is similar to <a> but instead it's <link>. href= ->  to=*/}

{/* Small navbar icon */}
                    <MobileIcon>
                        <FaBars />
                    </MobileIcon>

{/* Container for the menu items */}
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="about">About</NavLinks>
                        </NavItem>

                        <NavItem>
                            <NavLinks to="market">Market</NavLinks>
                        </NavItem>

                        <NavItem>
                            <NavLinks to="discover">Discover</NavLinks>
                        </NavItem>

                        <NavItem>
                            <NavLinks to="signup">Sign Up</NavLinks>
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