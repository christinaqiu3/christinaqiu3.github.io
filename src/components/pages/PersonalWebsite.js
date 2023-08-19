import React, {useEffect, useRef, useState} from 'react';
import '../../App.css';
import Footer from "../Footer";

export default function PersonalWebsite() {
    const [flashlightOn, setFlashlightOn] = useState(true);

    const containerRef = useRef(null);
    const hoverAreaRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        const hoverArea = hoverAreaRef.current;

        const handleMouseMove = (event) => {
            const containerRect = container.getBoundingClientRect();
            const mouseX = event.clientX - containerRect.left;
            const mouseY = event.clientY - containerRect.top;

            hoverArea.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
        };

        container.addEventListener('mousemove', handleMouseMove);

        return () => {
            container.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    const handleContainerClick = () => {
        setFlashlightOn(!flashlightOn);
    };






    return (
        <>
            <div className="content">
                <h1 className="sub-heading">PERSONAL WEBSITE</h1>
                <p className="home-text"></p>
            </div>

            <div className="content-abt">
                <div className="image-container">
                    <img
                        src="images/allpg.png"
                        alt="Website Design"
                        className="profile-image"
                    />

                </div>

                <div className="text-container">
                    <h2 className="fade-in-text">
                        I really loved this flashlight cursor design, where the user could click to turn it on and off.


                        I even considered adding an on off lightswitch to turn the page to light or dark mode.
                        <br></br><br></br>
                        However, I decided against it because it might make the viewers confused.
                        <br></br><br></br>
                        I am still quite proud of the pixel art I made, as this was my first venture into this art style.
                        <br></br><br></br>
                        Test it out below!
                        <br></br><br></br>
                    </h2>

                    <div
                        className={`container ${flashlightOn ? '' : 'flashlight-off'}`}
                        ref={containerRef}
                        onClick={handleContainerClick}
                        style={{ cursor: 'url(images/flashlight-cursor.png), auto' }}
                    >
                        <div className="hover-area" ref={hoverAreaRef}></div>
                        <div className="text-description">
                            <h1 className="home-heading">:)</h1>
                        </div>
                    </div>


                    <h2 className="fade-in-text">
                        <br></br><br></br>
                        My main goal was to keep this site simple, consistent, and readable.
                    </h2>


                </div>
            </div>


            <Footer />

        </>
    );




}