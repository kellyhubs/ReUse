// creating all of the handlers for our routes 
// putting all the logic and requests in here and then import to the routes 

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
    const posts = req.body // request body (from the form)
    const newPost = new PostMessage(posts); //creating new data and sending it through as a new post

    try{
        await newPost.save() //saving is a async function
        res.status(201).json(newPost); //successful for post creation
    } catch(err){
        res.status(409).json({ messsage: err.message }); //else catch error 
    }
}