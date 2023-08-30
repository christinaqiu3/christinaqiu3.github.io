import React from 'react';
import '../../App.css';
import Footer from "../Footer";
import useScrollToTop from '../useScrollToTop';

export default function DDesign() {
    useScrollToTop();
    return (
        <>
            <div className="content">
                <h1 className="sub-heading">2D DESIGN</h1>
                <p className="home-text"></p>
            </div>
            <div className="content-abt">
                <div className="image-container">
                    <img
                        src="images/all32.png"
                        alt="marketing"
                        className="profile-image"
                    />

                </div>
                <div className="text-container">
                    <h1 className="fade-in-text">
                    </h1>
                    <h2 className="fade-in-text">

                        I use Canva to promote UPenn's Women in Animation and self-hosted events.
                        I used Microsoft PowerPoint as a Student Research Assistant for Weston Science Scholars to design
                        research posters presented at a conference. <br></br><br></br>
                    </h2>
                </div>




            </div>
            <Footer />

        </>
    );
}