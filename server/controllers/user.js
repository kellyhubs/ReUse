// all the logic of signing in and signing up 

import bcrypt from 'bcryptjs'; //use to hash passwords/ private information -> have secruity 
import jwt from 'jsonwebtoken'; //json web token -> safe way to store users in a browser for a period of time ( users stay log in until they click log out)

import User from '../models/user.js'; //importing the userSchema 


// sign in 
export const signin = async (req,res) => {
    const {email, password } = req.body; //grabbing from the front end to sign in 

    try{
        const existingUser = await User.findOne({ email }); //searching for existing user in the database by email 
        if(!existingUser) return res.status(404).json({ message: "User doesn't exist" }); //if user does not exist/ havent sign up yet -> send 404 error that it doesnt exist

        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password); //see if the password is correct with the user that sign up with the email 
        if (!isPasswordCorrect) return res.status(400).json({ message: "Invalid credentials" }); //if the password is not correct then send invalid credentials

        // if the user exist and puts in the correct credentials -> send to the front end 
        const token = jwt.sign({ email: existingUser.email, id: existingUser._id }, 'test', { expiresIn: "1h" }); //info stored in the token
        res.status(200).json({ result: existingUser, token }); //return user

    } catch (error){
        res.status(500).json({message: "Something went wrong"});
    }
};


// sign up 
export const signup = async (req,res) => {
    const {email, password, confirmPassword, firstName, lastName } = req.body; //getting data from req. body when signing up 

    try{
        const existingUser = await User.findOne({ email }); //searching for existing user in the database by email 
        if(existingUser) return res.status(400).json({ message: "User already exist" }); //users cannot use the same email to sign up 

        // see if the password is the same as confirmed password 
        if(password != confirmPassword) return res.status(400).json({ message: "Password don't match." });

        // hasing the password -> the second argument is the level of difficulty use to hash the password (salt)
        const hashedPassword = await bcrypt.hash(password, 12); 

        //if don't have existing user & password matches -> create user
        const result = await User.create({ email, password: hashedPassword, name: `${firstName} ${lastName}` });
        const token = jwt.sign({ email: result.email, id: result._id }, 'test', { expiresIn: "1h" }); //info stored in the token

        // after all is successful return the user 
        res.status(200).json({ result, token });

    } catch (error){
        res.status(500).json({message: "Something went wrong"});
    }
};