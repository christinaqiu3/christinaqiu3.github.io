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

                        Student Research Assistant for Weston Science Scholars. Co-writing a paper on Bias and the Brain to be presented at the Eastern Psych Association Conference. Collect data; statistical analysis.

                        <br></br><br></br>

                        A ____ from Women in Animation, Key Club, Creative Writing Club, Asian Student Union, <br></br><br></br>
                    </h2>
                </div>




            </div>
            <Footer />

        </>
    );
}