import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Avatar, Button, Paper, Grid, Typography, Container } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';


import {  signup, signin } from '../../actions/auth';
import Input from './Input'; //input the intput fields 


// making a new variable initialstate of the data to be empty 
const initialState = { firstName: '', lastName: '', email: '', password: '', confirmPassword: '' };

const Auth = () => {
  
  const [isSignup, setIsSignup] = useState(false); //changing the state of when clicking the button to sign up or sign in 
  const [formData, setFormData] = useState(initialState) // the initial state will be empty when seeing the form -> the form data is empty 
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => setShowPassword(!showPassword); //toggling the show password on and off 
  
  // switch mode for the switch to between the forms using setIsSignup state
  const switchMode = () => {
    setFormData(initialState); 
    setIsSignup((prevIsSignup) => !prevIsSignup); //makes the switch 
    setShowPassword(false);
  };
  
  // change the state of the form once clicked on handle submit 
  const handleSubmit = (e) => {
    e.preventDefault();
    // two different types of submits -> sign up and sign in 
    if(isSignup){
      dispatch(signup(formData, navigate)); //dispatch an action -> sign up action -> pass the entire form data -> navigate the "history"
    } else {
        dispatch(signin(formData, navigate)); // else dispatch an action to sign in 
    }
  };

  // once put in data instead of getting back an empty array -> give it the handlechange function to plug in the data in (only update the data the user inputs ) changes the initial data 
  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value})
  } 





  return (
    <Container component="main" maxWidth="xs">
      <Paper elevation={3} sx={{ marginTop: (theme) => theme.spacing(8), display: 'flex', flexDirection: 'column', alignItems: 'center', padding: (theme) => theme.spacing(2)}}>
            <Avatar sx={{margin: (theme) => theme.spacing(1), backgroundColor: "blue"}}>
                <LockOutlinedIcon />
            </Avatar>
            <Typography variant='h5' component='h1'>{ isSignup ? 'Sign up' : 'Sign in' }</Typography>
            <form style={{width: '100%', marginTop: (theme) => theme.spacing(3)}} onSubmit={handleSubmit}>
              <Grid container spacing={2}> 
              {/* login form/sign  up */}  
                    { isSignup && (
                      <>
                          <Input name="firstName" label='First Name' handleChange={handleChange} style={{ margin: (theme) => theme.spacing(1)}} autoFocus half />
                          <Input name="lastName" label='Last Name' handleChange={handleChange} style={{ margin: (theme) => theme.spacing(1)}} half />
                      </>
                    )}
                      <Input name="email" label="Email Address" handleChange={handleChange} type="email" style={{ margin: (theme) => theme.spacing(1)}} />
                      <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} style={{ margin: (theme) => theme.spacing(1)}} />
                      { isSignup && <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password" /> }
              </Grid>
              <Button type="submit" fullWidth variant="contained" color="primary" style={{marginTop: '30px'}}>
                  { isSignup ? 'Sign Up' : 'Sign In' }
              </Button>
              <Grid container justify="flex-end">
                  <Grid item>
                    <Button onClick={switchMode} style={{marginTop: '20px'}}>
                      { isSignup ? 'Already have an account? Sign in' : "Don't have an account? Sign Up" }
                    </Button>
                    {/* switches from signin/ sign up */}
                  </Grid>
              </Grid>
            </form>
      </Paper>
    </Container>
  );
};

export default Auth;