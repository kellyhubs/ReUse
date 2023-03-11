// authenication for users

const router = require("express").Router(); //routes 
const User = require("../models/User"); // import data
const bcrypt = require("bcrypt") // allow us to change password and hides password

//  Register Users

// checking to see if the data is connected and server works

// router.get('/register', async (req, res) => {
// try{
//     const user = await new User({
//         username: "kelly",
//         email: "kelly@gmail.com",
//         password: "katsu"
//     }) 
// // plugging in data -> aysnc function 
//     await user.save();
//     res.send("ok")
// }catch(error){
//     console.log(error)
// }
// });

// avoid duplication error using try/catch  -> happens because of {unique: true } in the model schema 

// Register / sign up
router.post('/register', async (req,res) => {
// using try/catch block will catch errors similar to fetch 
    try{
        // Generate new password 
        const salt = await bcrypt.genSalt(10); //can change the pass
        const hashedPassword = await bcrypt.hash(req.body.password, salt)  //hidden the password info 

        // create new user 
        const newUser = new User({
            username:req.body.username,
            email: req.body.email,
            password: hashedPassword,
        });

        // save user and return response 
        const user = await newUser.save();
        res.status(200).json(user); // if successful -> send json data else catch errors
    } catch(err){
        res.status(500).json(err)
        // console.log(err)
    }
});


// Login user
router.post("/login",  async (req,res) =>{
try{
    const user = await User.findOne({email: req.body.email}); //grabbing the user's email 
    !user && res.status(404).send("User not found") //if the email in the database not found -> send user not found 

    // checking the password in the database
    const validPassword = await bcrypt.compare(req.body.password, user.password) //comparing the password from req.body with the password in the database 
    !validPassword && res.status(404).json("Invalid password") //not the same password -> send error that password not found

    res.status(200).json(user) //if everything is correct -> send status of 200 and data back to server
} catch (err){
    res.status(500).json(err)
    // console.log(err) //catch error
}
});

module.exports = router;