import React from 'react';
import {Card, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import DeleteIcon from '@mui/icons-material/Delete';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import { useDispatch } from 'react-redux';
import moment from 'moment';
import { deletePost, likePost } from '../../../actions/posts'

// destructure the props -> post
const Post = ({ post, setCurrentId }) => {

    const dispatch = useDispatch();

    // grabbing the name from the localstorage
    const user = JSON.parse(localStorage.getItem('profile'));


    // sub compontent of the post component
    const Likes = () => {
        if(post.likes.length > 0){
            return post.likes.find((like) => like === (user?.result?._id)) //check to see if the current user likes something or didnt like something with the customized id from the database
            ? (
                <><ThumbUpAltIcon fontSize="small" />&nbsp;{post.likes.length > 2 ? `You and ${post.likes.length - 1} others` : `${post.likes.length} like${post.likes.length > 1 ? 's' : ''}` }</> //'YOU and (other user names ) like this post with either one like or multiple likes'
                ) : (
                <><ThumbUpAltOutlinedIcon fontSize="small" />&nbsp;{post.likes.length} {post.likes.length === 1 ? 'Like' : 'Likes'}</> //if the person didnt like it -> just says the number of like(s)
            );
        }
        return <><ThumbUpAltOutlinedIcon fontSize="small" />&nbsp;Like</>; //inital state if there no likes 
    }



    return (
        <Card style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', borderRadius: '15px', height: '100%', position: 'relative'}} >
            <CardMedia image={post.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title={post.title} style={{ height: 0, paddingTop: '56.25%', backgroundColor: 'rgba(0, 0, 0, .2)', backgroundBlendMode: 'darken'}} />
            <div sx={{  position: 'absolute', top: '20px', left: '20px', color: 'white'}}>
                <Typography variant='h6'>{post.name}</Typography>
                {/* post the time of when the post is created */}
                <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
            </div>

            {/* only the current user who made the post can update the post, will show the update icon */}
            {(user?.result?._id === post?.creator) && (
            <div style={{position: 'absolute', top: '20px', right: '20px', color: 'white'}}>
                <Button style={{color: 'white'}} size='small' onClick={() => setCurrentId(post._id)}>
                    <MoreHorizIcon fontSize="medium" />
                    </Button>
            </div>
            )}

            <div style={{display: 'flex', justifyContent: 'space-between', margin: '20px'}}>
                <Typography variant='body2' color='textSecondary' compnent="h2">{post.tags.map((tag) => `#${tag} `)}</Typography> 
                {/* string starts with a # with the post tag */}
            </div>
            <Typography gutterBottom variant="h5" component="h2" style={{padding:'0 16px'}}>{post.title}</Typography>

            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">{post.message}</Typography>
            </CardContent>

            <CardActions style={{padding:'0 16px 8px 16px', display: 'flex', justifyContent:'space-between'}} >
                {/* if user is not logged in the like button is disabled  */}
                <Button size='small' color="primary" disabled={!user?.result} onClick={() => dispatch(likePost(post._id))}> 
                    <Likes />
                </Button>

                {/* only the current user who makes the post can delete, will show the delete button */}
                {(user?.result?._id === post?.creator) && (
                     <Button size='small' color="primary" onClick={() => dispatch(deletePost(post._id))}>
                        <DeleteIcon fontSize='small'/> Delete
                    </Button>
                )}
            </CardActions>
    </Card>
    );
};

export default Post;