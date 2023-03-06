import styled from 'styled-components';

// styling the explore container
export const ExploreContainer = styled.div`
    height: 800px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    background: #FFFBF2;

    @media screen and (max-width: 768px){
        height: 1100px;
    }

    @media screen and (max-width: 480px){
        height: 1300px;
    }
`;

// styling the spacing of the container -> making the grid
export const ExploreWrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: grid; 
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 16px;
    padding: 0 50px;

    @media screen and (max-width: 1000px){
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 768px){
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`;

// styling the card
export const ExploreCard = styled.div`
    background: #FFF;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    max-height: 340px;
    padding: 30px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;

    &:hover{
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor:pointer;
    }
`;

// styling the image in the card
export const ExploreIcon = styled.img`
    height: 160px;
    width: 160px;
    margin-bottom: 10px;
`;

// styling the H1 
export const ExploreH1 = styled.h1`
    font-size: 2.5rem;
    color:#9FACA3;
    margin-bottom: 64px;

    @media screen and (max-width: 480px){
        font-size: 2rem;
    }
`;

// styling the H2
export const ExploreH2 = styled.h2`
    font-size: 1rem;
    margin-bottom: 10px;
    color:#636363;
`;