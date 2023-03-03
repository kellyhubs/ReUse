import React, { useState } from 'react'
import { Link } from 'react-router-dom' //react-router for the front end between pages (no data)

function Navbar(){
    return(
    <>
        {/*  navbar */}
        <nav className = "navbar"> 
            <div className= "navbar-container">
                
                <Link to="/" className="navbar-logo">
                    ReUse <i className="fa-solid fa-hand-holding-hand"/>
                </Link>
                {/* React Logo on the navbar, Link tag is similar to <a> for React-router*/}
            </div>
        </nav>
    </>
    )
}

export default Navbar