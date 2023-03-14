// reducers is a function accepts the state and action


// based on the action type then it goes through the logic -> returning the state change or action that changes the state of the app
// instad of if..else statement -> use switch statement for multiple action changes 
// in reducers the state always need to be eqaul to something -> empty array [] is the inital value for the posts , the state we are changing is posts 

export default (posts = [], action) => {
    switch (action.type){
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            return  [...posts, action.payload];
        default:
            return posts;
    }
}


// using this function in index.jsx file 