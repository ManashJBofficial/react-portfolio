import React from 'react'
import Download from '../DownloadButton/Download.js'
import Github from '../SocialIcons/Github.js'
import Linkedin from '../SocialIcons/Linkedin.js'
import Email from '../SocialIcons/Email.js';
import { Fade } from "react-awesome-reveal";
import { 
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink,
    SideBtnWrap,
    SocialLinks
} from './SidebarStyle.js'



const Sidebar = ({isOpen,toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <Fade direction="up" duration={1800} triggerOnce={true}>
                        <SidebarLink to="home" onClick={toggle} offset={0}>Home</SidebarLink>
                    </Fade>
                    <Fade direction="up" duration={1800} delay={200} triggerOnce={true}>
                        <SidebarLink to="about" onClick={toggle} offset={0}>About</SidebarLink>
                    </Fade>
                    <Fade direction="up" duration={1800} delay={400} triggerOnce={true}>
                        <SidebarLink to="portfolio" onClick={toggle} offset={0}>Portfolio</SidebarLink>
                    </Fade>
                    <Fade direction="up" duration={1800} delay={600} triggerOnce={true}>
                        <SidebarLink to="contact" onClick={toggle} offset={0}>Contact</SidebarLink>
                    </Fade>
                </SidebarMenu> 
                <Fade direction="up" duration={1800} delay={800} triggerOnce={true}>    
                <SideBtnWrap>                  
                        <Download/>
                </SideBtnWrap> 
                </Fade>
                <Fade direction="up" duration={1800} delay={1000} triggerOnce={true}>
                <SocialLinks>
                        <Linkedin/>
                        <Github/>
                        <Email/>
                    </SocialLinks> 
                    </Fade>  
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
