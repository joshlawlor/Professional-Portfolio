import React from "react";
import "./ResumePage.css";

import linkedin from "../../assets/images/linkedin.png";
import github from "../../assets/images/githubicon.png";
import email from "../../assets/images/email.png";
import resumeIcon from "../../assets/images/resumeIcon.png";
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
import C from "../../assets/images/csharp.png";
import HEROKU from "../../assets/images/heroku.png";
import EXPRESS from "../../assets/images/express.png";
import MATERIALIZE from "../../assets/images/materialize.png";
import TAILWIND from "../../assets/images/tailwind.png";
import BOOTSTRAP from "../../assets/images/bootstrap.png";
import TYPESCRIPT from "../../assets/images/typescript.png"
import resume from "../../assets/files/JoshuaLawlorResume.pdf";


import { LazyLoadComponent, LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";




function ResumePage() {


  return (
    <div className="resumeMain">
      <div className="resumeSidebar">
        <li className="icons">
          <a href="https://github.com/joshlawlor" target="_blank">
            <img src={github} alt="github" />
          </a>
        </li>
        <li className="icons">
          <a href="https://www.linkedin.com/in/joshuaryanlawlor/" target="_blank">
            <img src={linkedin} alt="linkedin" />
          </a>
        </li>
        <li className="icons">
          <a href="mailto:joshlawlor1@gmail.com">
            <img src={email} alt="email" />
          </a>
        </li>
      </div>


        
      <LazyLoadComponent 
      visibleByDefault={false}>
      <div className="displayBox">
        <div className="techMain">
          <div className="techTitle">
            <h4 className="">Front end tech skills</h4>
          </div>
          <div className="techBox">
            <div className="techItems">
              <li>
                <LazyLoadImage
                  className="resumeIcons"
                  threshold={0.05}
                  src={JS}
                  alt="icon"
                  visibleByDefault={true}
                  effect="blur"
                />
              </li>
             
              <li>
                <LazyLoadImage
                  loading="lazy"
                  className="resumeIcons"
                  threshold={0.05}

                  src={CSS}
                  alt="icon"
                  visibleByDefault={true}
                  effect="blur"
                />
              </li>
              <li>
                <LazyLoadImage
                  loading="lazy"
                  className="resumeIcons"
                  src={HTML}
                  alt="icon"
                  visibleByDefault={true}
                  effect="blur"
                />
              </li>
              <li>
                <LazyLoadImage
                  loading="lazy"
                  className="resumeIcons"
                  threshold={0.05}
                  src={TYPESCRIPT}
                  alt="icon"
                  visibleByDefault={true}
                  effect="blur"
                />
              </li>
              <li>
                <LazyLoadImage
                  className="resumeIcons"
                  src={REACT}
                  alt="icon"
                  visibleByDefault={true}
                />
              </li>
             
              <li>
                <LazyLoadImage
                  className="resumeIcons"
                  src={HEROKU}
                  alt="icon"
                  visibleByDefault={true}
                  effect="blur"
                />
              </li>
            </div>
          </div>

          <div className="techTitle">
            <h4 className="">Back end tech skills</h4>
          </div>
          <div className="techBox">
            <div className="techItems">
              <li>
                <LazyLoadImage
                  className="resumeIcons"
                  src={NODE}
                  alt="icon"
                  visibleByDefault={true}
                  effect="blur"

                />
              </li>
              <li>
              <LazyLoadImage
                  loading="lazy"
                  className="resumeIcons"
                  src={EXPRESS}
                  alt="icon"
                  visibleByDefault={true}
                />
              </li>
              <li>
              <LazyLoadImage
                  loading="lazy"
                  className="resumeIcons"
                  src={MONGO}
                  alt="icon"
                  visibleByDefault={true}
                />
              </li>
              <li>
              <LazyLoadImage
                  loading="lazy"
                  className="resumeIcons"
                  src={SQL}
                  alt="icon"
                  visibleByDefault={true}
                />
              </li>
              <li>
              <LazyLoadImage
                  loading="lazy"
                  className="resumeIcons"
                  src={POSTMAN}
                  alt="icon"
                  visibleByDefault={true}
                />
              </li>
            </div>
          </div>

          <div className="techTitle">
            <h4 className="">A few others...</h4>
          </div>
          <div className="techBox">
            <div className="techItems">
              <li>
              <LazyLoadImage
                  className="resumeIcons"
                  src={BOOTSTRAP}
                  alt="icon"
                  visibleByDefault={true}
                />
              </li>
              <li>
              <LazyLoadImage
                  className="resumeIcons"
                  src={TAILWIND}
                  alt="icon"
                  visibleByDefault={true}
                />
              </li>

              <li>
              <LazyLoadImage
                  className="resumeIcons"
                  src={MATERIALIZE}
                  alt="icon"
                  visibleByDefault={true}
                />
              </li>

              <li>
              <LazyLoadImage
                  className="resumeIcons"
                  src={PYTHON}
                  alt="icon"
                  visibleByDefault={true}
                />
              </li>
              <li>
              <LazyLoadImage
                  className="resumeIcons"
                  src={DJANGO}
                  alt="icon"
                  visibleByDefault={true}
                />
              </li>
              <li>
              <LazyLoadImage
                  className="resumeIcons"
                  src={C}
                  alt="icon"
                  visibleByDefault={true}
                />
              </li>
            </div>
          </div>
        </div>
        <div className="resumeBox">
          <h4 className="nintendo-font">
            Resume Download:
            <a href={resume} download="JoshuaLawlorResume">
              <img className="downloadIcon" src={resumeIcon}></img>
            </a>
          </h4>
        </div>
      </div>
      </LazyLoadComponent>
    </div>
  );
}

export default ResumePage;
