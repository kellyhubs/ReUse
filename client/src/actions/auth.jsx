import * as api from '../api/index';

// auth routes 

// SIGN IN -> getting the data from the sign in or send the data to the database / backend to sign in the user 
export const signin = (formData, navigate) => async (dispatch) => {
    try{
        // log in the user 
        const { data } = await api.signIn(formData); //passing the form data with the api request 

        // writing a action to get data from the database and return to the front end 
        dispatch({ type: 'AUTH', data });

        navigate('/');  // navigate to the main page 
    } catch (error){
        console.log(error);
    }
};


// SIgn Up 
export const signup = (formData, navigate) => async (dispatch) => {
    try{
        // sign up the  user 
        const { data } = await api.signUp(formData); //passing the form data with the api request 

        dispatch({ type: 'AUTH', data }); //writing a aaction to get data from the database and retunr to the front end 


        navigate('/');  // navigate to the main page 
    } catch (error){
        console.log(error);
    }
};
