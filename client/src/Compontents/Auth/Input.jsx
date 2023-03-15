import React from 'react'
import { TextField, Grid, InputAdornment, IconButton } from '@mui/material'

import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';



 const Input = ({  name, handleChange, label, half, autoFocus, type, handleShowPassword }) => 
 (
    // scaling the screen
    <Grid item xs={12} sm={ half ? 6 : 12}>
      <TextField
            name={name}
            onChange={handleChange}
            variant="outlined"
            required
            fullWidth
            label={label}
            autoFocus={autoFocus}
            type={type}
            InputProps = {name === 'password' ? {
                endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={handleShowPassword}>
                        {type === 'password' ? <VisibilityIcon /> : <VisibilityOffIcon />}
                      </IconButton>
                    </InputAdornment>
                  ),
                } : null}
        />
    </Grid>
  );

export default Input;


// compontent for auth form show pass or null 
// inputProps -> icon that showing on the right side of the input to click it to show the password or not 