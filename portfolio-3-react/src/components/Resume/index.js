import React from "react";
import photo from '../../assets/downloads/Resume.pdf'

function Resume() {
    return(
        <a className='right' href={photo} id='resume'>Resume</a>
    )
}

export default Resume;