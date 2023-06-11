import React from 'react';
import '../../App.css';
import Footer from "../Footer";


export default function About() {
    return (
        <>
            <div className="content-abt">
                <div className="image-container">
                    <img
                        src="images/profile-pic.jpeg"
                        alt="Christina Qiu"
                        className="profile-image"
                    />
                </div>
                <div className="text-container">
                    <h1 className="fade-in-text">Hi, my name is Christina Qiu and I am a sophomore at the University of
                        Pennsylvania in the Digital Media Design Program.</h1>
                </div>
            </div>
            <div className="page-content">

            </div>
            <Footer />
        </>
    );
}