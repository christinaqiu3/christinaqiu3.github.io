import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import WebDev from './components/pages/WebDev';
import GameDev from './components/pages/GameDev';
import About from './components/pages/About';
import Artwork from './components/pages/Artwork';
import GalaxyGacha from './components/pages/GalaxyGacha';
import IslandEscapades from './components/pages/IslandEscapades';
import PersonalWebsite from './components/pages/PersonalWebsite';
import Alice from './components/pages/Alice';
import DigitalArt from './components/pages/DigitalArt';
import Modeling from './components/pages/3DModeling';
import FineArt from './components/pages/FineArt';
import CHOP from './components/pages/CHOP';
import DDesign from './components/pages/2DDesign';
import Projects from './components/pages/Projects';
import Portfolio from './components/pages/Portfolio';
import GGG from './components/pages/GGG';
import Character from './components/pages/Character';
import Environment from './components/pages/Environment';

function App() {

  return (
    <>
        <Router>
            <Navbar/>
            <Routes>
                <Route exact path="/" element={<Home />}/>
                <Route exact path="/projects" element={<Projects />}/>
                <Route exact path="/portfolio" element={<Portfolio />}/>


                <Route exact path='/gamedev' element={<GameDev />}/>
                <Route exact path='/webdev' element={<WebDev />}/>
                <Route exact path='/artwork' element={<Artwork />}/>
                <Route exact path='/about' element={<About />}/>

                <Route exact path='/galaxygacha' element={<GalaxyGacha />} />
                <Route exact path='/personalwebsite' element={<PersonalWebsite />} />
                <Route exact path='/islandescapades' element={<IslandEscapades />} />
                <Route exact path='/alice' element={<Alice />} />
                <Route exact path='/digitalart' element={<DigitalArt />} />
                <Route exact path='/modeling' element={<Modeling />} />
                <Route exact path='/fineart' element={<FineArt />} />
                <Route exact path='/CHOP' element={<CHOP />} />
                <Route exact path='/2ddesign' element={<DDesign />} />
                <Route exact path='/ggg' element={<GGG />} />
                <Route exact path='/character' element={<Character />} />
                <Route exact path='/environment' element={<Environment />} />
            </Routes>
        </Router>
    </>
  );
}


export default App;
