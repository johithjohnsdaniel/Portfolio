import React from 'react'
import './Projects.css'

function Section() {



    const data=[

        {
            project:'PORTFOLIO',
            about:" A Portfolio Website Developed Using React Js .   ",
            link:"https://github.com/johithjohnsdaniel/portfolio"

        },
        
        {
            project:'FREELANCER',
            about:" An Online Appication To Find Employee And Employer . Developed Using PHP And MYSQL As DataBase .  "
            ,link:"none"
        }
        ,
        {
            project:'NETFLIX CLONE',
            about:" Netflix Clone Using TMDb API . ONGOING PROJECT ."
            ,link:"none"
        }

    ]


    return (
        <div>

            {

                data.map((obj,index)=>{return(

                    <div key={index} className="project-body">
                    <div className="project-info">
                                <div className="project-title">
                                    {obj.project}
                                </div>
                                <div className="project-git">
                                    <div className="git-link">
                                    <a href={obj.link}>Git Hub</a>
                                    </div>
                                </div>
                    </div>
                    <div className="about-project">
                      {obj.about}
                    </div>

            </div>

                )})




            }

        </div>
    )
}

export default Section
