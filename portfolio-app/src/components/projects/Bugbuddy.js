import React from "react";

import { Container, Card, Carousel } from "react-bootstrap";


import bugbuddy1 from "../../assets/images/bugbuddy1.png";
import bugbuddy2 from "../../assets/images/bugbuddy2.png";
import bugbuddy3 from "../../assets/images/bugbuddy3.png";
import bugbuddy4 from "../../assets/images/bugbuddy4.png";
import bugbuddy5 from "../../assets/images/bugbuddy5.png";
function Bugbuddy () {

    return (
      <Container className="projectContainer">
            <Card>
            <Card.Body>
                <Card.Title>A debugging forum app!</Card.Title>
                <Card.Subtitle> <a href="https://github.com/joshlawlor/Debugger-App">Github Repository</a></Card.Subtitle>
                <Card.Subtitle> </Card.Subtitle>
            </Card.Body>
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
            </Card>
          </Container>

    )
}

export default Bugbuddy