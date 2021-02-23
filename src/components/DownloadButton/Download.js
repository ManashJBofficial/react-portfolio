import React from 'react'
import {FaDownload} from 'react-icons/fa'
import {Abtn} from './DownloadStyle.js'
import Resume from '../../downloadable/resume.pdf'

const Download = () => {
    return (
        <Abtn>
            <a className="download-btn" href={Resume} download>
                            <FaDownload/>
                            &ensp;Resume
            </a>  
        </Abtn>
    )
}

export default Download
