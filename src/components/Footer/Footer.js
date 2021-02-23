import React from 'react'
import Email from '../SocialIcons/Email'
import Github from '../SocialIcons/Github'
import Linkedin from '../SocialIcons/Linkedin'
import {
    FooterContainer,
    FooterWrapper,
    Logo,
    FooterGrid,
    SocialIcons,
    Sitemap,
    SiteLink,
    CopyRight
} from './FooterStyle.js'

const Footer = () => {
    return (
        <>
            <FooterContainer>
                <FooterWrapper>
                    <Logo>Manash</Logo>
                    <FooterGrid>
                        <SocialIcons>
                            <Linkedin/>
                            <Github/>
                            <Email/>
                        </SocialIcons>
                        <Sitemap>
                            <SiteLink to='home' smooth={true} duration={500} spy={true} offset={0}  >Home</SiteLink>
                            <SiteLink to='about' smooth={true} duration={500} spy={true} offset={0}  >About</SiteLink>
                            <SiteLink to='portfolio' smooth={true} duration={500} spy={true} offset={0}  >Portfolio</SiteLink>
                            <SiteLink to='contact' smooth={true} duration={500} spy={true} offset={0}  >Contact</SiteLink>
                        </Sitemap>
                    </FooterGrid>
                </FooterWrapper>
            </FooterContainer>
            <CopyRight>Designed & Built by Manash Jyoti Baruah &copy; 2021</CopyRight>
        </>
    )
}

export default Footer
