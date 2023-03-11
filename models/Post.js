// POST DATA 
const mongoose = require("mongoose");

// data model schema for users 
const PostSchema = new mongoose.Schema({
    userId: {
        type: String,
        required:true
    },
    desc:{
        type:String,
        maxlength:500
    },
    img:{
        type:String
    },
    likes:{
        type:Array,
        default:[]
    }
},
    { timestamps: true }
);

module.exports = mongoose.model("Post", PostSchema)
// exporting the blueprint of our model schema 