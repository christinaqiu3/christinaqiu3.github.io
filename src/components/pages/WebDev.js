import React, { useEffect } from 'react';
import '../../App.css';
import CardsWD from "../CardsWD";
import Footer from "../Footer";
import useScrollToTop from '../useScrollToTop';

export default function WebDev() {
    useScrollToTop();
    return (
        <>
            <div className="content">
                    <h1 className="home-heading">WEB DEV</h1>
                    <p className="home-text">Scroll through
                        my collection of Figma designs and coded sites, including this portfolio website!</p>
            </div>
            <CardsWD />
            <Footer />

        </>
    );
}