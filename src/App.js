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
import WIP from './components/pages/WIP';
import Minecraft from './components/pages/Minecraft';
import DigitalArt from './components/pages/DigitalArt';
import Modeling from './components/pages/3DModeling';
import FineArt from './components/pages/FineArt';
import CHOP from './components/pages/CHOP';
import DDesign from './components/pages/2DDesign';
import Projects from './components/pages/projects';
import Portfolio from './components/pages/portfolio';
import GGG from './components/pages/GGG';
import Character from './components/pages/Character';
import Environment from './components/pages/Environment';
import Maya from './components/pages/Maya';
import Duck from './components/pages/Duck';
import Pathtracer from './components/pages/Pathtracer';
import Mermaid from './components/pages/Mermaid';
import Gigajam from './components/pages/Gigajam';


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

                <Route exact path='/wip' element={<WIP />} />

                <Route exact path='/galaxygacha' element={<GalaxyGacha />} />
                <Route exact path='/personalwebsite' element={<PersonalWebsite />} />
                <Route exact path='/islandescapades' element={<IslandEscapades />} />
                <Route exact path='/minecraft' element={<Minecraft />} />
                <Route exact path='/digitalart' element={<DigitalArt />} />
                <Route exact path='/modeling' element={<Modeling />} />
                <Route exact path='/duck' element={<Duck />} />
                <Route exact path='/fineart' element={<FineArt />} />
                <Route exact path='/CHOP' element={<CHOP />} />
                <Route exact path='/2ddesign' element={<DDesign />} />
                <Route exact path='/ggg' element={<GGG />} />
                <Route exact path='/character' element={<Character />} />
                <Route exact path='/environment' element={<Environment />} />
                <Route exact path='/maya' element={<Maya />} />
                <Route exact path='/pathtracer' element={<Pathtracer />} />
                <Route exact path='/mermaid' element={<Mermaid />} />
                <Route exact path='/gigajam' element={<Gigajam />} />
            </Routes>
        </Router>
    </>
  );
}


export default App;
