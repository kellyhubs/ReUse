import React from 'react';
import { useSelector } from 'react-redux';
import Post from './Post/Post';

const Posts = () => {
    // hook -> access to the state of the global redux store and then return the posts
    const posts = useSelector((state) => state.posts);

    console.log(posts);




    return (<>
        <h1>POST SSSS</h1>
        <Post />
        <Post />
    </>
    );
}

export default Posts;