import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import { Route, Routes, Link } from "react-router-dom";

import Home from "./pages/HomePage/HomePage";
import Projects from "./pages/ProjectPage/ProjectPage";
import Resume from "./pages/ResumePage/ResumePage"
import Contact from "./pages/ContactPage/ContactPage"
import About from "./pages/AboutPage/AboutPage";



function App() {
  
  return (
  
    <div  className="App">
      
      <div className="appMain">
        <div className="homeNav">
          <ul className="navbarMain">
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
            <li className="navLinks">
              <Link to="/">HOME</Link>
            </li>
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
      <div className="footerInfo">
      <h3 className="copyright">+1-518-720-5073</h3>
      <h3 className="copyright">JOSHLAWLOR1@GMAIL.COM</h3>
      <h3 className="copyright">@2023 JL. ALL RIGHTS RESERVED</h3>

      </div>

      <footer  className="footer">
      </footer>
      <div className="animatedBackground">
      </div>
    </div>
  );
}

export default App;
