import React from "react";
import "./HomePage.css";
import Typewriter from "typewriter-effect";

import profile from "../../assets/images/profile.jpg";
import github from "../../assets/images/githubicon.png";
import linkedin from "../../assets/images/linkedin.png";
import email from "../../assets/images/email.png";


import { LazyLoadComponent } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function HomePage() {

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
                  loop: true,
                }}
                onInit={(typewriter) => {
                  typewriter
                    .pauseFor("1000")
                    .typeString("Full-Stack Software Engineer")
                    .pauseFor("500")
                    .deleteAll()
                    .typeString("Adaptable, Creative, Curious")
                    .pauseFor("500")
                    .deleteAll()
                    .typeString("Let's improve and grow together!")
                    .pauseFor("800")
                    .start();
                }}
              />
            </p>
          </div>

          <div className="proLinks">
            <li>
              <a href="https://github.com/joshlawlor" rel="noreferrer" target="_blank">
                <img className="contactIcon" src={github} alt="icon"></img>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/joshuaryanlawlor/" rel="noreferrer"  target="_blank">
                <img className="contactIcon" src={linkedin} alt="icon"></img>
              </a>
            </li>
            <li>
              <a href="mailto:joshlawlor1@gmail.com">
                <img className="contactIcon" src={email} alt="email" />
              </a>
            </li>
          </div>
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
        </div>
      </LazyLoadComponent>

    </div>
  );
}

export default HomePage;
