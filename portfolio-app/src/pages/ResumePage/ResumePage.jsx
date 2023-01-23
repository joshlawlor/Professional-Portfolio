import React from "react";
import "./ResumePage.css";
import { Link } from "react-router-dom";

import { Document, Page } from "react-pdf/dist/esm/entry.webpack5";
import resumePDF from "../../assets/files/resume.pdf"
import resume from "../../assets/images/resume1.jpg"
import linkedin from "../../assets/images/linkedin.png";
import github from "../../assets/images/githubicon.png";
import email from "../../assets/images/email.png";
import resumeIcon from "../../assets/images/resumeIcon.png"
import JS from "../../assets/images/JS.png";
import CSS from "../../assets/images/css.png";
import HTML from "../../assets/images/html.png";
import PYTHON from "../../assets/images/python.png";
import REACT from "../../assets/images/react.png";
import DJANGO from "../../assets/images/django.png";
import MONGO from "../../assets/images/mongo.png";
import SQL from "../../assets/images/sql.png";
import POSTMAN from "../../assets/images/postman.png";
import NODE from "../../assets/images/node.png";
import GIT from "../../assets/images/git.png";
import C from "../../assets/images/csharp.png";
import HEROKU from "../../assets/images/heroku.png";
import POWER from "../../assets/images/power.webp";
import EXPRESS from "../../assets/images/express.png";

function ResumePage() {
  return (
    <div className="resumeMain">
      <div className="sidebarMain">
        <a href="/">
          <li className="brandIconSide">JL</li>
        </a>

        <li className="icons">
        <a href="https://github.com/joshlawlor">
          <img src={github} alt="github" />
          </a>
        </li>
        <li className="icons">
        <a href="https://www.linkedin.com/in/joshuaryanlawlor/">
          <img src={linkedin} alt="linkedin" />
          </a>
        </li>
        <li className="icons">
        <a href="mailto:joshlawlor1@gmail.com">
          <img src={email} alt="email" />
          </a>
        </li>
      </div>
      <div className="displayBox">

        <div className="techMain">

          <div className="techTitle">
            <h4 className="">Front end tech skills</h4>
          </div>
          <div className="techBox">

            <div className="techItems">
              <li>
                <img className="resumeIcons" src={JS} alt="icon"></img>
              </li>
              <li>
                <img className="resumeIcons" src={CSS} alt="icon"></img>
              </li>
              <li>
                <img className="resumeIcons" src={HTML} alt="icon"></img>
              </li>
              <li>
                <img className="resumeIcons" src={REACT} alt="icon"></img>
              </li>
              <li>
                <img className="resumeIcons" src={GIT} alt="icon"></img>
              </li>
              <li>
                <img className="resumeIcons" src={HEROKU} alt="icon"></img>
              </li>
            </div>
          </div>

          <div className="techTitle">
            <h4 className="">Back end tech skills</h4>
          </div>
          <div className="techBox">
            <div className="techItems">
              <li>
                <img className="resumeIcons" src={NODE} alt="icon"></img>
              </li>
              <li>
                <img className="resumeIcons" src={EXPRESS} alt="icon"></img>
              </li>
              <li>
                <img className="resumeIcons" src={MONGO} alt="icon"></img>
              </li>
              <li>
                <img className="resumeIcons" src={SQL} alt="icon"></img>
              </li>
              <li>
                <img className="resumeIcons" src={POSTMAN} alt="icon"></img>
              </li>
            </div>
          </div>

          <div className="techTitle">
            <h4 className="">A few others...</h4>
          </div>
          <div className="techBox">
            <div className="techItems">
              <li>
                <img className="resumeIcons" src={NODE} alt="icon"></img>
              </li>
              <li>
                <img className="resumeIcons" src={EXPRESS} alt="icon"></img>
              </li>
              <li>
                <img className="resumeIcons" src={MONGO} alt="icon"></img>
              </li>
              <li>
                <img className="resumeIcons" src={SQL} alt="icon"></img>
              </li>
              <li>
                <img className="resumeIcons" src={POSTMAN} alt="icon"></img>
              </li>
              <li>
                <img className="resumeIcons" src={PYTHON} alt="icon"></img>
              </li>
              <li>
                <img className="resumeIcons" src={DJANGO} alt="icon"></img>
              </li>
              <li>
                <img className="resumeIcons" src={C} alt="icon"></img>
              </li>
              
              
            </div>
          </div>
        </div>
<div className="resumeBox">
    <h4 className="nintendo-font">Resume Download:     <Link to="public\files\JoshuaLawlorResume.pdf" target="_blank" download><img  className="downloadIcon" src={resumeIcon}></img></Link>
</h4>
    

      </div>
    
        
      </div>
      
    </div>
  );
}

export default ResumePage;
