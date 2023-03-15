import React from 'react';
import { Link } from'react-router-dom';
import {  AppBar, Toolbar, Typography, Avatar, Button } from '@mui/material';


const Appbar = () => {

const user = null;
  
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
          <Avatar alt={user.result.name} src={user.result.imageUrl} style={{backgroundColor: deepPurple[500],}}>{user.result.name.charAt(0)}</Avatar>
          <Typography variant="h6" color="secondary" style={{display: 'flex', alignItems: 'center'}}>{user.result.name}</Typography>
          <Button variant="contained" color="secondary">Logout</Button>
          </div>
    ) : (
        <Button component={Link} to="/auth" variant="contained" color="primary">Sign In</Button>
    )}
  </Toolbar>
   </AppBar>
   
  )
}

export default Appbar;