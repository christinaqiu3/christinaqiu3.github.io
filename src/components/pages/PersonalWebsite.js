import React from 'react';
import '../../App.css';
import Footer from "../Footer";

export default function PersonalWebsite() {
    return (
        <>
            <div className="content">
                <h1 className="home-heading">PERSONAL WEBSITE</h1>
                <p className="home-text">blah</p>
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
                        First, I sketched out on paper a simple website layout.
                        <br></br><br></br>
                        Then, in Figma I started trying out different color schemes.
                        I knew I wanted to incorporate purple because it is my favorite color.
                        I ended up choosing a simple but bold style for the site.
                        <br></br><br></br>
                        Here are a couple different designs I ended up cutting.
                        <br></br><br></br>
                        I really loved this flashlight cursor design, where the user could click to turn it on and off.
                        I even considered adding an on off lightswitch to turn the page to light or dark mode.
                        <br></br><br></br>
                        However, I decided against it because it might make the viewers confused.
                        <br></br><br></br>
                        I am still quite proud of the pixel art I made, as this was my first venture into this artstyle.
                        <br></br><br></br>
                    </h2>
                </div>
            </div>


            <Footer />

        </>
    );
}