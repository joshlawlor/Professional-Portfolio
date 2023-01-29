import React from "react";

import { Container, Accordion, Card, Carousel } from "react-bootstrap";
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

import portfolio1 from "../../assets/images/portfolio1.png";
import portfolio2 from "../../assets/images/portfolio2.png";
import portfolio3 from "../../assets/images/portfolio3.png";
import portfolio4 from "../../assets/images/portfolio4.png";
import portfolio5 from "../../assets/images/portfolio5.png";
import {
  LazyLoadComponent,
  LazyLoadImage,
} from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function Portfolio() {
  return (
    <Container className="projectContainer">
      {/* 
      <Card>
        <Card.Body>
          <Card.Title>My first portfolio website</Card.Title>
          <Card.Subtitle>
            <a href="https://joshualawlor.netlify.app/">Live Link</a>{" "}
            <a href="https://github.com/joshlawlor/Portfolio">
              Github Repository
            </a>{" "}
          </Card.Subtitle>
        </Card.Body>
      </Card> */}
      <div className="contentMain">
        <div className="contentHeader">
          <h4>
            Github Repo:{" "}
            <a href="https://github.com/joshlawlor/Portfolio">
              <img className="projectIcon" src={github} alt="github" />
            </a>{"   "}
          </h4>
          <h4>
          Live Link:{" "}
            <a href="https://joshualawlor.netlify.app/">
              <img className="projectIcon" src={liveLink} alt="github" />
            </a>
          </h4>
        </div>
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

      <Accordion defaultActiveKey={"1"}>
        <Accordion.Item>
          <Accordion.Header>Project Screenshots</Accordion.Header>
          <Accordion.Body>
            <Carousel>
              <Carousel.Item>
                <img src={portfolio1} alt="1"></img>
              </Carousel.Item>
              <Carousel.Item>
                <img src={portfolio2} alt="1"></img>
              </Carousel.Item>
              <Carousel.Item>
                <img src={portfolio3} alt="1"></img>
              </Carousel.Item>
              <Carousel.Item>
                <img src={portfolio4} alt="1"></img>
              </Carousel.Item>
              <Carousel.Item>
                <img src={portfolio5} alt="1"></img>
              </Carousel.Item>
            </Carousel>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
}

export default Portfolio;
