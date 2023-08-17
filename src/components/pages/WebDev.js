import React from 'react';
import '../../App.css';
import CardsWD from "../CardsWD";
import Footer from "../Footer";
import {Link} from "react-router-dom";

export default function WebDev() {
    return (
        <>
            <div className="content">
                    <h1 className="home-heading">WEB DEV</h1>
                    <p className="home-text">Scroll through
                        my collection of Figma designs and coded sites, including this portfolio website!</p>
            </div>
            <Link to="https://2023f.pennapps.com/">
                <CardsWD />
            </Link>
            <Footer />

        </>
    );
}