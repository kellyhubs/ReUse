// CRUD ROUTES => localhost: 3001/posts
import express from 'express';
import { getPosts, createPost, updatePost } from '../controllers/posts.js' //grabbing from the controller folder

const router = express.Router(); //router

// localhost: 3001/posts -> GET REQUEST
router.get('/', getPosts);

// CREATE REQUEST
router.post('/', createPost);

// UPDATE REQUEST 
router.patch('/:id', updatePost)

export default router; //exporting the router