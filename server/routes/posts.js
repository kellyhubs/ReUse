// CRUD ROUTES => localhost: 3001/posts
import express from 'express';
import { getPosts, createPost, updatePost, deletePost, likePost} from '../controllers/posts.js'; //grabbing from the controller folder
import auth from '../middleware/auth.js'; //importing auth 

const router = express.Router(); //router

// localhost: 3001/posts -> GET REQUEST
router.get('/', getPosts);

// CREATE REQUEST
router.post('/', auth, createPost);

// UPDATE REQUEST 
router.patch('/:id', auth, updatePost);

// DELETE REQUEST
router.delete('/:id', auth, deletePost);

// Liking Posts Request
router.patch('/:id/likePost', auth, likePost);

export default router; //exporting the router

