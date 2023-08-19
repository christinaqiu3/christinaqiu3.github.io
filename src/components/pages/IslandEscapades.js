import React from 'react';
import '../../App.css';
import Footer from "../Footer";
import {Link} from "react-router-dom";

export default function IslandEscapades() {
    return (
        <>
            <div className="content">
                <h1 className="sub-heading">ISLAND ESCAPADES</h1>
            </div>

            <div className="content-abt">
                <div className="image-container">
                    <img
                        src="images/profile-pic.jpeg"
                        alt="Christina Qiu"
                        className="profile-image"
                    />

                </div>
                <div className="text-container">

                    <h2 className="fade-in-text">
                        We decided on an island theme for this minigame collection, since each has a different setting.
                        <br></br><br></br>
                        I created all the island designs and the general layout of the game.
                        <br></br><br></br>
                        When the player chooses which island to go to the camera pans left or right,
                        as if they are turning the bow of a ship.
                        <br></br><br></br>
                    </h2>
                </div>
            </div>


            <Footer />

        </>
    );
}