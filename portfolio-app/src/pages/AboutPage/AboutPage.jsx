import React from "react";
import "./AboutPage.css";

import linkedin from "../../assets/images/linkedin.png";
import github from "../../assets/images/githubicon.png";
import emailicon from "../../assets/images/email.png";
import SLAUGHTER from "../../assets/images/slaughter.jpg";
import thebook from "../../assets/images/thebook.jpg";
import bigfish from "../../assets/images/bigfish.jpg";
import newworld from "../../assets/images/newworld.jpg";
import nope from "../../assets/images/nope.jpg";
import parasite from "../../assets/images/parasite.jpg";
import haine from "../../assets/images/haine.jpg";
import nocountry from "../../assets/images/nocountry.jpg";

function AboutPage() {
  return (
    <div className="aboutMain">
      <div className="aboutSideBar">
        <a href="/">
          <li className="brandIconSide">JL</li>
        </a>

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
            <img src={emailicon} alt="email" />
          </a>
        </li>
      </div>

      {/******** CONTENT *******/}

      <div className="aboutBox">
        <div className="aboutTitle">
          <h1 className="nintendo-font">About Me</h1>
        </div>
        <p className="fontStyle">
          I thoroughly enjoy watching films as well as reading in my free time.
          So below i've included some of my recent recommendations
        </p>

        <div className="bookBox">
          <li>
          <a href="https://en.wikipedia.org/wiki/Brave_New_World">
          <img className="bookImg" src={newworld}></img>
                </a>
          </li>
          <li>
          <a href="https://en.wikipedia.org/wiki/Slaughterhouse-Five">
          <img className="bookImg" src={SLAUGHTER}></img>
                </a>
          </li>
          <li>
          <a href="https://www.penguinrandomhouse.com/books/187467/the-book-by-alan-watts/">
          <img className="bookImg" src={thebook}></img>
                </a>
          </li>
          <li>
          <a href="https://en.wikipedia.org/wiki/Catching_the_Big_Fish">
          <img className="bookImg" src={bigfish}></img>
                </a>
          </li>
        </div>

        <div className="movieBox">
          <li>
          <a href="https://www.imdb.com/title/tt10954984/">
          <img className="movieImg" src={nope}></img>
                </a>
          </li>
          <li>
          <a href="https://www.imdb.com/title/tt6751668/">
          <img className="movieImg" src={parasite}></img>

                </a>
          </li>
          <li>
            <a href="https://www.imdb.com/title/tt0113247/">
            <img className="movieImg" src={haine}></img>
            </a>
          </li>
          <li>
            <a href="https://www.imdb.com/title/tt0477348/">
              <img className="movieImg" src={nocountry}></img>
            </a>
          </li>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
