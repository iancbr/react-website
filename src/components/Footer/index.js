import React from 'react'
import {
    FaFacebook,
    FaInstagram, 
    FaTwitter, 
    FaYoutube
} from 'react-icons/fa'
import { 
    FooterContainer,
    FooterWrap,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkItems,
    FooterLinkTitlte,
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    WebsiteRights,
    SocialIcons,
    SocialIconLink
} from './FooterElements'

const Footer = () => {
  return (
    <FooterContainer>
        <FooterWrap>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitlte>About Us</FooterLinkTitlte>
                        <FooterLink to="/signin">How it works</FooterLink>
                        <FooterLink to="/signin">Testimonials</FooterLink>
                        <FooterLink to="/signin">Careers</FooterLink>
                        <FooterLink to="/signin">Investors</FooterLink>
                        <FooterLink to="/signin">Terms of Service</FooterLink>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitlte>About Us</FooterLinkTitlte>
                        <FooterLink to="/signin">How it works</FooterLink>
                        <FooterLink to="/signin">Testimonials</FooterLink>
                        <FooterLink to="/signin">Careers</FooterLink>
                        <FooterLink to="/signin">Investors</FooterLink>
                        <FooterLink to="/signin">Terms of Service</FooterLink>
                    </FooterLinkItems>
                </FooterLinksWrapper>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitlte>About Us</FooterLinkTitlte>
                        <FooterLink to="/signin">How it works</FooterLink>
                        <FooterLink to="/signin">Testimonials</FooterLink>
                        <FooterLink to="/signin">Careers</FooterLink>
                        <FooterLink to="/signin">Investors</FooterLink>
                        <FooterLink to="/signin">Terms of Service</FooterLink>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitlte>About Us</FooterLinkTitlte>
                        <FooterLink to="/signin">How it works</FooterLink>
                        <FooterLink to="/signin">Testimonials</FooterLink>
                        <FooterLink to="/signin">Careers</FooterLink>
                        <FooterLink to="/signin">Investors</FooterLink>
                        <FooterLink to="/signin">Terms of Service</FooterLink>
                    </FooterLinkItems>
                </FooterLinksWrapper>
            </FooterLinksContainer>
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to='/'>
                        dolla
                    </SocialLogo>
                    <WebsiteRights>dolla © {new Date().getFullYear()} All rights reserved</WebsiteRights>
                    <SocialIcons>
                        <SocialIconLink href="/" target="_blank" 
                        aria-label="Facebook">
                            <FaFacebook />
                        </SocialIconLink>
                        <SocialIconLink href="/" target="_blank" 
                        aria-label="Instagram">
                            <FaInstagram />
                        </SocialIconLink>
                        <SocialIconLink href="/" target="_blank" 
                        aria-label="Twitter">
                            <FaTwitter />
                        </SocialIconLink>
                        <SocialIconLink href="/" target="_blank" 
                        aria-label="Youtube">
                            <FaYoutube />
                        </SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterWrap>
    </FooterContainer>
  )
}

export default Footer