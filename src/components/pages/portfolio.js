import '../../App.css';
import CardsA from "../CardsA";
import Footer from "../Footer";
import useScrollToTop from '../useScrollToTop';
import CardsD from "../CardsD";

export default function Portfolio() {
    useScrollToTop();
    return (
        <>
            <div className="free-space"><br></br><br></br><br></br></div>

            <section id="3d">
                <h1 className="page-title-heading"> </h1>
                <h1 className="page-title-heading">3D Modeling</h1>
                <CardsD />
            </section>

            <section id="art">
                <h1 className="page-title-heading"><br></br><br></br>Artwork</h1>
                <CardsA />
            </section>
            <div className="free-space"><br></br><br></br><br></br></div>
            <Footer />

        </>
    );
}