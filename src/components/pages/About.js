import React from 'react';
import '../../App.css';
import Footer from "../Footer";
import { Link } from 'react-router-dom';
import useScrollToTop from '../useScrollToTop';


export default function About() {

    useScrollToTop();

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
                        📚 I study Computer Science and Digital Media Design
                        at the University of Pennsylvania.
                        <br></br><br></br>
                        💻 I’m a Mobile iOS developer for PennLabs, the industry relations coordinator in UPGRADE, Penn’s game development club,
                        and a designer on the creative team for PennApps, Penn’s hackathon club.
                        <br></br><br></br>
                        🕹️ I am passionate about computer programming, computer graphics, human-computer interaction, virtual reality, game and media development.
                        <br></br><br></br>
                        👋 Feel free to look around!
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