import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import WebDev from './components/pages/WebDev';
import GameDev from './components/pages/GameDev';
import About from './components/pages/About';
import Artwork from './components/pages/Artwork';

function App() {
  return (
    <>
        <Router>
            <Navbar/>
            <Routes>
                <Route exact path="/" element={<Home />}/>
                <Route exact path='/gamedev' element={<GameDev />}/>
                <Route exact path='/webdev' element={<WebDev />}/>
                <Route exact path='/artwork' element={<Artwork />}/>
                <Route exact path='/about' element={<About />}/>
            </Routes>
        </Router>
    </>
  );
}

export default App;
