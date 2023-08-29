import React from 'react';
import '../../App.css';
import Footer from "../Footer";
import useScrollToTop from '../useScrollToTop';

export default function MarketingDesign() {
    useScrollToTop();
    return (
        <>
            <div className="content">
                <h1 className="sub-heading">MARKETING DESIGN</h1>
                <p className="home-text"></p>
            </div>
            <div className="content-abt">
                <div className="image-container">
                    <img
                        src="images/all3.png"
                        alt="marketing"
                        className="profile-image"
                    />

                </div>
                <div className="text-container">
                    <h1 className="fade-in-text">
                    </h1>
                    <h2 className="fade-in-text">
                        A ____ from Women in Animation, Key Club, Creative Writing Club, Asian Student Union, <br></br><br></br>
                    </h2>
                </div>




            </div>
            <Footer />

        </>
    );
}