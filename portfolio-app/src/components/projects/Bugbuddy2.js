import React from "react";

import { Container, Card, Carousel } from "react-bootstrap";

import bug1 from "../../assets/images/bug1.png";
import bug2 from "../../assets/images/bug2.png";
import bug3 from "../../assets/images/bug3.png";
import bug4 from "../../assets/images/bug4.png";
import bug5 from "../../assets/images/bug5.png";


function Bugbuddy2 () {

    return(
        <Container className="projectContainer">
        <Card>
        <Card.Body>
            <Card.Title>A debugging forum app!</Card.Title>
            <Card.Subtitle><a href="https://bugbuddy.netlify.app/">Live Link</a> <a href="https://github.com/joshlawlor/BugBuddy-2.0">Github Repository</a> </Card.Subtitle>
        </Card.Body>
            <Carousel>
              <Carousel.Item>
                <img src={bug1} alt="1"></img>
              </Carousel.Item>
              <Carousel.Item>
                <img src={bug2} alt="1"></img>
              </Carousel.Item>
              <Carousel.Item>
                <img src={bug3} alt="1"></img>
              </Carousel.Item>
              <Carousel.Item>
                <img src={bug4} alt="1"></img>
              </Carousel.Item>
              <Carousel.Item>
                <img src={bug5} alt="1"></img>
              </Carousel.Item>
            </Carousel>
        </Card>
      </Container>
    )
}

export default Bugbuddy2