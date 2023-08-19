import React, { useEffect, useRef, useState } from 'react';
import '../../App.css';
import CardsWD from '../CardsWD';
import Footer from '../Footer';

function Home() {


    return (
        <>
            <div className="content">
                <h1 className="home-heading">HOME</h1>
                <p className="home-text">Here are some unfinished projects I am working on currently!</p>
            </div>
            <CardsWD/>
            <Footer/>
        </>
    );
}

export default Home;
