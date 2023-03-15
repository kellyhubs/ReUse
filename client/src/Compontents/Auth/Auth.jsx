import React, { useState } from 'react'

import { Avatar, Button, Paper, Grid, Typography, Container } from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

import Input from './Input'; //input the intput fields 




const Auth = () => {

  const [showPassword, setShowPassword] = useState(false);
  const [isSignup, setIsSignup] = useState(false); //changing the state of when clicking the button to sign up or sign in 

  const handleShowPassword = () => setShowPassword(!showPassword); //toggling the show password on and off 
  
  // switch mode for the switch to between the forms using setIsSignup state
  const switchMode = () => {
    // setForm(initialState); 
    setIsSignup((prevIsSignup) => !prevIsSignup); //makes the switch 
    setShowPassword(false);
  };
  
  const handleSubmit = () => {

  };

  const handleChange = () => {

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
                          <Input name="firstname" label='First Name' handleChange={handleChange} style={{ margin: (theme) => theme.spacing(1)}} autoFocus half />
                          <Input name="lastname" label='Last Name' handleChange={handleChange} style={{ margin: (theme) => theme.spacing(1)}} half />
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