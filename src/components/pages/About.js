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
                    <h1 className="fade-in-text">Hi, my name is Christina Qiu.<br></br><br></br></h1>
                    <h2 className="fade-in-text">
                        I am currently studying Digital Media Design/Computer Science
                        at the University of Pennsylvania.

                        <br></br><br></br>

                        I’m the industry relations coordinator in UPGRADE, Penn’s game development club,
                        and a designer on the creative team for PennApps, Penn’s hackathon club.
                        <br></br><br></br>
                        I love hyper-analyzing media and discussing books, shows, and movies with friends.
                        In my spare time, I enjoy cooking, baking, and savoring delicious meals.
                        I also like playing tennis and hiking with my family.
                        <br></br><br></br>
                        I’m interested in the intersection of technology and art, and have been exploring
                        different career paths through various projects.
                        <br></br><br></br>
                        Feel free to look around!

                    </h2>
                </div>
            </div>
            <div className="page-content">

            </div>
            <Footer />
        </>
    );
}