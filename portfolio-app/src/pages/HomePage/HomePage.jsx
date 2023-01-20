import React from "react";
import "./HomePage.css";
import { Link } from "react-router-dom";

import profile from "../../assets/images/profile.jpg";
import github from '../../assets/images/githubicon.png'
import linkedin from "../../assets/images/linkedinicon.png"

function HomePage() {
  return (
    <div className="homeMain">
      <div className="homeNav">
        <ul className="navbar">
          <li className="brandIcon">JL</li>
          <li>
            <Link to="/">EMAIL</Link>
          </li>
        </ul>
      </div>

      <div className="aboutContainer">
        <div className="about">
          <div className="aboutTitle">
            <h1 className="nintendo-font">Joshua Lawlor</h1>
          </div>
          <p className="proFont">Software Engineer</p>

          <div className="proLinks">
            <ul>
                <li><a><img className="icon" src={github} alt="icon"></img></a></li>
                <li><img className="icon" src={linkedin} alt="icon"></img></li>
                <li></li>
            </ul>
          </div>
        </div>
        <div className="photo">
          <img src={profile} alt="profile"></img>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
