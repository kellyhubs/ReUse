// ROUTES FOR USERS 
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



// follow users 
// unfollow users 

module.exports = router

// making routes and exports them in the index.js 