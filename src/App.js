
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components/NavBar"
import { HashRouter, Routes, Route } from "react-router-dom";
import Notestate from './context/Notes/Notestate';
import Home from './components/Home';
import About from './components/About';
import Search from "./components/search"
import Read from "./components/read"
import LoadingBar from 'react-top-loading-bar';
import { useState } from 'react';

function App() {
  const [progress, set] = useState(20);
  return (
    <Notestate>
          <HashRouter>
      <NavBar set={set}></NavBar>
          <LoadingBar color='red' progress={progress} />
 
           
          
            <div className="container">
              <Routes>
              <Route exact path='/' element={<Home set={set}/>} />
              <Route exact path='/Home' element={<Home set={set}/>} />
              <Route exact path='/About' element={<About/>} />
              <Route exact path='/Search' element={<Search set={set}/>} />
              <Route exact path='/read' element={<Read/>} set={set}/>
              </Routes>
            </div>



          </HashRouter>
        </Notestate>
      
  );
}

export default App;
