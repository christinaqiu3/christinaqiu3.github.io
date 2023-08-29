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

                        I use Canva to promote UPenn's Women in Animation Club events and co-create a summer art class.
                        Additionally, I employ Microsoft PowerPoint as a Student Research Assistant, designing
                        research posters and analyzing data for the Weston Science Scholars program. <br></br><br></br>
                    </h2>
                </div>




            </div>
            <Footer />

        </>
    );
}