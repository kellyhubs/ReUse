import express from 'express';

import { signin, signup } from '../controllers/user.js'; //grabbing from the controller folder

const router = express.Router(); //router


// Sign in Route
router.post("/signin", signin);

// Sign up route
router.post("/signup", signup);



export default router; //exporting the router