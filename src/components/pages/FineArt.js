import React from 'react';
import '../../App.css';
import Footer from "../Footer";
import {Link} from "react-router-dom";

export default function FineArt() {
    return (
        <>
            <div className="content">
                <h1 className="sub-heading">Fine Art</h1>
                <p className="home-text"></p>
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
                    <h1 className="fade-in-text">Hi, my name is Christina Qiu.<br></br><br></br></h1>
                    <h2 className="fade-in-text">
                        I am currently studying Digital Media Design/Computer Science
                        at the University of Pennsylvania.
                        <br></br><br></br>
                        I’m interested in the intersection of technology and art, and have been exploring
                        different career paths through various projects.
                        <br></br><br></br>
                        I’m the industry relations coordinator in UPGRADE, Penn’s game development club,
                        and a designer on the creative team for PennApps, Penn’s hackathon club.
                        <br></br><br></br>
                        I love hyper-analyzing media and discussing books, shows, and movies with friends.
                        In my spare time I also enjoy cooking, baking, and hiking.
                        <br></br><br></br>
                        Feel free to look around!
                        <br></br><br></br>
                    </h2>
                    <Link
                        className='resume-link'
                        to='https://docs.google.com/document/d/1T4t-cWnUCJLQr6aDtaHePDn3ETmcyxLqvvNcqZW6Z5Y/edit'
                        target='_blank'
                        aria-label='Resume'
                    >
                        RESUME
                    </Link>
                </div>
            </div>
            <Footer />

        </>
    );
}