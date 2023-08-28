import React from 'react';
import '../../App.css';
import Footer from "../Footer";

export default function IslandEscapades() {
    return (
        <>
            <div className="content">
                <h1 className="sub-heading">ISLAND ESCAPADES</h1>
            </div>

            <div className="content-abt">
                <div className="image-container">
                    <img
                        src="images/all2pg.png"
                        alt="Christina Qiu"
                        className="profile-image"
                    />

                </div>
                <div className="text-container">

                    <h2 className="fade-in-text">
                        As a member of the Forrest Frenzy minigame team and the UI team I created assets and designed the layout of the game.
                        <br></br><br></br>
                        We decided on an island theme for this minigame collection since each game has a different setting.
                        <br></br><br></br>
                        When the player chooses which island to go to the camera pans left or right,
                        as if they are turning the bow of a ship.
                    </h2>
                </div>
            </div>


            <Footer />

        </>
    );
}