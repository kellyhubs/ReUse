

import * as api from '../api/index.jsx'; //import * means that we import everything from the action folder as api 

// Action creators -> are functions that return actions 
    // actions is an object with a payload of data 
// pay load -> the stored data for all of our posts , need to use aysnc functions because it takes time for posts to pass into the storage (redux-thunk allow us to add another arrow function )
    // instead of returning the action -> we have to dispatch it 


// getting the posts
export const getPosts = () => async (dispatch) => {
    try{
        const { data } = await api.fetchPosts(); //getting a response from the api, in the response there is always the data object that is being return from the back end an d then get the data (posts) annd then dispatch the action 
        dispatch ({ type: 'FETCH_ALL', payload: data});
        // disaptching the action and the payload is the data dispatch and patch from the backend using redux
    }catch(error){
        console.log(error)
    }
};


// creating the posts
export const createPost = (post) => async (dispatch) => {
    try{
        const { data } = await api.createPost(post); //making a api request to make a post to the back end server 
        dispatch({ type: 'CREATE', payload: data });
    }catch(error){
        console.log(error)
    }
};

// updating the posts
export const updatePost = (id, post) => async (dispatch) => {
    try{
        const { data } = await api.updatePost(id, post); //making the api request to update the post to the back end 
        dispatch({ type: 'UPDATE', payload: data }); //returning the updated memory of the post
    }catch(error){
        console.log(error)
    }
};

// deleting posts
export const deletePost = (id) => async (dispatch) => {
    try {
      await api.deletePost(id); //gets the id and deletes 
  
      dispatch({ type: 'DELETE', payload: id });
    } catch (error) {
      console.log(error);
    }
  };