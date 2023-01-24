import React from "react";
import "./AboutPage.css";

import linkedin from "../../assets/images/linkedin.png";
import github from "../../assets/images/githubicon.png";
import emailicon from "../../assets/images/email.png";

function AboutPage() {
  return (
    <div className="aboutMain">
      <div className="aboutSideBar">
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
            <img src={emailicon} alt="email" />
          </a>
        </li>
      </div>

      {/******** CONTENT *******/}

      <div className="aboutBox">
        <div className="aboutTitle">
          <h1 className="nintendo-font">About Me</h1>
        </div>
        <p className="fontStyle">
          I thoroughly enjoy watching films as well as reading in my free time.
          So below i've included some of my recent recommendations
        </p>

        <div className="bookBox">
          <ul>
            <li>BOOK</li>
          </ul>
        </div>

        <div className="movieBox">
          <ul>
            <li>MOVIE</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
