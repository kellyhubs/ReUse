// POST REQUESTS ROUTES
const router = require("express").Router();
const Post = require("../models/Post");
const User = require("../models/User");

//CREATING A POST 
router.post("/", async(req,res) =>{
    const newPost = new Post(req.body) //make post in request body 
    try{
        const savedPost = await newPost.save(); //usr makes a post 
        res.status(200).json(savedPost) //save it
    }catch(err){
        res.status(500).json(err) //else catch error
    }
});

//UPDATING A POST
router.put("/:id", async(req,res) =>{
    try{
    // verifying the user
    const post = await Post.findById(req.params.id); //checks and post
    // checking the owner of the post matches 
    if(post.userId === req.body.userId){
        await post.updateOne({$set: req.body}) //if matches -> update the post by changing the input of the request body 
        res.status(200).json("The post has been updated")
    }else{
        res.status(403).json("You can only update your own posts");
    }
}catch(err){
    res.status(500).json(err)
}
});

//DELETING A POST
router.delete("/:id", async(req,res) =>{
    try{
    // verifying the user
    const post = await Post.findById(req.params.id); //checks and deletes
    // checking the owner of the post matches 
    if(post.userId === req.body.userId){
        await post.deleteOne({$set: req.body}) //if matches -> deletes the post by changing the input of the request body 
        res.status(200).json("The post has been deleted")
    }else{
        res.status(403).json("You can only delete your own posts");
    }
}catch(err){
    res.status(500).json(err) //catch error
    }
});

//LIKING/DISLIKING A POST
router.put("/:id/like", async (req,res) => {
    // if the post likes include the user id -> it's going to like the post
    try{
        const post = await Post.findById(req.params.id); //searching for the post by the id 
        // after finding the post -> check whether this post like arrays includes this user or not 
        if(!post.likes.includes(req.body.userId)) {
            await post.updateOne({$push: {likes: req.body.userId} }); // send the request to update the like array
            res.status(200).json("The post has been liked")
        } else { 
            // else -> dislike
            await post.updateOne({$pull: {likes: req.body.userId} }); //pulls the request away from the like array of the post
            res.status(200).json("You disliked the post");
        }
    }catch(err) {
        res.status(500).json(err); // else error
    }
});

//GET A POST
router.get("/:id", async (req,res) => {
    try{
        const post = await Post.findById(req.params.id); // finding the post
        res.status(200).json(post); //parse json if successful
    }catch(err){
        res.status(500).json(err);
    }
});

//GET ALL POST OF USERS FOLLOWING (DASHBOARD/USER FEED) (READ POSTS/DATA)
router.get("/feed/all", async (req,res) => {
    // then fetch all of the posts using promises (there will be multiple promises)
        // A promise is an object. It represents the eventual completion of your asynchronous operation. 
        // An async function can return a promise, to which we can then attach .then , which essentially acts as an event listener for when the async function completes.
    try{
        const currentUser = await User.findById(req.body.userId); //finds the id of the current users and matches
        const userPosts = await Post.find({userId: currentUser._id }); //add all posts of the current user to the post array , the userId object is used to find all the posts of the user
        const friendPosts = await Promise.all(
            currentUser.following.map((friendId) => { //creating a new array for the current user following
                 return Post.find({userId:friendId}); //each friend id find post , returning each post
            }) 
        );
        res.json(userPosts.concat(...friendPosts)) // its going to take all of friend's post and concat with this post (merging the post arrays)
    }catch(err){
        res.status(500).json(err); // catches error 
        // console.log(err)
    }
});


module.exports = router;
