import React from 'react';
import '../../App.css';
import Cards from "../Cards";
import Footer from "../Footer";

export default function GameDev() {
    return (
        <>
            <div className="content">
                <div className="home">
                    <h1 className="home-heading">GAME DEV</h1>
                    <p className="home-text"><br></br>Check out some games where I've contributed as an artist and coder in personal and collaborative projects!</p>
                </div>
            </div>
            <Cards />
            <Footer />

        </>
    );
}