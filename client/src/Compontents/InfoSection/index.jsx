import React from 'react'
import { Button } from '../ButtonElement'
import { InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle, BtnWrap, ImgWrap, Img } from './InfoElements';



// the section below the video , info elements 
const InfoSection = ({lightBg, id, imgStart, topLine, lightText, headline, darkText, description, buttonLabel, img, alt, primary, dark, dark2}) => {

// passing in the properties from data.jsx 
return (
    <>
        <InfoContainer lightBg={lightBg} id={id}>
            <InfoWrapper>
                <InfoRow imgStart={imgStart}>

                    <Column1>
                        <TextWrapper>
                            <TopLine>{topLine}</TopLine>
                            <Heading lightText={lightText}>{headline}</Heading>
                            <Subtitle darkText={darkText}>{description}</Subtitle>

                            <BtnWrap>
                                {/* attributes on the button is for react-scroll, spy is needed for the active class  */}
                                {/* primary attribute ->  1 = true, 0 = false */}
                                <Button to="home" smooth={true} duration={500} spy={true} offset={-80} primary={primary ? 1 : 0 } dark={dark ? 0: 1} dark2={dark2 ? 1:0}>{buttonLabel}</Button>
                            </BtnWrap>
                        </TextWrapper>

                    </Column1>
                    <Column2>
                        <ImgWrap>
                            <Img src={img} alt={alt}/>
                        </ImgWrap>
                    </Column2>
                </InfoRow>
            </InfoWrapper>
        </InfoContainer>
    </>
);
};

export default InfoSection;