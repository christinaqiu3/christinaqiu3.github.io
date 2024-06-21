import React, {useState, useEffect} from "react";
import '../../App.css';
import Footer from '../Footer';
import CardItem from '../CardItem';
import useScrollToTop from '../useScrollToTop';
import {clientinfo} from '../../clientinfo.js';

const p = await clientinfo();


function GGG() {

    useScrollToTop();

    const [profileImage, setProfileImage] = useState('images/flower.JPG');

    useEffect(() => {
        const handleResize = () => {
            const screenWidth = window.innerWidth;
            if (screenWidth < 930) {
                setProfileImage('images/flower.JPG');
            } else {
                setProfileImage('images/flower.jpg');
            }
        };

        handleResize(); // Call the function once to set the initial state

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
            <div className="content">
                <h1 className="sub-heading">Gaslight Gatekeep Girlboss</h1>
                <p className="home-text"></p>
            </div>
            <div className="content-abt">
                <div className="single-col-text-container-home">
                    {/*<h1 className="page-bottom-heading"><br></br>Gaslight Gatekeep Girlboss<br></br><br></br></h1>*/}
                    <h2 className="home-sub-heading"><br></br>
                        A rhythm game made for the UPGRADE 2023 Halloween Game Jam where I served as a programmer, writer, and artist.
                        Watch an example playthrough below, and be sure to turn on the sound! There are multiple routes you can choose 🤭
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
                </div>
            </div>

            <div className='cards'>
                <div className='cards__container'>
                    <div className='cards__wrapper'>
                        <ul className='cards__items'>
                            <CardItem
                                src='images/mineCROP.mp4'
                                //Coded player physics and procedural cave generation.
                                text={p.name}
                                skills={['C++', 'OpenGL', 'Qt', 'GLSL']}
                                label={p.description}
                                path='https://vimeo.com/901575818?share=copy'
                                fillertext='y'
                                iconRead='/minecraft'
                                iconLink='https://vimeo.com/901575818?share=copy'
                                //iconCode='\chop'
                            />
                        </ul>
                    </div>
                </div>
            </div>

            <div className="free-space"><br></br></div>


            <Footer/>
        </>
    );
}

export default GGG;
