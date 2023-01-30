import React, { useState } from "react";
import { CloseButton } from "react-bootstrap";
import Modal from "react-modal";
import '../pages/ProjectPage/ProjectPage.css'

import folder from "../assets/images/folder.png";

import Bugbuddy from "./projects/Bugbuddy";
import Bugbuddy2 from "./projects/Bugbuddy2";
import Portfolio from "./projects/Portfolio";
import Movieapp from "./projects/Movieapp";



function CustomModal({ props }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const setModalIsOpenToTrue = () => {
    setModalIsOpen(true);
  };

  const setModalIsOpenToFalse = () => {
    setModalIsOpen(false);
  };

  const customStyles = {
    overlay: {
    },
    content: {
      borderRadius: "25px",
      top: "5%",
      left: "20%",
      right: "20%",
      bottom: "20%",
      border: 'none',
      backgroundColor: 'transparent',
      display: "flex",
      flexDirection: "column",
      height: "100vh",
      
    },
  };

  console.log(props);
  const project = props;

  if (project === "bugbuddy") {
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
        <Modal
          onRequestClose={() => setModalIsOpen(false)}
          style={customStyles}
          isOpen={modalIsOpen}
        >
          <div className="folderMain">
            <nav id="tab">
              <div className="folder-tab">
              <h2>Bugbuddy</h2>
              </div>
              
            </nav>
            <div id="folderPage">
                <div id="folderHeader">
                <CloseButton className="exitModal" onClick={setModalIsOpenToFalse}></CloseButton>

                </div>
                <div id="folderContent">

                </div>

            <Bugbuddy />
            </div>
          </div>
          
        </Modal>
      </>
    );
  } else if (project === "bugbuddy2") {
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

        <Modal
          onRequestClose={() => setModalIsOpen(false)}
          style={customStyles}
          isOpen={modalIsOpen}
        >
          <div className="folderMain">
            <nav id="tab">
              <div className="folder-tab">
              <h2>Bugbuddy 2.0</h2>
              </div>
              
            </nav>
            <div id="folderPage">
                <div id="folderHeader">
                <CloseButton className="exitModal" onClick={setModalIsOpenToFalse}></CloseButton>

                </div>
                <div id="folderContent">

                </div>

            <Bugbuddy2 />
            </div>
          </div>
        </Modal>
      </>
    );
  } else if (project === "portfolio") {
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

        <Modal
          onRequestClose={() => setModalIsOpen(false)}
          style={customStyles}
          isOpen={modalIsOpen}
        >
           <div className="folderMain">
            <nav id="tab">
              <div className="folder-tab">
              <h2>Portfolio 1.0</h2>
              </div>
              
            </nav>
            <div id="folderPage">
                <div id="folderHeader">
                <CloseButton className="exitModal" onClick={setModalIsOpenToFalse}></CloseButton>

                </div>
                <div id="folderContent">

                </div>

            <Portfolio />
            </div>
          </div>
        </Modal>
      </>
    );
  } else if (project === "movieApp") {
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

        <Modal
          onRequestClose={() => setModalIsOpen(false)}
          style={customStyles}
          isOpen={modalIsOpen}
        >
         <div className="folderMain">
            <nav id="tab">
              <div className="folder-tab">
              <h2>Movie App</h2>
              </div>
              
            </nav>
            <div id="folderPage">
                <div id="folderHeader">
                <CloseButton className="exitModal" onClick={setModalIsOpenToFalse}></CloseButton>

                </div>
                <div id="folderContent">

                </div>

            <Movieapp />
            </div>
          </div>
        </Modal>
      </>
    );
  }
}

export default CustomModal;
