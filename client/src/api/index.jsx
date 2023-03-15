import axios from 'axios'; //axios is used to make api calls for the front end

const url = 'http://localhost:5000/posts'; //specifying the string running in the back end

// function to fetch post requests from our url(backend) , returns the database 
export const fetchPosts = () => axios.get(url);

// create post 
export const createPost = (newPost) => axios.post(url, newPost);

// update post
export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost); 