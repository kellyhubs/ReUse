import React, { useState, useEffect } from 'react';
import { Container, Grow, Grid } from '@mui/material'
import { useDispatch } from 'react-redux';

import { getPosts } from '../../actions/posts';
import Posts from '../Posts/posts';
import Form from '../Form/form';

const mainPost = () => {

    const [currentId, setCurrentId] = useState(0); 
    
    // using hooks to connect to redux to connect the back end
    const dispatch = useDispatch();

// the compontent that will update 
useEffect(() =>{
    dispatch(getPosts());
}, [currentId, dispatch]);


    return(
        <Grow in>
        <Container>
          <Grid container justify="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    );
  };
export default mainPost;