import React from "react";
import './ProjectPage.css'

import linkedin from '../../assets/images/linkedin.png'
import github from "../../assets/images/githubicon.png";
import email from "../../assets/images/email.png";


function ProjectPage() {


    return(
        <div className="projectMain">

            <div className="sidebarMain">

                <li className="icon"><img src={linkedin} alt="linkedin" /></li>
            </div>
            
            <div className="galleryMain">
                <div className="titleOne">
                <h1>Web Applications:</h1>

                </div>

                <div className="galleryOne">

                    <div className="project"> 
                        <h1>P1</h1>
                    </div>
                    <div className="project">
                        <h1>P2</h1>
                    </div>

                </div>

                <div className="titleTwo">
               

                </div>

                <div className="galleryTwo">

                <div className="projectThree"> 
                        <h1>P3</h1>
                    </div>
                    <div className="projectFour">
                        <h1>P4</h1>
                    </div>

                </div>

            </div>















            </div>
    )
}

export default ProjectPage