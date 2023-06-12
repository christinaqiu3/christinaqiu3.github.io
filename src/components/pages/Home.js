import React, { useEffect, useRef, useState } from 'react';
import '../../App.css';
import Cards from '../Cards';
import Footer from '../Footer';

function Home() {
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
            <Cards/>
            <Footer/>
        </>
    );
}

export default Home;
