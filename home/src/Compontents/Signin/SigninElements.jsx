import styled from 'styled-components'
import { Link } from 'react-router-dom'

// styling of the sign in container
export const Container = styled.div`
    min-height: 692px;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    z-index: 0;
    overflow: hidden;
    background: linear-gradient(108deg, rgba(203, 210, 202,1) 0%, rgba(215, 227, 213,1) 100%);


`;

// sstyling the spacing 
export const FormWrap = styled.div`
    height: 100%;
    fisplay: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width: 400px){
        height: 80%;
    }
`;

// styling icon
export const Icon = styled(Link)`
    margin-left: 32px;
    margin-top: 32px;
    text-decoration: none;
    color: #C98477;
    font-weight: 700;
    font-size: 32px;

    @media screen and (max-width: 480px){
        margin-left: 16px;
        margin-top: 8px;
    }
`;

// spacing of the form content
export const FormContent = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column; 
    justify-content: center;

    @media screen and (max-width: 480px){
        padding: 10px;
    }
`;

// styling the form
export const Form = styled.form`
    background: #F6F1E7;
    max-width: 400px;
    height: auto;
    width: 100%;
    z-index: 1;
    display: grid;
    margin: 0 auto;
    padding: 80px 32px;
    border-radius: 4px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.9);

    @media screen and (max-width: 400px){
        padding: 32px 32px;
    }
`;

// styling the text
export const FormH1 = styled.h1`
    margin-bottom: 40px;
    color: #636363;
    font-size: 20px;
    font-weight: 400;
    text-align: center;
`; 

export const FormLabel = styled.label`
    margin-bottom: 8px;
    font-size: 14px;
    color: #636363;
`;

export const FormInput = styled.input`
    padding: 16px 16px;
    margin-bottom: 32px;
    border: none;
    border-radius: 4px;
`;

// styling button
export const FormButton = styled.button`
    background: #C98477;
    padding: 16px 0;
    border: none;
    border-radius: 4px;
    color: #fffbf2;
    font-size: 20px;
    cursor: pointer;
`;

// styling the text of the button 
export const Text = styled.span`
    text-align: center;
    margin-top: 24px;
    color:  #636363;
    font-size: 14px;
`;

