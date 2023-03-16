import mongoose from 'mongoose';

// blue print/data model for post request 
const postSchema = mongoose.Schema({
    title: String,
    message: String,
    name: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likes:{
        type:[String],
        default:[]
    },
    createdAt: {
        type:Date,
        default: new Date(),
    }
})

const PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;