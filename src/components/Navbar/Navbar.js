import React, {useState,useEffect} from 'react'
import {FaBars} from 'react-icons/fa'
import {animateScroll as scroll} from 'react-scroll'
import Download from '../DownloadButton/Download.js';
import Github from '../SocialIcons/Github.js'
import Linkedin from '../SocialIcons/Linkedin.js'
import Email from '../SocialIcons/Email.js';
import { Fade } from "react-awesome-reveal";

import { 
    Nav,
    NavbarContainer,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks
} from './NavbarStyle.js'


const toggleHome = () => {
    scroll.scrollToTop();
}



const Navbar = ({toggle}) => {

    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () => {
        if(window.scrollY >=80) {
            setScrollNav(true)
        }
        else {
            setScrollNav(false)
        }
    }
    useEffect(()=> {
        window.addEventListener('scroll',changeNav)
    }, [])

    return (
        <>
        
        <Nav scrollNav={scrollNav}>
       
            <NavbarContainer>
                <NavLogo to='/' onClick={toggleHome}>Manash</NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>
                
                <NavMenu>
                    <Fade duration="2000" triggerOnce={true}>
                    <NavItem>
                        <NavLinks to='home' smooth={true} duration={500} spy={true} offset={0}  >Home</NavLinks>
                    </NavItem>
                    </Fade>
                    <Fade delay={200} duration="2000" triggerOnce={true}>
                    <NavItem>
                        <NavLinks to='about' smooth={true} duration={500} spy={true} offset={0} >About</NavLinks>
                    </NavItem>
                    </Fade>
                    <Fade delay={400} duration="2000" triggerOnce={true}>
                    <NavItem>  
                        <NavLinks to='portfolio' smooth={true} duration={500} spy={true} offset={0} >Portfolio</NavLinks>
                    </NavItem>
                    </Fade>
                    <Fade delay={600} duration="2000" triggerOnce={true}>
                    <NavItem>
                        <NavLinks to='contact' smooth={true} duration={500} spy={true} offset={0} >Contact</NavLinks>
                    </NavItem>
                    </Fade>
                </NavMenu>
                
                <NavMenu >
                <Fade delay={800} duration="2000" triggerOnce={true}>
                    <NavItem className="socialMenus">                                              
                        <Linkedin/>
                    </NavItem>
                    <NavItem className="socialMenus">                       
                        <Github/>
                    </NavItem>    
                    <NavItem className="socialMenus">
                        <Email/>
                    </NavItem>
                </Fade> 
                    <Fade delay={1000} duration="2000" triggerOnce={true}>
                    <NavItem>
                        <Download/>
                    </NavItem>  
                    </Fade>                               
                </NavMenu>   
                
            </NavbarContainer>
        </Nav>
        </>
    )
}

export default Navbar
