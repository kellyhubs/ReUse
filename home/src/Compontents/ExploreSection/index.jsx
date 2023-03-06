import React, {useState} from 'react'
import Icon1 from '/images/campingtools.jpg'
import Icon2 from '/images/gardeningtools.jpg'
import Icon3 from '/images/cleaningtools.png'
import { Button } from '../ButtonElement'
import { ExploreContainer, ExploreH1, ExploreWrapper, ExploreCard, ExploreIcon, ExploreH2 } from './ExploreElements'

export const Explore = (primary, dark) => {


    const [hover, setHover] = useState(false);
    // updating the state 
    
    const onHover = () => {
        setHover(!hover)
    }
    // when the mouse hovers, the state of the page changes (true) and changes the button
    



    return (
        <>
            <ExploreContainer id="explore">
                <ExploreH1>Explore the Rental Place</ExploreH1>
                <ExploreWrapper>
                    {/* card 1  */}
                    <ExploreCard>
                        <ExploreIcon src={Icon1}/>
                        <ExploreH2>Outdoor</ExploreH2>
                        <Button to="/market" onMouseEnter={onHover} onMouseLeave={onHover} primary={primary ? 1 : 0} dark={dark ? 0 : 1}>Rent Now</Button>
                    </ExploreCard>
                    {/* card 2 */}
                    <ExploreCard>
                        <ExploreIcon src={Icon2}/>
                        <ExploreH2>Gardening</ExploreH2>
                        <Button to="/market" onMouseEnter={onHover} onMouseLeave={onHover} primary={primary ? 1 : 0} dark={dark ? 0 : 1}>Rent Now</Button>
                    </ExploreCard>
                    {/* card 3 */}
                    <ExploreCard>
                        <ExploreIcon src={Icon3}/>
                        <ExploreH2>Cleaning</ExploreH2>
                        <Button to="/market" onMouseEnter={onHover} onMouseLeave={onHover} primary={primary ? 1 : 0} dark={dark ? 0 : 1}>Rent Now</Button>
                    </ExploreCard>
                </ExploreWrapper>
            </ExploreContainer>
        </>
    )
}

export default Explore;