import React from 'react'
import {Button} from './ButtonElement2.js'
import Tilt from 'react-parallax-tilt';
import { Fade } from "react-awesome-reveal";
import { 
    PortfolioContainer,
    PortfolioWrapper, 
    Subtitle,
    TextWrapper,
    HeadText,
    ProjectGrid,
    Item1,
    Item2,
    Item3,
    // Item4,
    Img1,
    Img2,
    Img3,
    // Img4,
    Description,
    Title,
    Tag,
    ButtonGrp
} from './PortfolioStyle.js'

const Portfolio = () => {

    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
      }

    return (
        <>
            <PortfolioContainer id="portfolio">
                <PortfolioWrapper>
                    <TextWrapper>
                    <Fade direction="up" duration={1800}  triggerOnce={true}>
                        <HeadText>Portfolio <span></span></HeadText>
                    </Fade>
                    <Fade direction="up" duration={2000}  triggerOnce={true} delay={400}>
                        <Subtitle>Some of my recent works...</Subtitle>
                    </Fade>
                    </TextWrapper>
                    <ProjectGrid>
                    <Fade direction="left" duration={2000}  triggerOnce={true} delay={600}>
                        <Tilt>
                            <Item1>
                                <Img1/>
                                <Title>Covid-19 Tracker</Title>
                                <Description>
                                    <Tag>HTML</Tag>
                                    <Tag>SASS</Tag>
                                    <Tag>JAVASCRIPT</Tag>
                                    <Tag>PHP</Tag>
                                    <Tag>CHART JS</Tag>
                                    <Tag>API</Tag>
                                </Description>
                                <ButtonGrp>
                                    <Button onClick={() => openInNewTab('https://github.com/ManashJBofficial/covid19tracker')}>Github</Button>
                                    <Button onClick={() => openInNewTab('https://covid19trackermj.herokuapp.com')}>View Live</Button>
                                </ButtonGrp>                          
                            </Item1>
                        </Tilt>
                        </Fade>
                        <Fade direction="up"  duration={2000}  triggerOnce={true} delay={800}>
                        <Tilt>
                            <Item2>
                                <Img2/>
                                <Title>ReactJs Portfolio Website</Title>
                                <Description>
                                    <Tag>REACT JS</Tag>
                                    <Tag>STYLED COMPONENTS</Tag>
                                </Description>
                                <ButtonGrp>
                                    <Button onClick={() => openInNewTab('https://github.com/ManashJBofficial/react-portfolio')}>Github</Button>
                                    <Button>View Live</Button> 
                                </ButtonGrp> 
                            </Item2>
                        </Tilt>
                        </Fade>
                        <Fade direction="right" duration={2000}  triggerOnce={true} delay={1000}>
                        <Tilt>
                            <Item3>
                                <Img3/>
                                <Title>Online Crime Management System</Title>
                                <Description>
                                    <Tag>HTML</Tag>
                                    <Tag>CSS</Tag>
                                    <Tag>BOOTSTRAP</Tag>
                                    <Tag>PHP</Tag>
                                    <Tag>MYSQL</Tag>
                                </Description>
                                <ButtonGrp>
                                    <Button onClick={() => openInNewTab('https://github.com/ManashJBofficial/Online-Crime-Management-System-2.0')}>Github</Button>
                                </ButtonGrp> 
                            </Item3>
                        </Tilt>
                        </Fade>
                    </ProjectGrid>
                </PortfolioWrapper>
            </PortfolioContainer>
        </>
    )
}

export default Portfolio
