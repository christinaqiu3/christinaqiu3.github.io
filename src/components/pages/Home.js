import {useState, useEffect} from "react";
import '../../App.css';
import Footer from '../Footer';
import useScrollToTop from '../useScrollToTop';
import {Link} from "react-router-dom";
import CardsGD from "../CardsGD";
import CardsWD from "../CardsWD";
import CardsA from "../CardsA";

function Home() {

    useScrollToTop();

    const [profileImage, setProfileImage] = useState('images/ProfilePHalf.JPG');

    useEffect(() => {
        const handleResize = () => {
            const screenWidth = window.innerWidth;
            if (screenWidth < 930) {
                setProfileImage('images/ProfilePHalf.JPG');
            } else {
                setProfileImage('images/ProfilePFull.JPG');
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

                </div>
                <div className="text-container" id="about">
                    <h1 className="fade-in-text">Hi, my name is Christina Qiu.</h1>
                    <h2 className="fade-in-text">
                        <br></br>
                        📚 I study Computer Science and&nbsp;
                        <Link
                            className='resume-link'
                            to='http://cg.cis.upenn.edu/dmd.html'
                            target='_blank'
                            aria-label='DMD'
                        >
                            Digital Media Design
                        </Link>
                        &nbsp;at the University of Pennsylvania.
                        <br></br><br></br>
                        💻 Currently I’m a Mobile iOS developer for&nbsp;
                        <Link
                            className='resume-link'
                            to='https://pennlabs.org/'
                            target='_blank'
                            aria-label='PennLabs'
                        >
                            PennLabs
                        </Link>

                        , the industry relations coordinator and a game developer for&nbsp;
                        <Link
                            className='resume-link'
                            to='https://magazine.seas.upenn.edu/fall-2022/upgrade/'
                            target='_blank'
                            aria-label='UPGRADE'
                        >
                            UPGRADE
                        </Link>
                        ,
                        and a designer on the creative team for&nbsp;
                        <Link
                            className='resume-link'
                            to='https://pennapps.com/'
                            target='_blank'
                            aria-label='PennApps'
                        >
                            PennApps
                        </Link>
                        .
                        <br></br><br></br>
                        🕹️ I am passionate about computer programming, computer graphics, human-computer interaction, virtual reality, game and media development.
                        <br></br><br></br>
                        👋 Feel free to look around!

                        <br></br><br></br>
                        <Link
                            className='social-icon-link email'
                            to='mailto:chuu@seas.upenn.edu'
                            target='_blank'
                            aria-label='Email'
                        >
                            <i className='fas fa-envelope-open-text' />
                        </Link>
                        <Link
                            className='social-icon-link linkedin'
                            to='https://www.linkedin.com/in/christina-qiu-6094301b6/'
                            target='_blank'
                            aria-label='LinkedIn'
                        >
                            <i className='fab fa-linkedin' />
                        </Link>
                        <Link
                            className='social-icon-link github'
                            to='https://github.com/christinaqiu3'
                            target='_blank'
                            aria-label='GitHub'
                        >
                            <i className='fab fa-github' />
                        </Link>
                    </h2>
                </div>
                <div className="single-col-text-container">
                    <h1 className="home-heading"><br></br>Demo Reel</h1>
                    <h2 className="home-sub-heading">
                        last updated: Oct 2023
                        <br></br><br></br>
                    </h2>
                    <video controls autoPlay loop muted width="1000">
                        <source src="images/demoreelF copy.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>

            <section id="game">
            <h1 className="home-heading">Game Dev</h1>
            <CardsGD />
            </section>

            <section id="web">
            <h1 className="home-heading">Web Dev</h1>
            <CardsWD />
            </section>

            <section id="art">
            <h1 className="home-heading">Artwork</h1>
            <CardsA />
            </section>

            <h1 className="home-heading"><br></br></h1>

            <Footer />
        </>
    );
}

export default Home;
