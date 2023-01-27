import React from "react";

import { Container, Card, Carousel } from "react-bootstrap";


import movie1 from "../../assets/images/movie1.png";
import movie2 from "../../assets/images/movie2.png";
import movie3 from "../../assets/images/movie3.png";
import movie4 from "../../assets/images/movie4.png";


function Movieapp () {

    return(

        <Container className="projectContainer">
        <Card>
        <Card.Body>
            <Card.Title>My first group project</Card.Title>
            <Card.Subtitle><a href="https://github.com/joshlawlor/Project-3">Github Repository</a> </Card.Subtitle>
        </Card.Body>
            <Carousel>
              <Carousel.Item>
                <img src={movie1} alt="1"></img>
              </Carousel.Item>
              <Carousel.Item>
                <img src={movie2} alt="1"></img>
              </Carousel.Item>
              <Carousel.Item>
                <img src={movie4} alt="1"></img>
              </Carousel.Item>
              <Carousel.Item>
                <img src={movie3} alt="1"></img>
              </Carousel.Item>
            </Carousel>
        </Card>
      </Container>
    )
}


export default Movieapp