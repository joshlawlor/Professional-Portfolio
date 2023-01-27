import React from "react";
import { useState } from "react";
import "./ProjectPage.css";

import linkedin from "../../assets/images/linkedin.png";
import github from "../../assets/images/githubicon.png";
import email from "../../assets/images/email.png";


//BOOTSTRAP
import { Card, Carousel, Modal, Container, Accordion } from "react-bootstrap";

import CustomModal from "../../components/Modal";
import Bugbuddy from "../../components/projects/Bugbuddy";

function ProjectPage() {
  // const [p1Show, set1Show] = React.useState(false);
  // const [p2Show, set2Show] = React.useState(false);
  // const [p3Show, set3Show] = React.useState(false);
  // const [p4Show, set4Show] = React.useState(false);


  return (
    <div className="projectMain">
      <div className="sidebarMain">
        <li className="icons">
          <a href="https://github.com/joshlawlor">
            <img src={github} alt="github" />
          </a>
        </li>
        <li className="icons">
          <a href="https://www.linkedin.com/in/joshuaryanlawlor/">
            <img src={linkedin} alt="linkedin" />
          </a>
        </li>
        <li className="icons">
          <a href="mailto:joshlawlor1@gmail.com">
            <img src={email} alt="email" />
          </a>
        </li>
      </div>

      <div className="galleryMain">
        <div className="title">
          <h1 className="nintendo-font">Web Applications</h1>
        </div>
        <div className="gallery">
          <div className="project">
            <CustomModal props="bugbuddy"></CustomModal>
            {/* <img
              onClick={() => set1Show(true)}
              style={{ "pointer-events": "all" }}
              className="folder"
              src={folder}
              alt="folder"
            ></img>
            <h2 className="projectTitle">Bugbuddy</h2> */}
          </div>
          <div className="project">
            <CustomModal props="bugbuddy2"></CustomModal>
          </div>
          <div className="project">
            <CustomModal props="portfolio"></CustomModal>
          </div>
          <div className="project">
            <CustomModal props="movieApp"></CustomModal>
          </div>
        </div>
      </div>

      {/***************** PROJECT ONE MODAL *****************/}
      {/* <Modal
        className="projectModal"
        show={p1Show}
        onHide={() => set1Show(false)}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        contentClassName="modalBox"
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
        </Modal.Body>
      </Modal> */}
    </div>
  );
}

export default ProjectPage;
