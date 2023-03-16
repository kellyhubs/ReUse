import axios from 'axios'; //axios is used to make api calls for the front end

const API = axios.create({ baseURL: 'http://localhost:5000' }); //specifying the string running in the back end

// helping out middleware -> adding something specific (function) to each request 
API.interceptors.request.use((req) => {
    // sending our token back to the backend middleware can verify users are actually logged in 
    if(localStorage.getItem('profile')){ //if the store token exist
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`; //then take our token to be a string and start the word bearer (bare token) -> get that token from that specific profile
    }

    return req; // return the req to make all the request at the bottom
});


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


// AUTH

// sign in 
export const signIn = (formData) => API.post('/user/signin', formData);

// sign up 
export const signUp = (formData) => API.post('/user/signup', formData);