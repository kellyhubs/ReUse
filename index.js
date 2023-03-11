require('dotenv').config() //getting .env file

// importing express
const express = require("express"); 
const app = express();

// importing middleware ->making request to server and makes it secure when passing in data (properties)
const helmet = require("helmet");
const morgan = require("morgan");

// exporting routes
const userRoute = require("./Routes/users");
const authRoute = require("./Routes/auth");
const postRoute = require("./Routes/posts");

// connecting database
const mongoose = require("mongoose");

mongoose.connect(process.env.URI)
.then(() => console.log(`connected to database`)) //runs smoothly after connection
.catch(error => {console.log(`Error connecting to database: ${error}`)}); // if not -> catch/show error

// middleware & routes 
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));


app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/posts", postRoute);

// app listener 
app.listen(3001, ()=> {console.log("Backend server is running!")});