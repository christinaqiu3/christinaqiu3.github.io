
import '../../App.css';
import CardsGD from "../CardsGD";
import CardsWD from "../CardsWD";
import CardsTools from "../CardsTools";
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
            <div className="free-space"><br></br><br></br><br></br></div>

            <section id="cg">
                <h1 className="page-title-heading"> </h1>
                <h1 className="page-title-heading">Computer Graphics</h1>
                <CardsCG />
            </section>

            <section id="tools">
                <h1 className="page-title-heading"><br></br><br></br>CG Tools</h1>
                <CardsTools />
            </section>

            {/*<section id="game">*/}


            {/*    <h1 className="page-title-heading">Game Development</h1>*/}
            {/*    <CardsGD />*/}
            {/*</section>*/}

            <section id="web">
                <h1 className="page-title-heading"><br></br><br></br>Web Development</h1>
                <CardsWD />
            </section>

            <div className="free-space"><br></br><br></br><br></br></div>
            <Footer />

        </>
    );
}