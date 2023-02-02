import React from "react";

import { Container,Accordion, Card, Carousel } from "react-bootstrap";
import JS from "../../assets/images/JS.png";
import HTML from "../../assets/images/html.png";
import REACT from "../../assets/images/react.png";
import HEROKU from "../../assets/images/heroku.png";
import CSS from "../../assets/images/css.png";
import BOOTSTRAP from "../../assets/images/bootstrap.png";
import github from "../../assets/images/githubicon.png";
import NODE from "../../assets/images/node.png";
import EXPRESS from "../../assets/images/express.png";
import POSTMAN from "../../assets/images/postman.png";
import MONGO from "../../assets/images/mongo.png";

import liveLink from "../../assets/images/liveLink.png"

import {
  LazyLoadComponent,
  LazyLoadImage,
} from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";


import bugbuddy1 from "../../assets/images/bugbuddy1.png";
import bugbuddy2 from "../../assets/images/bugbuddy2.png";
import bugbuddy3 from "../../assets/images/bugbuddy3.png";
import bugbuddy4 from "../../assets/images/bugbuddy4.png";
import bugbuddy5 from "../../assets/images/bugbuddy5.png";
function Bugbuddy () {

    return (
      <Container className="projectContainer">
         <div className="contentMain">
        <div className="contentHeader">
          <h4>
            Github Repo:{" "}
            <a href="https://github.com/joshlawlor/Debugger-Frontend"  target="_blank">
              <img className="projectIcon" src={github} alt="github" />
            </a>{"   "}
          </h4>
         
        </div>
        <div>
        <h4>This app was my first full stack application using the MERN stack. My main focus was the building 
          an operational back-end. I spent a lot of time whiteboarding how I was going to set up my models.
          I found out how important it is to build with scalability in mind, because as I added features or fields
          to my models I realized easier ways to set them up.
        </h4>
        </div>
        
        <Accordion defaultActiveKey={"1"}>
        <Accordion.Item className="accordionMain">
          <Accordion.Header>Project Screenshots</Accordion.Header>
          <Accordion.Body>
            <Carousel>
              <Carousel.Item>
                <img src={bugbuddy1} alt="1"></img>
              </Carousel.Item>
              <Carousel.Item>
                <img src={bugbuddy2} alt="1"></img>
              </Carousel.Item>
            
              <Carousel.Item>
                <img src={bugbuddy4} alt="1"></img>
              </Carousel.Item>
              <Carousel.Item>
                <img src={bugbuddy5} alt="1"></img>
              </Carousel.Item>
            </Carousel>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    
        <div className="contentLanguages">
          <div className="techBox">
            <h4>
              These are the languages I utilized in creating the front end of my
              application:
            </h4>
            <div className="techItems">
              <li>
                <LazyLoadImage
                  loading="lazy"
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
                  visibleByDefault={false}
                  // effect="blur"
                />
              </li>
              <li>
                <LazyLoadImage
                  loading="lazy"
                  className="resumeIcons"
                  src={HTML}
                  alt="icon"
                  visibleByDefault={false}
                  // effect="blur"
                />
              </li>
              <li>
                <LazyLoadImage
                  loading="lazy"
                  className="resumeIcons"
                  threshold={0.05}
                  src={BOOTSTRAP}
                  alt="icon"
                  visibleByDefault={false}
                />
              </li>
              <li>
                <LazyLoadImage
                  loading="lazy"
                  className="resumeIcons"
                  src={REACT}
                  alt="icon"
                  visibleByDefault={false}
                />
              </li>

              <li>
                <LazyLoadImage
                  loading="lazy"
                  className="resumeIcons"
                  src={HEROKU}
                  alt="icon"
                  visibleByDefault={false}
                />
              </li>
            </div>
            <h4>
              These are the languages I utilized in creating the back end of my
              application:
            </h4>
            <div className="techItems">
              <li>
                <LazyLoadImage
                  loading="lazy"
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
                  src={NODE}
                  alt="icon"
                  visibleByDefault={false}
                  // effect="blur"
                />
              </li>
              <li>
                <LazyLoadImage
                  loading="lazy"
                  className="resumeIcons"
                  src={EXPRESS}
                  alt="icon"
                  visibleByDefault={false}
                  // effect="blur"
                />
              </li>
              <li>
                <LazyLoadImage
                  loading="lazy"
                  className="resumeIcons"
                  threshold={0.05}
                  src={MONGO}
                  alt="icon"
                  visibleByDefault={false}
                />
              </li>
              <li>
                <LazyLoadImage
                  loading="lazy"
                  className="resumeIcons"
                  src={POSTMAN}
                  alt="icon"
                  visibleByDefault={false}
                />
              </li>

              <li>
                <LazyLoadImage
                  loading="lazy"
                  className="resumeIcons"
                  src={HEROKU}
                  alt="icon"
                  visibleByDefault={false}
                />
              </li>
            </div>
          </div>
        </div>
      </div>

    
          </Container>

    )
}

export default Bugbuddy