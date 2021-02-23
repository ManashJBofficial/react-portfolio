import React from 'react'
import {FaGithub} from 'react-icons/fa'
import {SocialIcon} from './SocialIconStyles.js'

const Social = () => {
    return (
        <SocialIcon>
            <a className="socialLinks" href="https://github.com/ManashJBofficial" target="_blank" rel="noreferrer"><FaGithub/></a>
        </SocialIcon>
    )
}

export default Social
