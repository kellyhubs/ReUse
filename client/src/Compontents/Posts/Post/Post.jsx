import React from 'react';
import {Card, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import DeleteIcon from '@mui/icons-material/Delete';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import moment from 'moment';


// destructure the props -> post
const Post = ({ post }) => {







    return (
        <Card style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', borderRadius: '15px', height: '100%', position: 'relative'}} >
            <CardMedia image={post.selectedFile} title={post.title} style={{ height: 0, paddingTop: '56.25%', backgroundColor: 'rgba(0, 0, 0, .3)', backgroundBlendMode: 'darken'}} />
            <div sx={{  position: 'absolute', top: '20px', left: '20px', color: 'white'}}>
                <Typography variant='h6'>{post.creator}</Typography>
                {/* post the time of when the post is created */}
                <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
            </div>
            <div style={{position: 'absolute', top: '20px', right: '20px', color: 'white'}}>
                <Button style={{color: 'white'}} size='small' onClick={() => {}}><MoreHorizIcon fontSize="medium" /></Button>
            </div>
            <div style={{display: 'flex', justifyContent: 'space-between', margin: '20px'}}>
                <Typography variant='body2' color='textSecondary' compnent="h2">{post.tags.map((tag) => `#${tag} `)}</Typography> 
                {/* string starts with a # with the post tag */}
            </div>
            <Typography gutterBottom variant="h5" component="h2" style={{padding:'0 16px'}}>{post.title}</Typography>

            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">{post.message}</Typography>
            </CardContent>

            <CardActions style={{padding:'0 16px 8px 16px', display: 'flex', justifyContent:'space-between'}} >
                <Button size='small' color="primary" onClick={() => {}}><ThumbUpAltIcon fontSize='small'/>Like {post.likeCount}</Button>
                <Button size='small' color="primary" onClick={() => {}}><DeleteIcon fontSize='small'/>Delete</Button>
            </CardActions>
    </Card>
    );
}

export default Post;