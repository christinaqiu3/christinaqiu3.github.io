import React from 'react';
import '../../App.css';
import Footer from "../Footer";
import useScrollToTop from '../useScrollToTop';

export default function WIP() {
    useScrollToTop();
    return (
        <>
            <div className="content">
                <h1 className="sub-heading">Work in Progress</h1>
            </div>
            <div className="content-desc">

                    <div>
                    <h2 ><br></br><br></br>

                        Sorry! This page is still under construction 🚧
                        <br></br><br></br>
                        I haven’t had time to put together breakdowns for these projects yet, but they’re coming soon. Check back later for updates!

                    </h2>

                        <div className="projdesc-image-container">
                            <div className="image-with-caption2">
                                <img
                                    src="images/gudetama.jpg"
                                    alt="gudetama"
                                    className="general-image"
                                />
                                <p className="caption">
                                    Me.
                                </p>
                            </div>

                        </div>
                    </div>
            </div>

            <div className="free-space"><br></br></div>

            <Footer />

        </>
    );
}