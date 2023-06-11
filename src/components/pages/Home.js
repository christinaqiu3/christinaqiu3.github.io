import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Footer from '../Footer';

function Home() {
    return (
        <>
            <div className="content">
                <div className="home">
                    <h1 className="home-heading">HOME</h1>
                    <p className="home-text"><br></br>Welcome to My Creative Playground:
                        Exploring the Intersection of Art, Games, and Web Design!</p>
                </div>
            </div>
                <Cards />
                <Footer />

        </>
    );
}

export default Home;