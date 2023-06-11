import React from 'react';
import '../../App.css';
import Cards from "../Cards";
import Footer from "../Footer";

export default function WebDev() {
    return (
        <>
            <div className="content">
                <div className="home">
                    <h1 className="home-heading">WEB DEV</h1>
                    <p className="home-text"><br></br>Scroll through
                        my collection of Figma designs and coded sites, including this portfolio website!</p>
                </div>
            </div>
            <Cards />
            <Footer />

        </>
    );
}