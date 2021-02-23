import React from 'react'
import {SkillConatiner,SkillGrid,SkillHead,SkillH,SkillP,SkillWrapper,SkillGroup,SkillText,SkillIcon,SkillPgrp} from './SkillStyle.js'
import {AiFillHtml5} from 'react-icons/ai';
import {IoLogoCss3} from 'react-icons/io';
import {DiJavascript1,DiNodejs,DiPhp} from 'react-icons/di';
import {FaReact,FaSass} from 'react-icons/fa';
import {SiMysql,SiGnubash} from 'react-icons/si'
import {ImGit} from 'react-icons/im'
import { Fade } from "react-awesome-reveal";


const SkillSection = () => {
    return (
        <>
        <SkillConatiner id="about">
            <SkillWrapper>
                <SkillHead>
                <Fade direction="up" duration={1800}  triggerOnce={true}>
                    <SkillH>About <span></span></SkillH>
                </Fade>
                <Fade direction="up" duration={1800}  delay={200} triggerOnce={true}>
                    <SkillPgrp>
                    <SkillP>Hello! I am Manash, a Web Developer based in Guwahati, Assam, India.</SkillP>
                    <SkillP>I have completed my Master of Computer Application (MCA) Degree from &nbsp;
                    <span><a href="https://www.dbuniversity.ac.in/" target="_blank" rel="noreferrer">Assam Don Bosco University.</a></span></SkillP>
                    <SkillP>I am always passionate about creating new things in Web-Dev field.</SkillP>
                    <SkillP>My goal is to always build products that provide efficient, optimized and performant experiences. </SkillP>
                    <SkillP>Here are a few technologies I've been working with recently:</SkillP>
                    </SkillPgrp>
                </Fade>
                </SkillHead>
                <Fade  direction="up" duration={1800}  delay={600} triggerOnce={true}>
                <SkillGrid> 
                    <SkillGroup>
                        <SkillIcon>
                            <AiFillHtml5/>
                        </SkillIcon>                        
                        <SkillText>HTML</SkillText>
                    </SkillGroup>
                    <SkillGroup>
                        <SkillIcon>
                            <IoLogoCss3/>
                        </SkillIcon>
                        <SkillText>CSS</SkillText>
                    </SkillGroup>  
                    <SkillGroup>
                        <SkillIcon>
                            <FaSass/>
                        </SkillIcon>
                        <SkillText>Sass</SkillText>
                    </SkillGroup> 
                    <SkillGroup>
                        <SkillIcon>
                            <DiJavascript1/>  
                        </SkillIcon>
                        <SkillText>Javascript</SkillText>    
                    </SkillGroup> 
                    <SkillGroup>
                        <SkillIcon>
                            <FaReact/> 
                        </SkillIcon>
                        <SkillText>ReactJs</SkillText>   
                    </SkillGroup> 
                    <SkillGroup>
                        <SkillIcon>
                            <DiNodejs/> 
                        </SkillIcon>
                        <SkillText>NodeJs</SkillText>   
                    </SkillGroup> 
                    <SkillGroup>
                    <SkillIcon><DiPhp/> </SkillIcon>
                        <SkillText>Core Php</SkillText> 
                    </SkillGroup> 
                    <SkillGroup>
                        <SkillIcon>
                            <SiMysql/>
                        </SkillIcon> 
                        <SkillText>MySql</SkillText>   
                    </SkillGroup> 
                    <SkillGroup>
                        <SkillIcon>
                            <ImGit/>
                        </SkillIcon>
                        <SkillText>Git</SkillText>
                    </SkillGroup>                                      
                    {/* <SkillGroup>
                        <SkillIcon>
                            <FaGithub/> 
                        </SkillIcon>
                        <SkillText>Github</SkillText>
                    </SkillGroup> */}
                    <SkillGroup>
                        <SkillIcon>
                            <SiGnubash/>
                        </SkillIcon>
                        <SkillText>Bash</SkillText>
                    </SkillGroup>                        
                </SkillGrid>
                </Fade>
            </SkillWrapper>
        </SkillConatiner>   
        </>
    )
}

export default SkillSection
