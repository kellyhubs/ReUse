import styled from 'styled-components'
import { Link as LinkS } from 'react-scroll'
import { Link as LinkR } from 'react-router-dom'
import { FaTimes } from 'react-icons/fa'



// styling Sidebar (aside attribute moves compontent on the side)
export const SidebarContainer = styled.aside`
    position:fixed;
    z-index:999;
    width: 100%;
    height: 100%;
    background: #636363;
    display:grid;
    align-items: center;
    top:0;
    left:0;
    transition: 0.3s ease-in-out;
    opacity:${({ isOpen })=>(isOpen ? '100%' : '0' )};
    top:${({ isOpen }) => (isOpen ? '0' : '-100%')};
`;

// stock compontents can do if/else statements ${} 
    // if the side bar isOpen is true (when clicked on icon) -> display 100% opacity (see it), else 0% (false) when not clicked it is not shown
        // top: if/else statement is for the dropdown menu

// styling sidebar icon to close 
export const CloseIcon = styled(FaTimes)`
    color: #FFFBF2;

`;

// styling icon
export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor:pointer;
    outline:none;
`;

// styling the div that wraps around the elements
export const SidebarWrapper = styled.div`
    color: #FFFBF2;
`;

// styling the sidebar ul menu
export const SidebarMenu = styled.ul`
    display:grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 80px);
    text-align: center;

    @media screen and (max-width: 480px){
        grid-template-rows: repeat(6, 60px);
    }
`

// styling side bar items , react-scroll
export const SidebarLink = styled(LinkS)`
    display:flex;
    align-items:center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration:none;
    list-style:none;
    transition: 0.2s ease-in-out;
    text-decoration: none;
    color: #FFFBF2;
    cursor: pointer;

    &:hover{
        color: #C98477;
        transition: 0.2s ease-in-out;
    }
`;

// centering the button
export const SideBtnWrap = styled.div`
    display:flex;
    justify-content:center;
`;

// sidebar route button sign in 
export const SidebarRoute = styled(LinkR)`
    border-radius: 50px;
    background: #C98477;
    white-space: nowrap;
    padding: 16px 64px;
    color: #FFFBF2;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover{
        transition: all 0.2s ease-in-out;
        background: #CBD2CA;
        color: #636363;
    }
`;

