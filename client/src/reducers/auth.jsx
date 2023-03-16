// reducers is a function accepts the state and action

// getting the profile and then setting it to the local storage 
const authReducer = (state = { authData: null }, action) => {
    switch (action.type){
        case 'AUTH':
            localStorage.setItem('profile', JSON.stringify({ ... action?.data })); // savin g data in the local storage

            return { ...state, authData: action?.data}; //not always get data back thats why its action?.data
        
        case 'LOGOUT':
            localStorage.clear();

            return { ...state, authData: null};
        default:
            return state;
    }
};

export default authReducer;