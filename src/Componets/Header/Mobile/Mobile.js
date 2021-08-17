import React from 'react'
import './Mobile.css'

function Mobile({open,setopen}) {
    return (
        <div className='mobile'>

            <div className="back-icon"><i onClick={()=>setopen(!open)} className="fi-rr-angle-double-left back-icon"></i></div>
           
            <div className="mobile-options">

            <div className="mobile-option">
            <a href='#about-body'>About</a>
            </div>
            <div className="mobile-option">
            <a href='#skills-body'>Skills</a>
            </div>
            <div className="mobile-option">
            <a href='#projects-body'>Projects</a>
            </div>
            <div className="mobile-option">
            <a href='#contact-body'>Contact Me</a>
            </div>
            
            </div>
        </div>
    )
}

export default Mobile
