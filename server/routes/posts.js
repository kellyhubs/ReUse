// CRUD ROUTES => localhost: 3001/posts
import express from 'express';
import { getPosts, createPost, updatePost, deletePost, likePost} from '../controllers/posts.js' //grabbing from the controller folder

const router = express.Router(); //router

// localhost: 3001/posts -> GET REQUEST
router.get('/', getPosts);

// CREATE REQUEST
router.post('/', createPost);

// UPDATE REQUEST 
router.patch('/:id', updatePost);

// DELETE REQUEST
router.delete('/:id', deletePost);

// Liking Posts Request
router.patch('/:id/likePost', likePost);

export default router; //exporting the router