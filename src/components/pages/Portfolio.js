import '../../App.css';
import CardsA from "../CardsA";
import Footer from "../Footer";
import useScrollToTop from '../useScrollToTop';
import CardsGD from "../CardsGD";

export default function Portfolio() {
    useScrollToTop();
    return (
        <>
            <div className="free-space"><br></br><br></br><br></br><br></br></div>

            <section id="art">
                <h1 className="home-heading">Artwork</h1>
                <CardsA />
            </section>

            <Footer />

        </>
    );
}