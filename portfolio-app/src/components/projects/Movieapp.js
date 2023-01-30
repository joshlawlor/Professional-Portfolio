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

import movie1 from "../../assets/images/movie1.png";
import movie2 from "../../assets/images/movie2.png";
import movie3 from "../../assets/images/movie3.png";
import movie4 from "../../assets/images/movie4.png";


function Movieapp () {

    return(

        <Container className="projectContainer">
      <div className="contentMain">
        <div className="contentHeader">
          <h4>
            Github Repo:{" "}
            <a href="https://github.com/joshlawlor/BugBuddy-2.0" target="_blank">
              <img className="projectIcon" src={github} alt="github" />
            </a>{"   "}
          </h4>
          {/* <h4>
          Live Link:{" "}
            <a href="https://bugbuddy.netlify.app/" target="_blank">
              <img className="projectIcon" src={liveLink} alt="github" />
            </a>
          </h4> */}
        </div>
        <div>
        <h4>This was my first group project with fellow programmers. It was definitely a learning experience.
          Throughout this project my main role was that of Scrum Master. I refined my skills in Git workflow, reviewing pull requests and
          merging the different development branches we had throughout the project.
        </h4>
        </div>
        <Accordion defaultActiveKey={"1"}>
        <Accordion.Item className="accordionMain">
          <Accordion.Header>Project Screenshots</Accordion.Header>
          <Accordion.Body>
            <Carousel>
              <Carousel.Item>
                <img src={movie1} alt="1"></img>
              </Carousel.Item>
              <Carousel.Item>
                <img src={movie2} alt="1"></img>
              </Carousel.Item>
              <Carousel.Item>
                <img src={movie3} alt="1"></img>
              </Carousel.Item>
              <Carousel.Item>
                <img src={movie4} alt="1"></img>
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


export default Movieapp