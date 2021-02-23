import React, { useState } from 'react'
import ProgressBar from "react-scroll-progress-bar";
import Sidebar from '../components/Sidebar/Sidebar'
import Navbar from '../components/Navbar/Navbar';
import HeroSection from '../components/HeroSection/Hero.js'
import SkillSection from '../components/SkillSection/Skill.js'
import PortfolioSection from '../components/PortfolioSection/Portfolio.js'
import ContactSection from '../components/ContactSection/Contact.js'
import Footer from '../components/Footer/Footer.js'
import { BrowserRouter as Router } from 'react-router-dom';


const Home = () => {

const  [isOpen,setIsOpen]  = useState(false)

const toggle = () =>{
    setIsOpen(!isOpen)
}
    return (
        <>
            <Router>    
                <ProgressBar bgcolor="#FF500A"></ProgressBar>                   
                <Sidebar isOpen={isOpen}  toggle={toggle} />
                <Navbar toggle={toggle} />
                <HeroSection />  
                <SkillSection /> 
                <PortfolioSection/>
                <ContactSection />   
                <Footer />      
            </Router>
        </>
    )
}

export default Home
