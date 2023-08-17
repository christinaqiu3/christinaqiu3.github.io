import React from 'react';
import '../../App.css';
import CardsA from "../CardsA";
import Footer from "../Footer";

export default function Artwork() {
    return (
        <>
            <div className="content">
                <h1 className="home-heading">GAME DEV</h1>
                <p className="home-text">Leisurely peruse through this gallery of my
                        paintings, digital art, and 3D modeling projects!</p>
            </div>
            <CardsA />
            <Footer />

        </>
    );
}