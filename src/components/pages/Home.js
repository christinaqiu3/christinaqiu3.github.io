
import '../../App.css';
import Footer from '../Footer';
import useScrollToTop from '../useScrollToTop';
import {Link} from "react-router-dom";
import CardsGD from "../CardsGD";
import CardsWD from "../CardsWD";
import CardsA from "../CardsA";

function Home() {

    useScrollToTop();

    return (
        <>
            <div className="content-abt">
                <div className="image-container">
                    <img
                        src="images/profile-pic.jpeg"
                        alt="Christina Qiu"
                        className="profile-image"
                    />

                </div>
                <div className="text-container" id="about">
                    <h1 className="fade-in-text">Hi, my name is Christina Qiu.</h1>
                    <h2 className="fade-in-text">
                        <br></br>
                        📚 I study Computer Science and Digital Media Design
                        at the University of Pennsylvania.
                        <br></br><br></br>
                        💻 I’m a Mobile iOS developer for PennLabs, the industry relations coordinator in UPGRADE, Penn’s game development club,
                        and a designer on the creative team for PennApps, Penn’s hackathon club.
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


            <Footer />
        </>
    );
}

export default Home;
