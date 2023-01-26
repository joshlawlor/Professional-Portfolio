import React, { useState } from "react";
import Modal from "react-modal";

import folder from "../assets/images/folder.png";

import { Container, Card, Carousel } from "react-bootstrap";
import bug1 from "../assets/images/bug1.png";
import bug2 from "../assets/images/bug2.png";
import bug3 from "../assets/images/bug3.png";
import bug4 from "../assets/images/bug4.png";
import bug5 from "../assets/images/bug5.png";

function CustomModal({ props }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const setModalIsOpenToTrue = () => {
    setModalIsOpen(true);
  };

  const setModalIsOpenToFalse = () => {
    setModalIsOpen(false);
  };

  const customStyles = {
    content: {
        top: '5%',
        left: '20%',
        right: '20%',    
        backgroundColor : '#ffe177',
        }
  }

  console.log(props);
  const project = props;

  if (project == "bugbuddy") {
    return (
      <>
        <img
          onClick={setModalIsOpenToTrue}
          src={folder}
          style={{ "pointer-events": "all" }}
          className="folder"
          alt="folder"
        ></img>
        <h2 className="projectTitle">Bugbuddy</h2>
        <Modal onRequestClose={()=> setModalIsOpen(false)} style={customStyles} isOpen={modalIsOpen}>
          <button onClick={setModalIsOpenToFalse}>X</button>
          <h1>Project 1</h1>
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
        </Modal>
      </>
    );
  } else if (project == "bugbuddy2") {
    return (
      <>
       <img
          onClick={setModalIsOpenToTrue}
          src={folder}
          style={{ "pointer-events": "all" }}
          className="folder"
          alt="folder"
        ></img>
        <h2 className="projectTitle">Bugbuddy 2.0</h2>

        <Modal isOpen={modalIsOpen}>
          <button onClick={setModalIsOpenToFalse}>X</button>
          <h1>Project 2</h1>
        </Modal>
      </>
    );
  } else if (project == "portfolio") {
    return (
      <>
       <img
          onClick={setModalIsOpenToTrue}
          src={folder}
          style={{ "pointer-events": "all" }}
          className="folder"
          alt="folder"
        ></img>
        <h2 className="projectTitle">Portfolio 1.0</h2>

        <Modal isOpen={modalIsOpen}>
          <button onClick={setModalIsOpenToFalse}>X</button>
          <h1>Project 2</h1>
        </Modal>
      </>
    );
  }
  else if (project == "movieApp") {
    return (
      <>
       <img
          onClick={setModalIsOpenToTrue}
          src={folder}
          style={{ "pointer-events": "all" }}
          className="folder"
          alt="folder"
        ></img>
        <h2 className="projectTitle">Movie App</h2>

        <Modal isOpen={modalIsOpen}>
          <button onClick={setModalIsOpenToFalse}>X</button>
          <h1>Project 2</h1>
        </Modal>
      </>
    );
  }
}

export default CustomModal;
