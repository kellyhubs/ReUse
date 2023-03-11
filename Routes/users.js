// ROUTES FOR USERS (REQUESTS)
const User = require("../models/User");
const router = require("express").Router();
const bcrypt = require("bcrypt");

// UPDATING USER PROFILE
router.put("/:id", async (req,res) => { 
    //verifying user id -> if they match the user can update their account , not match -> cannot update/delete, unless admin
    if(req.body.userId === req.params.id || req.body.isAdmin){
        //user wants to update password 
        if(req.body.password){
            try{
                const salt = await bcrypt.genSalt(10); //generating a new password 
                req.body.password = await bcrypt.hash(req.body.password, salt); //hashing it & update it
            } catch(err){
                return res.status(500).json(err);
            }
        }
// updating user info
        try{
            const user = await User.findByIdAndUpdate(req.params.id, {$set: req.body}); //automatically update/sets all inputs in the req.body
            res.status(200).json("Account has been updated"); //sends a message that updated completed
        } catch(err) {
            return res.status(500).json(err); 
        }

    } else {
        return res.status(403).json("You cannot update this account")
    }
});

// DELETING USER 
router.delete("/:id", async (req,res) => { 
    //verifying user id -> if they match the user can update their account , not match -> cannot update/delete, unless admin
    if(req.body.userId === req.params.id || req.body.isAdmin){
        try{
            const user = await User.findByIdAndDelete(req.params.id); //finds the id and deletes 
            res.status(200).json("Account has been deleted"); //sends a message that updated completed
        } catch(err) {
            return res.status(500).json(err); 
        }
    } else {
        return res.status(403).json("You cannot delete this account")
    }
});

//  GETTING A USER
router.get("/:id", async (req,res) => {
    try{
        const user = await User.findById(req.params.id); //grabbing the user id 
        const {password, updatedAt, ...other} = user._doc //._doc carries all the objects , we only send back info instead without password, updatedAt 
        res.status(200).json(other) //gives back the info in json
    }catch(err){
        res.status(500).json(err) //else catch error
    }
});

// FOLLOWING USERS
    // updating list in the user
router.put("/:id/follow", async (req,res) =>{
    if(req.body.userId !== req.params.id){ // differ user id can follow each other
        try{
            const user = await User.findById(req.params.id); //find user id (diff id)
            const currentUser = await User.findById(req.body.userId); //find the current user id -> making the request 
            if(!user.followers.includes(req.body.userId)) { //if the current user is not following the diff id user 
                await user.updateOne({$push:{followers:req.body.userId} }); //then update the data by -> pushing the id inside followers data 
                await currentUser.updateOne({$push:{following:req.params.id} }); //also push the id to following data
                res.status(200).json("user has been followed") //send json if everything succeed 
            } else {
                res.status(403).json("you already follow this account") //else catch error 
            }
        }catch(err){
            res.status(500).json(err)
        }
    }else{
        res.status(403).json("you cannot follow yourself") //else (f the same) send -> you cant follow your own account
    }
});

// UNFOLLOWING USERS 
router.put("/:id/unfollow", async (req,res) =>{
    if(req.body.userId !== req.params.id){ // differ user id can follow each other
        try{
            const user = await User.findById(req.params.id); //find user id (diff id)
            const currentUser = await User.findById(req.body.userId); 
            if(user.followers.includes(req.body.userId)) {  //if the current user is following the diff id user -> making the request to unfollow
                await user.updateOne({$pull:{followers:req.body.userId} }); 
                await currentUser.updateOne({$pull:{following:req.params.id} }); // then update by pulling the data from the following data out
                res.status(200).json("user has been unfollowed") //send json if everything succeed 
            } else {
                res.status(403).json("you don't follow this user") //else catch error 
            }
        }catch(err){
            res.status(500).json(err)
        }
    }else{
        res.status(403).json("you cannot follow yourself") //else (f the same) send -> you cant unfollow your own account
    }
});

module.exports = router

// making routes and exports them in the index.js 