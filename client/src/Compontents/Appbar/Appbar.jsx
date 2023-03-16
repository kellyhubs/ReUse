import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from'react-router-dom';
import {  AppBar, Toolbar, Typography, Avatar, Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';

const Appbar = () => {

  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile'))); //trying to fetch something 
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const logout = () => {
    dispatch({ type: 'LOGOUT'});

    navigate('/auth');

    setUser(null);
  };

  // before the url changes from /auth to '/'
  useEffect(() =>{
    const token = user?.token; //if token exist send it to the token variable

    // check if the token is expired
    if(token){
      const decodedToken = decode(token); //decoding the token 

      if(decodedToken.exp * 1000 < new Date().getTime()) logout(); //check if the decoded token expiry ( is multiply by 1000 milliseconds) lower than then the current time -> log out, 
    }

    setUser(JSON.parse(localStorage.getItem('profile')));
  }, [location]);

  
  return (
    <AppBar style={{ borderRadius: '15px', margin: "30px 0", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", padding:'10px 50px'}} 
   position="static" color="inherit" > 
  <div style={{ display: 'flex', alignItems: 'center'}}>
    {/* added styling in the react using material ui */}
    <Typography component={Link} to="/" variant="h2" align='center' sx={{color: '#9FACA3', textDecoration: 'none' }}>ReUse</Typography>
       <img  src='/images/groups.png' alt="icon" height="60" style={{ marginLeft: '15px'}} />
  </div>
  <Toolbar style={{display: 'flex', justifyContent: 'flex-end', width: '400px'}}>
    {/*  see if the user is logged in or not, if user exist show div if not show sign in button */}
    {user ? (
        <div style={{display: 'flex', justifyContent: 'space-between', width: '400px'}}>
          <Avatar alt={user.result.name} src={user.result.imageUrl} style={{backgroundColor: '#9FACA3'}}>{user.result.name.charAt(0)}</Avatar>
          <Typography variant="h6" color="primary" style={{display: 'flex', alignItems: 'center'}}>{user.result.name}</Typography>
          <Button variant="contained" color="error" onClick={logout}>Logout</Button>
          </div>
    ) : (
        <Button component={Link} to="/auth" variant="contained" color="primary">Sign In</Button>
    )}
  </Toolbar>
   </AppBar>
   
  )
}

export default Appbar;