import React from "react";
import { useState } from "react";
import "./ProjectPage.css";

import linkedin from "../../assets/images/linkedin.png";
import github from "../../assets/images/githubicon.png";
import email from "../../assets/images/email.png";
import folder from "../../assets/images/folder.png";

import bugbuddy from "../../assets/images/bugbuddy1.png";

//BOOTSTRAP
import { Card, Carousel, Modal, Container } from "react-bootstrap";

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
          <Modal.Title className="nintendo-font">Bugbuddy 1.0</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Container className="projectContainer">
            <Card>
              <Card.Header>
                <Carousel>
                  <Carousel.Item>
                    <img src={bugbuddy} alt="1"></img>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img src={bugbuddy} alt="1"></img>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img src={bugbuddy} alt="1"></img>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img src={bugbuddy} alt="1"></img>
                  </Carousel.Item>
                </Carousel>
              </Card.Header>
              <Card.Title>BugBuddy</Card.Title>
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
              <Card.Header>
                <Carousel>
                  <Carousel.Item>
                    <img src={bugbuddy} alt="1"></img>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img src={bugbuddy} alt="1"></img>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img src={bugbuddy} alt="1"></img>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img src={bugbuddy} alt="1"></img>
                  </Carousel.Item>
                </Carousel>
              </Card.Header>
              <Card.Title>BugBuddy</Card.Title>
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
              <Card.Header>
                <Carousel>
                  <Carousel.Item>
                    <img src={bugbuddy} alt="1"></img>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img src={bugbuddy} alt="1"></img>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img src={bugbuddy} alt="1"></img>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img src={bugbuddy} alt="1"></img>
                  </Carousel.Item>
                </Carousel>
              </Card.Header>
              <Card.Title>BugBuddy</Card.Title>
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
              <Card.Header>
                <Carousel>
                  <Carousel.Item>
                    <img src={bugbuddy} alt="1"></img>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img src={bugbuddy} alt="1"></img>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img src={bugbuddy} alt="1"></img>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img src={bugbuddy} alt="1"></img>
                  </Carousel.Item>
                </Carousel>
              </Card.Header>
              <Card.Title>BugBuddy</Card.Title>
            </Card>
          </Container>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default ProjectPage;
