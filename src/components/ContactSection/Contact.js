import React from 'react'
import { Fade } from "react-awesome-reveal";
import Form from './Form.js';

import {
    ContactContainer,
    ContactWrapper,
    TextWrapper,
    HeadText,
    Subtitle,
    FormWrapper,
    LeftSide,
    RightSide,
    BannerImg
    
} from './ContactStyle.js'
 
const Contact = () => {

    

    return (
        <>
        <ContactContainer id="contact">
            <ContactWrapper>
                <TextWrapper>
                <Fade direction="up" duration={1800} triggerOnce={true}>
                    <HeadText>Contact <span></span></HeadText>
                </Fade>
                <Fade direction="up" duration={2000} triggerOnce={true} delay={200}>
                    <Subtitle>If you want to contact me, kindly fill up the form or you can mail me at: &ensp;
                    <a className="contact-link" href="mailto:manashjbwork@gmail.com">manashjbwork@gmail.com</a>
                    </Subtitle>
                </Fade>    
                </TextWrapper>
                <Fade direction="up" duration={2000} triggerOnce={true} delay={400}>
                <FormWrapper>
                    <LeftSide>
                        <BannerImg />
                    </LeftSide>
                    <RightSide>
                        <Form />
                    </RightSide>
                </FormWrapper>
                </Fade>
            </ContactWrapper>
        </ContactContainer>
            
        </>
    )
}

export default Contact
