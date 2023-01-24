// import logo from './logo.svg';
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import { Route, Routes, Link } from "react-router-dom";

import Home from "./pages/HomePage/HomePage";
import Projects from "./pages/ProjectPage/ProjectPage";
import Resume from "./pages/ResumePage/ResumePage"
import Contact from "./pages/ContactPage/ContactPage"
import About from "./pages/AboutPage/AboutPage";
import bricks from "./assets/images/bricks.webp";
import clouds from "./assets/images/clouds.png"

function App() {
  return (
  
    <div  className="App">
      
      <div className="appMain">
        <div className="homeNav">
          <ul className="navbarMain">
            {/* <a href="/"><li className="brandIcon">JL</li></a> */}
            <li className="navLinks">
              <Link to="/contact">CONTACT</Link>
            </li>
            <li className="navLinks">
              <Link to="/about">ABOUT ME</Link>
            </li>
            <li className="navLinks">
              <Link to="/resume">RESUME</Link>
            </li>
            <li className="navLinks">
              <Link to="/projects">PROJECTS</Link>
            </li>
            {/* <li className="navLinks">
            <Link>joshlawlor1@gmail.com</Link>
          </li> */}
          </ul>
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </div>
      <footer  className="footer">
        <li className="brandIconFooter">JL</li>
        <h3 className="copyright">@2023 JL. ALL RIGHTS RESERVED</h3>
      </footer>
      <div className="animatedBackground">
      </div>
    </div>
  );
}

export default App;
