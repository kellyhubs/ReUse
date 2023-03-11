// USER DATA 
const mongoose = require("mongoose");

// data model schema for users 
const UserSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        min: 3, 
        max: 30,
        unique: true
    },
    email: {
        type: String,
        required: true,
        max: 50,
        unique: true
    },
    password: {
        type: String,
        required: true,
        min: 6
    },
    profilePicture: {
        type: String,
        default: ""
    },
    coverPicture: {
        type: String,
        default: ""
    }, 
    followers:{
        type:Array,
        default: []
    },
    following:{
        type:Array,
        default: []
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    
    desc: {
        type: String,
        max: 100
    },
    city: {
        type: String,
        max: 100
    },
    from: {
        type:String,
        max: 100
    }
}, 
    { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema)
// exporting the blueprint of our model schema 