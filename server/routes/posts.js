// CRUD ROUTES => localhost: 3001/posts
import express from 'express';
import { getPosts } from '../controllers/posts.js' //grabbing from the controller folder

const router = express.Router(); //router

// localhost: 3001/posts
router.get('/', getPosts);

export default router; //exporting the router