// CRUD ROUTES => localhost: 3001/posts
import express from 'express';
import { getPosts, createPost } from '../controllers/posts.js' //grabbing from the controller folder

const router = express.Router(); //router

// localhost: 3001/posts -> GET REQUEST
router.get('/', getPosts);

// CREATE REQUEST
router.post('/', createPost);

export default router; //exporting the router