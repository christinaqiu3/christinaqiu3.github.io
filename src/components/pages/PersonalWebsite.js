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
                <h1 className="home-heading">PERSONAL WEBSITE</h1>
                <p className="home-text">blah</p>
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
                        First, I sketched out a simple layout for each page.
                        <br></br><br></br>
                        Then, in Figma I started trying out different color schemes.
                        I knew I wanted to incorporate purple because it is my favorite color.
                        I ended up choosing a simple but bold style for the site.
                        <br></br><br></br>
                        Here are a couple different designs I ended up cutting.
                    </h2>
                </div>

                <div className="image-container">

                    <div
                        className={`container ${flashlightOn ? '' : 'flashlight-off'}`}
                        ref={containerRef}
                        onClick={handleContainerClick}
                        style={{ cursor: 'url(images/flashlight-cursor.png), auto' }}
                    >
                        <div className="hover-area" ref={hoverAreaRef}></div>
                        <div className="text-description">
                            <h1 className="home-heading">HOME</h1>
                            <p className="home-text"><br/>Welcome to My Creative Playground: Exploring the Intersection of Art, Games, and Web Design!</p>
                        </div>
                    </div>

                </div>

                <div className="text-container">
                    <h2 className="fade-in-text">
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