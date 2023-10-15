import React from 'react';
import '../../App.css';
import CardsA from "../CardsA";
import Footer from "../Footer";
import useScrollToTop from '../useScrollToTop';

export default function Artwork() {
    useScrollToTop();
    return (
        <>
            <div className="content">
                <h1 className="home-heading">ARTWORK</h1>
                <p className="home-text">Leisurely peruse through this gallery of my
                        paintings, digital art, and 3D modeling projects!</p>
            </div>
            <CardsA />
            <Footer />

        </>
    );
}