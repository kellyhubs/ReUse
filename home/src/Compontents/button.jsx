import React from "react";
import ',/button.css';
import { Link } from 'react-router-dom';


// pass in properties 
export const Button = (
    {children,
    type,
    onClick,
    buttonStyle, 
    ButtonSize
}) => {
    // if the component have the button style make it buttonstyle that is created (true), else set the value to the styles of the first index/option in the array (false)
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]
};