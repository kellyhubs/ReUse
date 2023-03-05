import React from 'react'
import Video from '../../videos/video.mp4'
import { FirstContainer, FirstBg, VideoBg} from './FirstElements'

const FirstSection = () => {
return (
    <FirstContainer id='home'>
        <FirstBg>
            {/* inserting a video that loops in the background */}
            <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
        </FirstBg>
    </FirstContainer>
);
}

export default FirstSection;