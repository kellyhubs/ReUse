import dotenv from 'dotenv'; //getting .env file
dotenv.config();

// importing express
import express from 'express';
const app = express();

// importing middleware ->making request to server and makes it secure when passing in data (properties)
import cors from 'cors';
import morgan from "morgan";

// exporting routes
import postRoutes from './routes/posts.js';
import bodyParser from 'body-parser';

// using the middleware
app.use(bodyParser.json({ limit: '30mb', extended: true})); //sending images 
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true}));
app.use(cors());

// exporting the routes
app.use('/posts', postRoutes); //every route inside posts routes going to start with posts

// connecting database
import mongoose from "mongoose";

mongoose.connect(process.env.URI)
.then(() => console.log(`connected to database`)) //runs smoothly after connection
.catch(error => {console.log(`Error connecting to database: ${error}`)}); // if not -> catch/show error


// app listener 
app.listen(3001, ()=> {console.log("Backend server is running!")});