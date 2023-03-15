import React from 'react';
import { Grid, CircularProgress } from '@mui/material';
import { useSelector } from 'react-redux';
import Post from './Post/Post';

const Posts = ({ setCurrentId }) => {
    // hook -> access to the state of the global redux store and then return the posts
    const posts = useSelector((state) => state.posts);

    return(
        // if npost length is 0 then show circular progress (loading spinner ) if false then show grid (all posts)
        !posts.length ? <CircularProgress /> : (
            // else show grid of our posts 
            <Grid container alignItems='stretch' spacing={3} styles={{display: 'flex', alignItems: 'center'}}>
                {posts.map((post) => ( //sending post into anew array into thier each compontent
                    <Grid key={post._id} item xs={12} sm={6} md={6}>
                        <Post post={post} setCurrentId={setCurrentId} /> 
                        {/* sending the same prop over and over again between the most child compontent  */}
                    </Grid>
                ))}
            </Grid>
        )
    );
};

export default Posts;