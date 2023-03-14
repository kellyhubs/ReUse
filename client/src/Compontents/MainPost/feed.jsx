import React, {useEffect} from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@mui/material'
import { useDispatch } from 'react-redux';
import { getPosts } from '../../actions/posts';

import Posts from '../Posts/posts';
import Form from '../Form/form';

const mainPost = () => {
    // using hooks to connect to redux to connect the back end
    const dispatch = useDispatch();

// the compontent that will upate 
useEffect(() =>{
    dispatch(getPosts());
}, [dispatch]);




    return(
        <Container maxWidth="lg">
            <AppBar  style={{
                 borderRadius: '15px',
                margin: "30px 0",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                }} 
            position="static" color="inherit" > 
        {/* added styling in the react using material ui */}
                <Typography variant="h2" align='center' sx={{color: '#9FACA3' }}>ReUse</Typography>
                <img  src='/images/groups.png' alt="icon" height="60" style={{ marginLeft: '15px'}} />
            </AppBar>
            
            <Grow in>
                <Container>
                    <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    );
}

export default mainPost;