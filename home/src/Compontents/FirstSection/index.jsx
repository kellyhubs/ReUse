import React, {useState} from 'react'
import Video from '../../videos/video.mp4'
import { FirstContainer, FirstBg, VideoBg, FirstContent, FirstH1, FirstP, FirstBtnWrapper, ArrowForward, ArrowRight } from './FirstElements'
import {Button} from '../ButtonElement' // importing button from components 

const FirstSection = () => {

const [hover, setHover] = useState(false);
// updating the state 

const onHover = () => {
    setHover(!hover)
}
// when the mouse hovers, the state of the page changes (true) and changes the button



return (
    <FirstContainer id='home'>
        <FirstBg>
            {/* inserting a video that loops in the background */}
            <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
        </FirstBg>


{/* text on the video */}
        <FirstContent>
        <FirstH1>Building a Sustainable Future with ReUse</FirstH1>
        <FirstP>
        Sign up for a new account today and make the change for a better lifestyle! 
        </FirstP>

        {/* button */}
        <FirstBtnWrapper>
        <Button to='signup' onMouseEnter={onHover} onMouseLeave={onHover}>
            {/* Changes the icon of the arrow in the button (animation), when the mouse hovers the button the arrow icon toggles */}
            Get Started{hover ? <ArrowForward /> : <ArrowRight /> }
        </Button>
        </FirstBtnWrapper>

        </FirstContent>
    </FirstContainer>
);
}

export default FirstSection;