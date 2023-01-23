import React from "react";
import "./ResumePage.css";

import linkedin from "../../assets/images/linkedin.png";
import github from "../../assets/images/githubicon.png";
import email from "../../assets/images/email.png";

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
          <img src={github} alt="linkedin" />
        </li>
        <li className="icons">
          <img src={linkedin} alt="linkedin" />
        </li>
        <li className="icons">
          <img src={email} alt="linkedin" />
        </li>
      </div>
      <div className="displayBox">
        <div className="techMain">
          <div className="techTitle">
            <h1 className="proFont">Front end tech skills</h1>
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
        </div>

        <div className="experienceMain">
          <div className="experienceTitle">
            <h1 className="proFont">Back end tech skills</h1>
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
        </div>
      </div>
    </div>
  );
}

export default ResumePage;
