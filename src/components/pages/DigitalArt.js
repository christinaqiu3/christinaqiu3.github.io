import React from 'react';
import '../../App.css';
import Footer from "../Footer";
import {Link} from "react-router-dom";

export default function DigitalArt() {
    return (
        <>
            <div className="content">
                <h1 className="sub-heading">DIGITAL ART</h1>
                <p className="home-text"></p>
            </div>
            <div className="content-abt">
                <div className="image-container">
                    <img
                        src="images/grandparents.jpeg"
                        alt="Grandparents"
                        className="profile-image"
                    />
                    <img
                        src="images/chibi.jpeg"
                        alt="Chibi"
                        className="profile-image"
                    />
                    <img
                        src="images/chrollo.jpeg"
                        alt="Chrollo"
                        className="profile-image"
                    />
                    <img
                        src="images/red.jpeg"
                        alt="Red"
                        className="profile-image"
                    />
                    <img
                        src="images/sun1.jpeg"
                        alt="Sun"
                        className="profile-image"
                    />
                    <img
                        src="images/sun2.png"
                        alt="Sun"
                        className="profile-image"
                    />
                    <img
                        src="images/squidbee.jpeg"
                        alt="Friend"
                        className="profile-image"
                    />
                    <img
                        src="images/surfer.jpeg"
                        alt="Surfer"
                        className="profile-image"
                    />
                    <img
                        src="images/straw.jpeg"
                        alt="Strawberry"
                        className="profile-image"
                    />

                </div>
                <div className="text-container">
                    <h1 className="fade-in-text">grandparents
                        <br></br><br></br>
                        <br></br><br></br>
                        <br></br><br></br>
                        <br></br><br></br>
                        <br></br><br></br>
                        <br></br><br></br>
                        <br></br><br></br>
                        <br></br><br></br>
                        chibi
                    </h1>
                    <h2 className="fade-in-text">
                        I am currently studying Digital Media Design/Computer Science
                        at the University of Pennsylvania.
                    </h2>
                </div>
            </div>
            <Footer />

        </>
    );
}