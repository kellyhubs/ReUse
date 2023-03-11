// USER DATA 
const mongoose = require("mongoose");

// data model schema for users 
const UserSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        minlength: 3, 
        maxlength: 30,
        unique: true
    },
    email: {
        type: String,
        required: true,
        maxlength: 50,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6
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
        maxlength: 100
    },
    city: {
        type: String,
        maxlength: 100
    },
    from: {
        type:String,
        maxlength: 100
    }
}, 
    { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema)
// exporting the blueprint of our model schema 