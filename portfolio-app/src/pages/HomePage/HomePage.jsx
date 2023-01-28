import React from "react";
import "./HomePage.css";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";

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
import cloudTitle from "../../assets/images/cloudTitle.png";

import { LazyLoadComponent } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function HomePage() {
  var bio = document.getElementById("bioTextBox");

  const typewriter = new Typewriter(bio, {
    delay: 50,
    hideCursorAfterText: true
  });
  return (
    <div className="aboutContainer">

      <LazyLoadComponent>
        
      
      <div className="about">
        {/* <div className="cloud">
            <img className="cloudTitle" src={cloudTitle}></img>
          </div> */}
        <div>
          <h1 className="aboutTitle">Joshua Lawlor</h1>
          <p className="proFont">
            <Typewriter
              options={{
                delay: 50,
                loop: true
              }}
              onInit={(typewriter) => {
                typewriter.pauseFor('1000').typeString("Full-Stack Software Engineer").pauseFor('500').deleteAll()
                .typeString('Adaptable, Creative, Curious').pauseFor('500').deleteAll()
                .typeString("Let's improve and grow together!").pauseFor('800')
                .start();
              }}
            />
          </p>
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
            <a href="mailto:joshlawlor1@gmail.com">
              <img className="contactIcon" src={email} alt="email" />
            </a>
          </li>
        </div>
        {/* <p className="nintendo-font">
            <Typewriter
            options={{
              delay: 40
            }}
            onInit={(typewriter) => {
              typewriter.typeString(`PS C:/User/ I am a recent graduate in the field of software engineering and I am excited to start my career in the tech industry. 
              I bring a diverse background of customer service and data specialist experience, which I believe will make me a valuable addition to any team.
              My skills include adapting to fast-paced work environments and excelling in group settings. My approach to problem-solving is to find the most effective 
              and simplest solution possible, while always striving to improve and expand my skills as an engineer. I am seeking a company that value creativity and will 
              provide me with the opportunity to grow and develop as an engineer. I am eager to contribute my talents andenthusiasm to a dynamic team and work on innovative projects`)
              .pauseFor().start();
            }}/>
            </p> */}
        {/* 
          <div className="bioBox">
            <div className="bioHeader">
              <p className="powershell">
                <img className="smallIcon" src={POWER} alt="icon"></img>Windows
                Powershell
              </p>
            </div>
            <div className="bioTextBox">
            <p className="bioTitle">
              Copyright (C) 2015 Microsoft Corporation. All rights reserved.
            </p>
            <p>
            <Typewriter
            options={{
              delay: 40
            }}
            onInit={(typewriter) => {
              typewriter.typeString(`PS C:/User/ I am a recent graduate in the field of software engineering and I am excited to start my career in the tech industry. 
              I bring a diverse background of customer service and data specialist experience, which I believe will make me a valuable addition to any team.
              My skills include adapting to fast-paced work environments and excelling in group settings. My approach to problem-solving is to find the most effective 
              and simplest solution possible, while always striving to improve and expand my skills as an engineer. I am seeking a company that value creativity and will 
              provide me with the opportunity to grow and develop as an engineer. I am eager to contribute my talents andenthusiasm to a dynamic team and work on innovative projects`)
              .pauseFor().start();
            }}/>
            </p>
            
            </div>
            
          </div> */}
      </div>
      </LazyLoadComponent>
      
      <LazyLoadComponent>
      <div className="photo">
        <img className="profilePhoto" src={profile} alt="profile" />
      </div></LazyLoadComponent>

      {/* 
        <div className="skillsBox">
        <h2 className="skillsTitle">Tech Stack</h2>
        <div className="skills">

        <li>
          <img className="icons" src={JS} alt="icon"></img>
        </li>
        <li>
          <img className="icons" src={CSS} alt="icon"></img>
        </li>
        <li>
          <img className="icons" src={HTML} alt="icon"></img>
        </li>
        <li>
          <img className="icons" src={PYTHON} alt="icon"></img>
        </li>
        <li>
          <img className="icons" src={C} alt="icon"></img>
        </li>
        <li>
          <img className="icons" src={REACT} alt="icon"></img>
        </li>
        <li>
          <img className="icons" src={NODE} alt="icon"></img>
        </li>
        <li>
          <img className="icons" src={DJANGO} alt="icon"></img>
        </li>
        <li>
          <img className="icons" src={MONGO} alt="icon"></img>
        </li>
        <li>
          <img className="icons" src={SQL} alt="icon"></img>
        </li>
        <li>
          <img className="icons" src={POSTMAN} alt="icon"></img>
        </li>
        <li>
          <img className="icons" src={GIT} alt="icon"></img>
        </li>
        <li>
          <img className="icons" src={HEROKU} alt="icon"></img>
        </li>
      </div>
        </div> */}
    </div>
  );
}

export default HomePage;
