import React from 'react'
import {MdEmail} from 'react-icons/md'
import {SocialIcon} from './SocialIconStyles.js'

const Social = () => {
    return (
        <SocialIcon>
            <a className="socialLinks" href="mailto:manashjbwork@gmail.com" target="_blank" rel="noreferrer"><MdEmail/></a>
        </SocialIcon>
    )
}

export default Social
