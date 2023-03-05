import React from 'react'
import { Button } from 'react-scroll'
import { AboutContainer, AboutWrapper, InfoRow, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle, BtnWrap, ImgWrap, Img } from './AboutElements';



// the section below the video 
const AboutSection = () => {


return (
    <>
        <AboutContainer>
            <AboutWrapper>
                <InfoRow>

                    <Column1>
                        <TextWrapper>
                            <TopLine>TopLine</TopLine>
                            <Heading>Heading</Heading>
                            <Subtitle>Subtitle</Subtitle>

                            <BtnWrap>
                                <Button to="home" />
                            </BtnWrap>
                        </TextWrapper>

                    </Column1>
                    <Column2>
                        <ImgWrap>
                            <Img />
                        </ImgWrap>
                    </Column2>
                </InfoRow>
            </AboutWrapper>
        </AboutContainer>
    </>
);
};

export default AboutSection;