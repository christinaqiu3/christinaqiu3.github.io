
import '../../App.css';
import CardsGD from "../CardsGD";
import CardsWD from "../CardsWD";
import Footer from "../Footer";
import useScrollToTop from '../useScrollToTop';
import CardsCG from "../CardsCG";

export default function Projects() {
    useScrollToTop();
    return (
        <>



            {/*<section id="graphics">*/}
            {/*    <h1 className="home-heading"><br></br><br></br>Computer Graphics</h1>*/}
            {/*    <CardsCG />*/}
            {/*</section>*/}
            <div className="free-space"><br></br><br></br><br></br><br></br></div>

            <section id="cg">
                <h1 className="home-heading">Computer Graphics</h1>
                <CardsCG />
            </section>

            <section id="game">
                <h1 className="home-heading">Game Development</h1>
                <CardsGD />
            </section>

            <section id="web">
                <h1 className="home-heading">Web Development</h1>
                <CardsWD />
            </section>


            <Footer />

        </>
    );
}