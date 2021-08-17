import React from 'react'

import './About.css'

function About() {
    return (
        <div className='about-main'>
            <div className="about-info">
                Hello I'm Johith John S Daniel 👋 .<br></br>
                Welcoming You To View My Portfolio  

            </div>
            <div className="about-img">
                <img  className='coding-img' src={require('../../../Assets/coding-img.png').default} alt="" />
            </div>

        </div>
    )
}

export default About
