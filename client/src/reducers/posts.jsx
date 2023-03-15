// reducers is a function accepts the state and action


// based on the action type then it goes through the logic -> returning the state change or action that changes the state of the app
// instad of if..else statement -> use switch statement for multiple action changes 
// in reducers the state always need to be eqaul to something -> empty array [] is the inital value for the posts , the state we are changing is posts 

export default (posts = [], action) => {
    switch (action.type){
        case 'UPDATE':
            // returning the changed array
            // if post._id is = to the action.payload (updated post) then return the action.payload (newly updated post) else return just the post as it was before without the updates
            return posts.map((post) => (post._id === action.payload._id ? action.payload : post));
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            return  [...posts, action.payload];
        default:
            return posts;
    }
};


// using this function in index.jsx file 