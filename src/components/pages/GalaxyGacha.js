import React from 'react';
import '../../App.css';
import Footer from "../Footer";
import {Link} from "react-router-dom";

export default function GalaxyGacha() {
    return (
        <>
            <div className="content">
                <h1 className="sub-heading">GALAXY GACHA</h1>
                <p className="home-text"></p>
            </div>
            <div className="content-abt">

                <div className="image-container">
                    <img
                        src="images/all1pg.png"
                        alt="Galaxy Gacha"
                        className="profile-image"
                    />

                </div>
                <div className="text-container">
                    <h2 className="fade-in-text">
                        The UPGRADE club divided into groups of 3-5 members to design monster characters and develop a minigame for each.
                        <br></br><br></br>
                        In the Galaxy Gacha, players use coins to roll for monsters, and by playing the corresponding minigame, they can earn more coins to roll again.
                        <br></br><br></br>
                        <br></br>
                    </h2>

                    <h1 className="fade-in-text">Vampyropoda</h1>
                    <h2 className="fade-in-text">
                        <br></br>
                        A centuries old octopus vampire
                        who sinks shins to suck the life
                        force of her victims and steal
                        their treasure
                        <br></br><br></br>
                        She loves gold and gems. Help
                        her collect the sunken treasures
                        before they drift away and are lost forever!
                        <br></br><br></br>
                    </h2>
                    <video controls autoPlay loop muted width="515">
                        <source src="images/mon-vid.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>


                </div>
            </div>
            <Footer />

        </>
    );
}