import React from 'react'
import { Container, FormWrap, Icon, FormContent, Form, FormH1, FormLabel, FormInput, FormButton, Text } from './SigninElements';


const SignIn = () => {
    return(
        <>
            <Container>
                <FormWrap>
                    <Icon to="/">ReUse &nbsp; <i className="fa-solid fa-hand-holding-hand"></i></Icon>
                    <FormContent>
                        {/* actual form */}
                        <Form action="#">
                            <FormH1>Sign In to your Account</FormH1>
                            <FormLabel htmlFor='for'>Email</FormLabel>
                                <FormInput type='email' required />

                                <FormLabel htmlFor='for'>Password</FormLabel>
                                <FormInput type='password' required />
                                <FormButton type='submit' to="/feed">Login</FormButton>
                                <Text>Forgot Password</Text>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
        </>
    );
};

export default SignIn;