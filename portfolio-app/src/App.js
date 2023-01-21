// import logo from './logo.svg';
import "./App.css";

import { Route, Routes, Link } from "react-router-dom";

import Home from "./pages/HomePage/HomePage";
import Projects from "./pages/ProjectPage/ProjectPage";
import bricks from "./assets/images/bricks.webp";
import clouds from "./assets/images/clouds.png"

function App() {
  return (
  
    <div  className="App">
      
      <div className="appMain">
        <div className="homeNav">
          <ul className="navbar">
            <a href="/"><li className="brandIcon">JL</li></a>
            <li className="navLinks">
              <Link>CONTACT</Link>
            </li>
            <li className="navLinks">
              <Link>RESUME</Link>
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
