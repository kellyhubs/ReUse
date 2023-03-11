// POST REQUESTS ROUTES
const router = require("express").Router();
const Post = require("../models/Post");

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
    res.status(500).json(err)
}
});

//LIKING A POST

//GET A POST
//GET ALL POST OF USERS FOLLOWING (DASHBOARD) (READ POSTS/DATA)




module.exports = router;