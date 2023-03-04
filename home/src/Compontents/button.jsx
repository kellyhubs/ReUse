import React from "react";
import './button.css';
import { Link } from 'react-router-dom';

// custom css variables , can be use var() inside the css page 
const STYLES = ['btn--primary', 'btn--outline'];

const SIZES = ['btn--medium', 'btn--large'];

// pass in properties 
export const Button = (
    {children,
    type,
    onClick,
    buttonStyle, 
    buttonSize
}) => {
    // if the component have the buttonStyle (true) use the buttonStyle property, else set the value to the styles of the first index/option in the array (false)
    // btn-primary is default style for the button if  buttonStyles is not applied 
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];

    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0] // same concept as above 

        return (
            <Link to='/signup' className='btn-small'>
                <button className={`btn ${checkButtonStyle} ${checkButtonSize}`} onClick={onClick} type={type}>
                    {children} 
                    {/* whatever value is put inside the button, it's rendered by the children property */}
                </button>
            </Link>
        )
};