import React from 'react'
import About from './About/About'
import About2 from './About2.js/About2'
import Skills from './Skills/Skills'
import Contact from './Contact/Contact'
import Projects from "./Projects/Projects"
import './Body.css'

function Body() {
    return (
        <div className='main-body'>
            <div id="about-info">
                <About />
            </div>
            <div id="about-body">
                <About2 />
            </div>
            <div id="skills-body">
                <Skills />
            </div>
            <div id="projects-body">
                <Projects />
            </div>
            <div id="contact-body">
                <Contact />
            </div>
        </div>
    )
}

export default Body
