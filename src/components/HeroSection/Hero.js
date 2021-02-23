import React, { useState } from 'react'
import { Fade } from "react-awesome-reveal";

import { 
    HeroContainer,
    HeroBg,
    HeroContent,
    HeroH1,
    HeroP,
    HeroBtnWrapper,
    ArrowForward,
    ArrowRight
} from './HeroStyle.js'
import { Button } from '../ButtonElement.js'

const Hero = () => {
const [hover,setHover] = useState(false);

const onHover = () => {
    setHover(!hover)
}



    return (
        <>
        <HeroContainer id="home">
            <HeroBg></HeroBg>
            <HeroContent>           
                <Fade direction="up" duration={1800} triggerOnce={true} delay={1200}>
                <HeroH1>Manash Jyoti Baruah</HeroH1>
                </Fade>
                <Fade direction="up" duration={1800} triggerOnce={true} delay={1500}>
                <HeroP>I'm a Full-Stack Web Developer with MCA Degree based in</HeroP>
                <HeroP> Guwahati, Assam, India</HeroP>
                </Fade>
                
            </HeroContent>
            <Fade  direction="up" duration={1800} triggerOnce={true} delay={1500}>
                <HeroBtnWrapper>
                    <Button to='contact' onMouseEnter={onHover} onMouseLeave={onHover} 
                    smooth={true} duration={500} spy={true} offset={0}>
                        Let's Chat !
                        {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
                </Fade>
        </HeroContainer>
        
        </>
        
    )
}

export default Hero
