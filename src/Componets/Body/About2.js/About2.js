import React from 'react'
import './About2.css'
import Div from '../../Common/Div'

function About2() {

    let data="I'm Johit John S Daniel . 21  Years Old Bachelor Of Computer Application Graduate From C M S College Kottayam . When It Comes To My  Personal skill I'm A Team Player And Quick Learner And My Techincal Skills Include Proficiency Web Development And Posses Certification From Google As A Beginner Data Analyst  "

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
