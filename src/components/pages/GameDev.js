import React from 'react';
import '../../App.css';
import CardsGD from "../CardsGD";
import Footer from "../Footer";

export default function GameDev() {
    return (
        <>
            <div className="content">
                    <h1 className="home-heading">GAME DEV</h1>
                    <p className="home-text">Check out some games where I've contributed as an artist and coder in personal and collaborative projects!</p>
            </div>
            <CardsGD />
            <Footer />

        </>
    );
}