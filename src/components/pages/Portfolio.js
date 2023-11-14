import '../../App.css';
import CardsA from "../CardsA";
import Footer from "../Footer";
import useScrollToTop from '../useScrollToTop';
import CardsD from "../CardsD";

export default function Portfolio() {
    useScrollToTop();
    return (
        <>
            <div className="free-space"><br></br><br></br><br></br><br></br></div>

            <section id="3d">
                <h1 className="home-heading">3D Modeling</h1>
                <CardsD />
            </section>

            <section id="art">
                <h1 className="home-heading">Artwork</h1>
                <CardsA />
            </section>

            <Footer />

        </>
    );
}