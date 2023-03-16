// importing the middleware

import jwt from 'jsonwebtoken'

// middle ware has a 3rd arugment -> next -> meaning do something and move to next thing 
const auth = async (req, res, next) => {
    try{
        // checking to see if the user is the actually the user to do crud functions 
        const token = req.headers.authorization?.split(" ")[1];//grabbing only the token 
        const isCustomAuth = token.length < 500;  //our auth token 

        let decodedData; //the data to get from the token 

        // if we have the token and is our own then set the decoded data  -> getting the user id 
        if(token && isCustomAuth){
            decodedData = jwt.verify(token, 'test'); //get the data from each specific token and gives the user info 

            // with the decoded data -> know which user is logged in and which user is doing crud functions
            req.userId = decodedData?.id; //optional chaining
        } else {
            // if the taken is not ours -> second party google etc.. 
            decodedData = jwt.decode(token);

            req.userId = decodedData?.sub; //google specified id 
        }

        next(); //passing the action 

    } catch (error){
        console.log(error);
    }
};

export default auth;

// example of a process: 
// user wants to like a post -> click the like button -> auth middleware (NEXT) -> route of the like from the controller folder -> 