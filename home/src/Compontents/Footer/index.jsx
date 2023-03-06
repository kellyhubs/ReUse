import React from 'react'
import { FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink, Subtitle } from './FooterElements';

function Footer() {
return (
    <>
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>

                    {/* spacing around the links */}
                    <FooterLinksWrapper>
                        {/* Footer items */}
                        <FooterLinkItems>
                            <FooterLinkTitle>Links</FooterLinkTitle>
                            <FooterLink to="/">Home</FooterLink>
                                <FooterLink to="/">About</FooterLink>
                                <FooterLink to="/">Discover</FooterLink>
                                <FooterLink to="/">Explore</FooterLink>
                                <FooterLink to="/signup">Sign Up</FooterLink>
                                <FooterLink to="/signin">Sign In</FooterLink>
                        </FooterLinkItems>

                        <FooterLinkItems>
                            <FooterLinkTitle>Contact Us</FooterLinkTitle>
                            <Subtitle>1234 DoggyHorse Dr.  
                                Katsu City, Texas 
                                &nbsp;
                                &nbsp;
                                Call Us: +1 123-456-7899
                            </Subtitle>
                        </FooterLinkItems>
                    </FooterLinksWrapper>

                </FooterLinksContainer>
            </FooterWrap>
        </FooterContainer>
    </>
)
}

export default Footer;