// this button is for react-scroll !! one page button 
    // the other buttons (signup) that are made on the other files leaded to different page/ route

import styled from 'styled-components'
import {Link} from 'react-scroll'


// styling the button
// styling animations making a function in the background to change colors when hover
    // also changing the size of the button

export const Button = styled(Link)`
    border-radius: 50px;
    background: ${({primary})=> (primary ? '#C98477' : '#636363')};
    white-space: nowrap;
    padding: ${({big}) => (big ? '14px 48px': '12px 30px')};
    color: ${({dark}) => (dark ? '#636363': '#FFFBF2')};
    font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;

    &:hover{
        transition: all 0.2s ease-in-out;
        background: ${({primary})=> (primary ? '#CBD2CA' : '#E1DBC5')};
    }
`