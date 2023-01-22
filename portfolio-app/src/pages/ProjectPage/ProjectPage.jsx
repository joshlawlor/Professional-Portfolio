import React from "react";
import { useState } from "react";
import "./ProjectPage.css";

import linkedin from "../../assets/images/linkedin.png";
import github from "../../assets/images/githubicon.png";
import email from "../../assets/images/email.png";
import folder from "../../assets/images/folder.png";

import bugbuddy1 from "../../assets/images/bugbuddy1.png";
import bugbuddy2 from "../../assets/images/bugbuddy2.png";
import bugbuddy3 from "../../assets/images/bugbuddy3.png";
import bugbuddy4 from "../../assets/images/bugbuddy4.png";
import bugbuddy5 from "../../assets/images/bugbuddy5.png";

import bug1 from "../../assets/images/bug1.png";
import bug2 from "../../assets/images/bug2.png";
import bug3 from "../../assets/images/bug3.png";
import bug4 from "../../assets/images/bug4.png";
import bug5 from "../../assets/images/bug5.png";

import movie1 from "../../assets/images/movie1.png";
import movie2 from "../../assets/images/movie2.png";
import movie3 from "../../assets/images/movie3.png";
import movie4 from "../../assets/images/movie4.png";

import portfolio1 from "../../assets/images/portfolio1.png";
import portfolio2 from "../../assets/images/portfolio2.png";
import portfolio3 from "../../assets/images/portfolio3.png";
import portfolio4 from "../../assets/images/portfolio4.png";
import portfolio5 from "../../assets/images/portfolio5.png";

//BOOTSTRAP
import { Card, Carousel, Modal, Container, Accordion } from "react-bootstrap";

function ProjectPage() {
  const [p1Show, set1Show] = React.useState(false);
  const [p2Show, set2Show] = React.useState(false);
  const [p3Show, set3Show] = React.useState(false);
  const [p4Show, set4Show] = React.useState(false);

  return (
    <div className="projectMain">
      <div className="sidebarMain">
        <a href="/">
          <li className="brandIconSide">JL</li>
        </a>

        <li className="icons">
          <img src={github} alt="linkedin" />
        </li>
        <li className="icons">
          <img src={linkedin} alt="linkedin" />
        </li>
        <li className="icons">
          <img src={email} alt="linkedin" />
        </li>
      </div>

      <div className="galleryMain">
        <div className="title">
          <h1 className="nintendo-font">Web Applications</h1>
        </div>

        <div className="gallery">
          <div className="project">
            <img
              onClick={() => set1Show(true)}
              style={{ "pointer-events": "all" }}
              className="folder"
              src={folder}
              alt="folder"
            ></img>
            <h2 className="projectTitle">Bugbuddy</h2>
          </div>
          <div className="project">
            <img
              onClick={() => set2Show(true)}
              style={{ "pointer-events": "all" }}
              className="folder"
              src={folder}
              alt="folder"
            ></img>
            <h2 className="projectTitle">Bugbuddy 2.0</h2>
          </div>
          <div className="project">
            <img
              onClick={() => set3Show(true)}
              style={{ "pointer-events": "all" }}
              className="folder"
              src={folder}
              alt="folder"
            ></img>
            <h2 className="projectTitle">Portfolio 1.0</h2>
          </div>
          <div className="project">
            <img
              onClick={() => set4Show(true)}
              style={{ "pointer-events": "all" }}
              className="folder"
              src={folder}
              alt="folder"
            ></img>
            <h2 className="projectTitle">Movie App</h2>
          </div>
        </div>
      </div>

      {/***************** PROJECT ONE MODAL *****************/}
      <Modal
        className="projectModal"
        show={p1Show}
        onHide={() => set1Show(false)}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title className="nintendo-font"> Bugbuddy 1.0</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Container className="projectContainer">
            <Card>
            <Card.Body>
                <Card.Title>A debugging forum app!</Card.Title>
                <Card.Subtitle><a href="https://github.com/joshlawlor/Debugger-App">Github Repository</a> </Card.Subtitle>
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
        </Modal.Body>
      </Modal>

      {/***************** PROJECT TWO MODAL *****************/}

      <Modal
        className="projectModal"
        show={p2Show}
        onHide={() => set2Show(false)}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title className="nintendo-font">Bugbuddy 2.0</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Container className="projectContainer">
            <Card>
            <Card.Body>
                <Card.Title>A debugging forum app!</Card.Title>
                <Card.Subtitle><a href="https://github.com/joshlawlor/Debugger-App">Github Repository</a> </Card.Subtitle>
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
        </Modal.Body>
      </Modal>

      {/***************** PROJECT THREE MODAL *****************/}

      <Modal
        className="projectModal"
        show={p3Show}
        onHide={() => set3Show(false)}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title className="nintendo-font">Portfolio 1.0</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Container className="projectContainer">
            <Card>
            <Card.Body>
                <Card.Title>My first portfolio website</Card.Title>
                <Card.Subtitle><a href="https://github.com/joshlawlor/Debugger-App">Github Repository</a> </Card.Subtitle>
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
        </Modal.Body>
      </Modal>

      {/***************** PROJECT FOUR MODAL *****************/}

      <Modal
        className="projectModal"
        show={p4Show}
        onHide={() => set4Show(false)}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title className="nintendo-font">Movie App</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Container className="projectContainer">
            <Card>
            <Card.Body>
                <Card.Title>My first group project</Card.Title>
                <Card.Subtitle><a href="https://github.com/joshlawlor/Debugger-App">Github Repository</a> </Card.Subtitle>
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
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default ProjectPage;
