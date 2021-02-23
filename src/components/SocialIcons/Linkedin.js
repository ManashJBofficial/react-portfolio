import React from 'react'
import {FaLinkedinIn} from 'react-icons/fa'
import {SocialIcon} from './SocialIconStyles.js'

const Linkedin = () => {
    return (
        <SocialIcon>
            <a className="socialLinks" href="https://www.linkedin.com/in/manashjb" target="_blank" rel="noreferrer"><FaLinkedinIn/></a>
        </SocialIcon>
    )
}

export default Linkedin
