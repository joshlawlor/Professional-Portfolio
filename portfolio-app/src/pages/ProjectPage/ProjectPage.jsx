import React from "react";
import "./ProjectPage.css";

import linkedin from "../../assets/images/linkedin.png";
import github from "../../assets/images/githubicon.png";
import email from "../../assets/images/email.png";


//BOOTSTRAP

import CustomModal from "../../components/Modal";

function ProjectPage() {



  return (
    <div className="projectMain">
      <div className="sidebarMain">
        <li className="icons">
          <a href="https://github.com/joshlawlor" rel="noreferrer" target="_blank">
            <img src={github} alt="github" />
          </a>
        </li>
        <li className="icons">
          <a href="https://www.linkedin.com/in/joshuaryanlawlor/" rel="noreferrer" target="_blank">
            <img src={linkedin} alt="linkedin" />
          </a>
        </li>
        <li className="icons">
          <a href="mailto:joshlawlor1@gmail.com">
            <img src={email} alt="email" />
          </a>
        </li>
      </div>

      <div className="galleryMain">
        <div className="title">
          <h1 className="nintendo-font">Web Applications</h1>
        </div>
        <div className="gallery">
          <div className="project">
            <CustomModal props="bugbuddy"></CustomModal>
          </div>
          <div className="project">
            <CustomModal props="bugbuddy2"></CustomModal>
          </div>
          <div className="project">
            <CustomModal props="portfolio"></CustomModal>
          </div>
          <div className="project">
            <CustomModal props="movieApp"></CustomModal>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectPage;
