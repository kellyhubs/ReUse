import React, {useState} from 'react';
import { TextField, Button, Typography, Paper } from '@mui/material';
import FileBase from 'react-file-base64';
import { useDispatch } from 'react-redux';
import { createPost } from '../../actions/posts';


const Form = () => {
// empty data then update the state with data
const [postData, setPostData] = useState({creator: '', title: '', message:'', tags: '', selectedFile: ''});

const dispatch = useDispatch();

// use the dispatch on the handle submit -> create post when click on submit
const handleSubmit = (e) => {
    e.preventDefault(); //get no refresh in the browser

    dispatch(createPost(postData))
}

const clear = () => {
    
}



    return (
        // paper is styling from mui  -> its a div with a white background 
        <Paper sx={{ padding: (theme) => theme.spacing(2) }}>
            <form autoComplete='off' noValidate onSubmit={handleSubmit} style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }} >
            <Typography variant='h6'>What's happening?</Typography>
            <TextField name="creator" variant="outlined" label="Creator" fullWidth value={postData.creator} onChange={(e) => setPostData({ ...postData, creator: e.target.value })} sx={{ marginBottom: '10px', marginTop: '10px' }} /> 
            {/* //in every text field this will only change the creator value/> */}
            <TextField name="title" variant="outlined" label="Title" fullWidth value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })} sx={{ marginBottom: '10px', marginTop: '10px' }}  />
            <TextField name="message" variant="outlined" label="Message" fullWidth value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })} sx={{ marginBottom: '10px', marginTop: '10px'}} />
            <TextField name="tags" variant="outlined" label="Tags" fullWidth value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value })} sx={{ marginBottom: '10px', marginTop: '10px' }} />
            <div style={{ width: '97%', margin: '10px 0'}}>
                <FileBase type="file" multiple={false} onDone={({base64}) => setPostData({ ... postData, selectedFile: base64})} /></div> {/* upload images  */}

            <Button variant="contained" size="large" type="submit" sx={{ marginBottom: '10px', marginTop: '10px', backgroundColor: '#9FACA3'}} fullWidth> Submit</Button>
            <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
            </form>
        </Paper>
    );
}

export default Form;