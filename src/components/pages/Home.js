import {useState, useEffect} from "react";
import '../../App.css';
import Footer from '../Footer';
import useScrollToTop from '../useScrollToTop';
import {Link} from "react-router-dom";
import CardsGD from "../CardsGD";
import CardsWD from "../CardsWD";
import CardsA from "../CardsA";
import CardsCG from "../CardsCG";

function Home() {

    useScrollToTop();

    const [profileImage, setProfileImage] = useState('images/profileF.JPG');

    useEffect(() => {
        const handleResize = () => {
            const screenWidth = window.innerWidth;
            if (screenWidth < 930) {
                setProfileImage('images/profileF.JPG');
            } else {
                setProfileImage('images/profileF.JPG');
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
            <div className="content-abt">
                <div className="image-container">

                    <img
                        src= {profileImage}
                        alt="Christina Qiu"
                        className="profile-image"
                    />
                    {/*<div className="free-space"><br></br></div>*/}
                    {/*<Link*/}
                    {/*    className='social-icon-link email'*/}
                    {/*    to='mailto:chuu@seas.upenn.edu'*/}
                    {/*    target='_blank'*/}
                    {/*    aria-label='Email'*/}
                    {/*>*/}
                    {/*    <i className='fas fa-envelope-open-text' />*/}
                    {/*</Link>*/}
                    {/*<Link*/}
                    {/*    className='social-icon-link linkedin'*/}
                    {/*    to='https://www.linkedin.com/in/christina-qiu-6094301b6/'*/}
                    {/*    target='_blank'*/}
                    {/*    aria-label='LinkedIn'*/}
                    {/*>*/}
                    {/*    <i className='fab fa-linkedin' />*/}
                    {/*</Link>*/}
                    {/*<Link*/}
                    {/*    className='social-icon-link github'*/}
                    {/*    to='https://github.com/christinaqiu3'*/}
                    {/*    target='_blank'*/}
                    {/*    aria-label='GitHub'*/}
                    {/*>*/}
                    {/*    <i className='fab fa-github' />*/}
                    {/*</Link>*/}
                    {/*<Link*/}
                    {/*    className='social-icon-link resume'*/}
                    {/*    to='https://docs.google.com/document/d/1T4t-cWnUCJLQr6aDtaHePDn3ETmcyxLqvvNcqZW6Z5Y/edit#heading=h.s7eubbvdu4vb'*/}
                    {/*    target='_blank'*/}
                    {/*    aria-label='Resume'*/}
                    {/*>*/}
                    {/*    <i className='fas fa-file-invoice' />*/}
                    {/*</Link>*/}

                </div>
                <div className="text-container" id="about">
                    <h1 className="fade-in-text">Hi, I'm Christina!</h1>
                    <h2 className="fade-in-text">
                        <br></br>
                        ✦ &nbsp; I am a sophomore at the University of Pennsylvania majoring in&nbsp;
                        <Link
                            className='resume-link'
                            to='http://cg.cis.upenn.edu/dmd.html'
                            target='_blank'
                            aria-label='DMD'
                        >
                            Digital Media Design
                        </Link>
                        , an interdisciplinary program that combines computer science and fine arts.

                        <br></br><br></br>
                        ✦&nbsp; Currently I’m the industry relations coordinator and a game developer for&nbsp;
                        <Link
                            className='resume-link'
                            to='https://magazine.seas.upenn.edu/fall-2022/upgrade/'
                            target='_blank'
                            aria-label='UPGRADE'
                        >
                            UPGRADE
                        </Link>
                        ,
                        and a Mobile iOS developer for&nbsp;
                        <Link
                            className='resume-link'
                            to='https://pennlabs.org/'
                            target='_blank'
                            aria-label='PennLabs'
                        >
                            PennLabs
                        </Link>.
                        <br></br><br></br>
                        ✦&nbsp; I am especially interested in computer graphics, animation, games, virtual reality, and interactive technologies.
                        

                        <br></br><br></br>

                    </h2>
                </div>
                <div className="single-col-text-container-home">
                    <h1 className="home-heading"><br></br>Demo Reel</h1>
                    {/*<h2 className="home-sub-heading">*/}
                    {/*    last updated: Oct 2023*/}
                    {/*    <br></br><br></br>*/}
                    {/*</h2>*/}
                    <iframe
                        title="demo reel"
                        src="https://player.vimeo.com/video/875398564?h=856ee31f75"
                        width="640"
                        height="564"
                        frameBorder="0"
                        allow="autoplay; loop; fullscreen"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>

            <div className="free-space"><br></br></div>

            <Footer />
        </>
    );
}

export default Home;
