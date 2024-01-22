import React, {useState, useEffect} from "react";
import '../../App.css';
import Footer from '../Footer';
import useScrollToTop from '../useScrollToTop';
import {Link} from "react-router-dom";

function Maya() {

    useScrollToTop();

    return (
        <>
            <div className="content">
                <h1 className="sub-heading">Flower Generator Maya Plugin</h1>
                <p className="home-text"></p>
            </div>
            <div className="content-abt">
                <div className="single-col-text-container-home">
                    {/*<h1 className="page-bottom-heading"><br></br>Gaslight Gatekeep Girlboss<br></br><br></br></h1>*/}
                    <h2 className="home-sub-heading"><br></br>
                        Flower generator plugin for Maya. Users can customize a flower design and generate multiple flowers on selected vertices.
                        There is a randomize functionality to add a more natural looking variation between flowers.
                        <br></br><br></br>
                    </h2>
                    <div className="center-div">
                        <iframe
                            title="Gaslight Gatekeep Girlboss"
                            src="https://player.vimeo.com/video/884532702?badge=0&amp;autopause=0&amp;quality_selector=1&amp;player_id=0&amp;app_id=58479"
                            width="640"
                            height="564"
                            frameBorder="0"
                            allow="autoplay; loop; fullscreen"
                            allowFullScreen
                        ></iframe>
                    </div>

                    <h2 className="home-sub-heading"><br></br>
                        To showcase my learning process, I have included below some tools I made from tutorials
                        <br></br><br></br>
                    </h2>
                </div>
            </div>

            <div className="free-space"><br></br></div>

            <Footer />
        </>
    );
}

export default Maya;
