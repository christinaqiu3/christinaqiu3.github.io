import React from 'react';
import '../../App.css';
import Footer from "../Footer";
import useScrollToTop from '../useScrollToTop';

export default function CHOP() {
    useScrollToTop();
    return (
        <>
            <div className="content">
                <h1 className="sub-heading">SLEEP STUDY SERIOUS GAME</h1>
            </div>

            <div className="content-abt">
                <div className="image-container">
                    <img
                        src="images/all4.png"
                        alt="sleep study"
                        className="profile-image"
                    />

                </div>
                <div className="text-container">

                    <h2 className="fade-in-text">
                        I’m currently working with a team to develop a game for the Children’s Hospital of Pennsylvania. The gameplay will demonstrate to kids with down syndrome what they are consenting to when they agree to participate in a sleep study. Since participants are underage, there is concern that they may not comprehend the big block of text on the consent form that they sign off on. Our interactive game is intended to educate the children about the step by step process of a sleep study that they might have to go through.
                        <br></br><br></br>
                        This is an iterative process, working with families of kids with down syndrome and taking into consideration feedback about text font, color choice, and gameplay.

                    </h2>
                </div>
            </div>


            <Footer />

        </>
    );
}