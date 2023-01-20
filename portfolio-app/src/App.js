// import logo from './logo.svg';
import './App.css';

import { Route, Routes} from 'react-router-dom'

import Home from './pages/HomePage/HomePage'

function App() {
  return (
    <div className="App">
   

      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
      <footer><h1>hi</h1></footer>
    </div>
  );
}

export default App;
