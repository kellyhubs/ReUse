import React, {useState, useEffect} from 'react';
import { TextField, Button, Typography, Paper } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64';
import { createPost, updatePost } from '../../actions/posts';



// GET THE CURRENT ID -> share the current state of the id between the post and form 



const Form = ({ currentId, setCurrentId }) => {
// empty data then update the state with data
const [postData, setPostData] = useState({ title: '', message:'', tags: '', selectedFile: ''});

// only grabbing the updated posts -> if we have a currentId that is not null loop and find the specfic post else null 
const post = useSelector((state) => (currentId ? state.posts.find((message)=> message._id === currentId) : null ));
const dispatch = useDispatch();

// grabbing the name from the localstorage
const user = JSON.parse(localStorage.getItem('profile'));

// when the post value changes -> if the post exists => update the state 
useEffect(() => {
    if (post) setPostData(post);
}, [post]);

// clears off data once updating or creating a post 
const clear = () => {
    setCurrentId(0);
    setPostData({ title: '', message:'', tags:'', selectedFile:''});
};

// use the dispatch on the handle submit -> create post when click on submit
const handleSubmit = async (e) => {
    e.preventDefault(); //get no refresh in the browser
    
    // if we have the current id (id is not null) then it goes to the else statement and dispatch the update post, if the id is null then -> create the post
    if(currentId === 0){
        dispatch(createPost({ ...postData, name: user?.result?.name })); //backend uses the name object , user?.result?. to check if have the current user 
        clear();
    } else {
        dispatch(updatePost(currentId, { ...postData, name: user?.result?.name })); //to update post we need the currentId 
        // if user is changing the post -> want to keep the user name 
        clear();
    }
};

// check if there is no logged in users -> show a card that you cannot make a post 
if (!user?.result?.name){
    return(
        <Paper sx={{ padding: (theme) => theme.spacing(2) }}>
            <Typography variant="h6" align="center">
                Please Sign in to create your own ReUse's posts and like other's posts.
            </Typography>
        </Paper>
    );
}


//on change --> event change the state of only posting that target value and holding off the other post data 

    return (
        // paper is styling from mui  -> its a div with a white background 
        <Paper sx={{ padding: (theme) => theme.spacing(2) }}>
            <form autoComplete='off' noValidate onSubmit={handleSubmit} style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }} >
                {/* updating -> text shows updating post else new post shows what's happening */}
            <Typography variant='h6'>{currentId ? `Updating "${post.title}"` : "What's happening?"}</Typography>
            {/* //in every text field this will only change the value/> */}
            <TextField name="title" variant="outlined" label="Title" fullWidth value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })} sx={{ marginBottom: '10px', marginTop: '10px' }}  />
            <TextField name="message" variant="outlined" label="Message" fullWidth value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })} sx={{ marginBottom: '10px', marginTop: '10px'}} />
            <TextField name="tags" variant="outlined" label="Tags" fullWidth value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value })} sx={{ marginBottom: '10px', marginTop: '10px' }} />
            <div style={{ width: '97%', margin: '10px 0'}}>
                <FileBase type="file" multiple={false} onDone={({base64}) => setPostData({ ... postData, selectedFile: base64})} /></div> {/* upload images  */}

            <Button variant="contained" size="large" type="submit" sx={{ marginBottom: '10px', marginTop: '10px', backgroundColor: '#C98477'}} fullWidth> Submit</Button>
            <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
            </form>
        </Paper>
    );
}

export default Form;