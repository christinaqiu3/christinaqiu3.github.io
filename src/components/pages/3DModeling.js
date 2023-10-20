import React from 'react';
import '../../App.css';
import Footer from "../Footer";
import useScrollToTop from '../useScrollToTop';

export default function Modeling() {

    useScrollToTop();

    return (
        <>
            <div className="content">
                <h1 className="sub-heading">3D MODELING</h1>
                <p className="home-text"></p>
            </div>

            <div className="content-abt">
                <div className="single-col-text-container">
                    <h1 className="fade-in-text"><br></br>UPGRADE Graphics Pipeline Speedrun</h1>
                    <h2 className="fade-in-text">
                        <br></br>
                        Collaborated in a team of 3 to render a character walking cycle using Blender, Rigify, and Unreal.
                        Self taught and completed an mp3 with scripted camera movement in 6 hours.
                        <br></br><br></br>
                    </h2>
                    <video controls autoPlay loop muted width="1000">
                        <source src="images/cig.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
            <Footer />

        </>
    );
}