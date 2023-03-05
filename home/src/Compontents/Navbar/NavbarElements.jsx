import styled from 'styled-components'
// write css within javascript instead of using 1 global css file (in React)

import { Link as LinkR } from 'react-router-dom'
// installed react router to move between pages (no data is being passed)

import { Link as LinkS } from 'react-scroll'
// React scroll link to move around 1 page

// styling the navbar , write css between the backticks ``
// @media -> media query, styling for smaller screens, the styling will be trigged once the screen gets to 960px or smaller
export const Nav = styled.nav`
    background: #636363;
    height: 80px;
    display:flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top:0;
    z-index:10;

    @media screen and (max-width: 960px){
        transition: 0.8s all ease;
    }
`;

// styling the container 
export const NavbarContainer = styled.div`
    display:flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
`;

// styling the logo -> different becasue using React Router & React Scroll
export const NavLogo = styled(LinkR)`
    color: #FFFBF2;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-left: 24px;
    font-weight: bold;
    text-decoration: none;
`;

// styling the hamburger icon
export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top:0;
        right:0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor:pointer;
        color: #FFFBF2;
    }
`;

// styling the navbar items
export const NavMenu = styled.ul`
    display:flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;

    @media screen and (max-width: 768px){
        display:none;
    }
`;

// styling the navbar item link
export const NavItem = styled.li`
    height: 80px;

`;

// styling react scroll links 
// navLinks is a active class, (&.active) is for it to be included
export const NavLinks = styled(LinkS)`
    color: #FFFBF2;
    display:flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &.active{
        border-bottom: 3px solid #C98477;
    }
`;

// styling the button 
export const NavBtn = styled.nav`
    display:flex;
    align-items: center;

    @media screen and (max-width: 768px){
        display:none;
    }
`;

// styling button link route
export const NavBtnLink = styled(LinkR)`
    border-radius: 50px;
    background: #C98477;
    white-space: nowrap;
    padding: 10px 22px;
    color: #FFFBF2;
    font-size: 16px;
    outline: none;
    border:none;
    cursor:pointer;
    transition: all 0.2s ease-in-out;
    text-decoration:none;

    &:hover{
        transition: all 0.2s ease-in-out;
        background: #CBD2CA;
        color: #636363;
    }
`;