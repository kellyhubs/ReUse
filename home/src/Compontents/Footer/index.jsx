import React from 'react'
import {FaFacebook, FaInstagram, FaGoogle, FaTwitter} from 'react-icons/fa'
import { FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink, Subtitle, SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights, SocialIcons, SocialIconLink } from './FooterElements';

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
                {/* social media icons/ credits */}
                <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to="/">
                        ReUse
                    </SocialLogo>
                    <WebsiteRights>ReUse © {new Date().getFullYear()} 
                    &nbsp; All rights reserved.
                    </WebsiteRights> 
                    <SocialIcons>
                        {/* this is href/<a> because it's not a react router  */}
                        {/* target blank opens up the webpage in a new tab */}
                        <SocialIconLink href="//www.facebook.com" target="_blank" aria-label="Facebook">
                            <FaFacebook />
                        </SocialIconLink>

                        <SocialIconLink href="//wwww.instagram.com" target="_blank" aria-label="Instagram">
                            <FaInstagram /> 
                        </SocialIconLink>

                        <SocialIconLink href="//www.gmail.com" target="_blank" aria-label="Google">
                            <FaGoogle /> 
                        </SocialIconLink>
                        <SocialIconLink href="//www.twitter.com" target="_blank" aria-label="Twitter">
                            <FaTwitter /> 
                        </SocialIconLink>

                    </SocialIcons>
                </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    </>
)
}

export default Footer;