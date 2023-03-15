// creating all of the handlers for our routes 
// putting all the logic and requests in here and then import to the routes 

import mongoose from 'mongoose';
import PostMessage from '../models/postMessage.js';


// GET ROUTE
export const getPosts = async (req,res) =>{
    try{
        const postMessages = await PostMessage.find(); //finding something in a model takes time so it's a async function to get the data 
        console.log(postMessages);
        res.status(200).json(postMessages);
    } catch(err){
        res.status(400).json({ message: err.message }); //send/catches error if cannot find data
    }
}

// CREATE ROUTE
export const createPost = async (req,res) =>{
    const post = req.body // request body (from the form)
    const newPost = new PostMessage({ ...post, creator: req.userId, createdAt: new Date().toISOString() }); //creating new data and sending it through as a new post

    try{
        await newPost.save(); //saving is a async function
        res.status(201).json(newPost); //successful for post creation
    } catch(err){
        res.status(409).json({ messsage: err.message }); //else catch error 
    }
}


// UPDATE ROUTE
export const updatePost = async (req,res) =>{
    const { id } = req.params; //_id is a mongoose object id
    const { title, message, creator, selectedFile, tags } = req.body; //the whole updated post is passed though req.body

// check to see if the _id is valid and is a mongoose object , if not valid send status 404
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    // if the id IS VALID -> update the post
    const updatedPost = { creator, title, message, tags, selectedFile, _id: id };
    await PostMessage.findByIdAndUpdate(id, updatedPost, { new: true });

    res.json(updatedPost);
}

export const deletePost = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    await PostMessage.findByIdAndRemove(id);

    res.json({ message: "Post deleted successfully." });
}

