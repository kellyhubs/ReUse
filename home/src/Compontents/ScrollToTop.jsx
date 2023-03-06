// this file will always make the page be at the top without scrolling
// this is a react-router property


import {useEffect} from 'react'
import {useLocation} from 'react-router-dom'

export default function ScrollToTop(){
    const {pathname} = useLocation()

useEffect(
        () => {
        window.scrollTo(0,0)
    }, 
    [pathname]
);

    return null;
}