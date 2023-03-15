import axios from 'axios'; //axios is used to make api calls for the front end

const API = axios.create({ baseURL: 'http://localhost:5000' }); //specifying the string running in the back end

// function to fetch post requests from our url(backend) , returns the database 
export const fetchPosts = () => API.get('/posts');

// create post 
export const createPost = (newPost) => API.post('/posts', newPost);

// update post
export const updatePost = (id, updatedPost) => API.patch(`/posts/${id}`, updatedPost);

//deleting post
export const deletePost = (id) => API.delete(`/posts/${id}`);

// liking a post 
export const likePost = (id) => API.patch(`/posts/${id}/likePost`);