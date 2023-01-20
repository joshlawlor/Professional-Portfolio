import React from "react";
import "./HomePage.css";
import { Link } from "react-router-dom";

import profile from "../../assets/images/profile.jpg";
import github from "../../assets/images/githubicon.png";
import linkedin from "../../assets/images/linkedin.png";
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

function HomePage() {
  return (
    <div className="homeMain">
      <div className="homeNav">
        <ul className="navbar">
          <li className="brandIcon">JL</li>
          <li className="navLinks">
            <Link>CONTACT</Link>
          </li>
          <li className="navLinks">
            <Link>RESUME</Link>
          </li>
          <li className="navLinks">
            <Link>PROJECTS</Link>
          </li>
          {/* <li className="navLinks">
            <Link>joshlawlor1@gmail.com</Link>
          </li> */}
        </ul>
      </div>

      <div className="aboutContainer">
        <div className="about">
          <div>
            <h1 className="aboutTitle">Joshua Lawlor</h1>
            <p className="proFont">Full-Stack Software Engineer</p>
          </div>

          <div className="proLinks">
            <li>
              <a href="https://github.com/joshlawlor">
                <img className="contactIcon" src={github} alt="icon"></img>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/joshuaryanlawlor/">
                <img className="contactIcon" src={linkedin} alt="icon"></img>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/joshuaryanlawlor/">
                <img className="contactIcon" src={email} alt="icon"></img>
              </a>
            </li>
          </div>

          <div className="bioBox">
            <div className="bioHeader">
              <p className="powershell">
                <img className="smallIcon" src={POWER} alt="icon"></img>Windows
                Powershell
              </p>
            </div>
            {/* <p>
              I am an aspiring Software Developer, with a background as a Data
              Specialist as well as Customer Service roles. I have always had a
              passion for Computer Science, when I was in high school I built my
              first personal computer! That computer has been through many
              modifications, and is still what I use today. I was inspired to
              start my journey as a Software Engineer when I came across some
              online coding challenges. I was surprised at how much fun I had
              doing them, but never expected to fall in love with it. I have put
              myself through the Software Engineering Immersive course with
              General Assembly, while working full time. This experience was
              definitely challenging but taught me patience and time management
            </p> */}
            <div className="bioTextBox">
            <p className="bioTitle">
              Copyright (C) 2015 Microsoft Corporation. All rights reserved.
            </p>

            <p className="bioText">I am a recent graduate in the field of software engineering and I
              am excited to start my career in the tech industry. I bring a
              diverse background of customer service and data specialist
              experience, which I believe will make me a valuable addition to
              any team. My skills include adapting to fast-paced work
              environments and excelling in group settings. My approach to
              problem-solving is to find the most effective and simplest
              solution possible, while always striving to improve and expand my
              skills as an engineer. I am seeking a company that values
              creativity and will provide me with the opportunity to grow and
              develop as an engineer. I am eager to contribute my talents and
              enthusiasm to a dynamic team and work on innovative projects.
            </p>
            </div>
            
          </div>
        </div>
        <div className="photo">
          <img src={profile} alt="profile" />
        </div>
      </div>

      <h2 className="nintendo-font">My Tech Stack</h2>

      <div className="skillsBox">
        <li>
          <img className="icon" src={JS} alt="icon"></img>
        </li>
        <li>
          <img className="icon" src={CSS} alt="icon"></img>
        </li>
        <li>
          <img className="icon" src={HTML} alt="icon"></img>
        </li>
        <li>
          <img className="icon" src={PYTHON} alt="icon"></img>
        </li>
        <li>
          <img className="icon" src={C} alt="icon"></img>
        </li>
        <li>
          <img className="icon" src={REACT} alt="icon"></img>
        </li>
        <li>
          <img className="icon" src={NODE} alt="icon"></img>
        </li>
        <li>
          <img className="icon" src={DJANGO} alt="icon"></img>
        </li>
        <li>
          <img className="icon" src={MONGO} alt="icon"></img>
        </li>
        <li>
          <img className="icon" src={SQL} alt="icon"></img>
        </li>
        <li>
          <img className="icon" src={POSTMAN} alt="icon"></img>
        </li>
        <li>
          <img className="icon" src={GIT} alt="icon"></img>
        </li>
        <li>
          <img className="icon" src={HEROKU} alt="icon"></img>
        </li>
      </div>
      <div className="projects"></div>
    </div>
  );
}

export default HomePage;
