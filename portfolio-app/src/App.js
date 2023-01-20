// import logo from './logo.svg';
import './App.css';

import { Route, Routes} from 'react-router-dom'

import Home from './pages/HomePage/HomePage'

import bricks from "./assets/images/bricks.webp"

function App() {
  return (
    <div className="App">
   

      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
      <footer className='footer'>
      <li className="brandIconFooter">JL</li>
        <h3 className='copyright'>@2023 JL. ALL RIGHTS RESERVED</h3></footer>
    </div>
  );
}

export default App;
