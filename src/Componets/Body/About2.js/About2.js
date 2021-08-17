import React from 'react'
import './About2.css'
import Div from '../../Common/Div'

function About2() {

    let data="I'm Johit John S Daniel . Graduated From CMS College Kottayam In Bachelor Of Computer Application . When It Comes To My  Personal skill I'm A Team Player And Quick Learner And My Techincal Skills Include Proficiency In Web Development And Posses Google's Certification As A Beginner In Data Analysis.  "

    return (
        <div className='about'>

            <Div />

            <div className="about-info-body">

            <div className="about-title">
                About
            </div>
            <div className="about-detail">
                {data}
            </div>

            </div>
            
           
        </div>
    )
}

export default About2
