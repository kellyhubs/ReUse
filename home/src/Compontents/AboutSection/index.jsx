import React from 'react'
import { Button } from '../ButtonElement'
import { AboutContainer, AboutWrapper, InfoRow, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle, BtnWrap, ImgWrap, Img } from './AboutElements';



// the section below the video 
const AboutSection = ({lightBg, id, imgStart, topLine, lightText, headline, darkText, description, buttonLabel, img, alt}) => {

// passing in the properties from data.jsx 
return (
    <>
        <AboutContainer lightBg={lightBg} id={id}>
            <AboutWrapper>
                <InfoRow imgStart={imgStart}>

                    <Column1>
                        <TextWrapper>
                            <TopLine>{topLine}</TopLine>
                            <Heading lightText={lightText}>{headline}</Heading>
                            <Subtitle darkText={darkText}>{description}</Subtitle>

                            <BtnWrap>
                                <Button to="home">{buttonLabel}</Button>
                            </BtnWrap>
                        </TextWrapper>

                    </Column1>
                    <Column2>
                        <ImgWrap>
                            <Img src={img} alt={alt}/>
                        </ImgWrap>
                    </Column2>
                </InfoRow>
            </AboutWrapper>
        </AboutContainer>
    </>
);
};

export default AboutSection;