import React from "react";

import { Container, Card, Carousel } from "react-bootstrap";
import portfolio1 from "../../assets/images/portfolio1.png";
import portfolio2 from "../../assets/images/portfolio2.png";
import portfolio3 from "../../assets/images/portfolio3.png";
import portfolio4 from "../../assets/images/portfolio4.png";
import portfolio5 from "../../assets/images/portfolio5.png";

function Portfolio() {
    return(
<Container className="projectContainer">
            <Card>
            <Card.Body>
                <Card.Title>My first portfolio website</Card.Title>
                <Card.Subtitle><a href="https://joshualawlor.netlify.app/">Live Link</a> <a href="https://github.com/joshlawlor/Portfolio">Github Repository</a> </Card.Subtitle>
            </Card.Body>
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
            </Card>
          </Container>

    )
}

export default Portfolio