import React from 'react';
import '../../App.css';
import Cards from "../Cards";
import Footer from "../Footer";

export default function Artwork() {
    return (
        <>
            <div className="content">
                <div className="home">
                    <h1 className="home-heading">ARTWORK</h1>
                    <p className="home-text"><br></br>Leisurely peruse through this gallery of my
                        paintings, digital art, and 3D modeling projects!</p>
                </div>
            </div>
            <Cards />
            <Footer />

        </>
    );
}