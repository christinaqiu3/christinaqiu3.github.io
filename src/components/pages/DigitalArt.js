
import '../Art.css';
import Footer from "../Footer";
import useScrollToTop from '../useScrollToTop';

export default function DigitalArt() {
    useScrollToTop();
    return (
        <>
            <div className="art-content">
                <h1 className="art-sub-heading">Digital Art</h1>
                <p className="art-home-text"></p>
            </div>
            <div className="art-content-abt">
                <div className="art-image-container">
                    <img
                        src="images/grandparents.jpeg"
                        alt="Grandparents"
                        className="art-general-image"
                    />

                </div>
                <div className="art-text-container">
                    <h1 className="art-fade-in-text">Grandparents
                    </h1>
                    <h2 className="art-fade-in-text">
                    <br></br>
                        A drawing I made for my grandparents for Christmas.<br></br><br></br>
                    </h2>
                </div>




                <div className="art-image-container">
                    <img
                        src="images/chibi.jpeg"
                        alt="Chibi"
                        className="art-general-image"
                    />

                </div>
                <div className="art-text-container">
                    <h1 className="art-fade-in-text">Chibi Me
                    </h1>
                    <h2 className="art-fade-in-text">
                    <br></br>
                        A stylized drawing of me inspired by Hizgi's artstyle.<br></br><br></br>
                    </h2>
                </div>







                <div className="art-image-container">
                    <img
                        src="images/chrollo.jpeg"
                        alt="Chrollo"
                        className="art-general-image"
                    />

                </div>
                <div className="art-text-container">
                    <h1 className="art-fade-in-text">Chrollo
                    </h1>
                    <h2 className="art-fade-in-text">
                    <br></br>
                        Fanart of a character from Hunter X Hunter.<br></br><br></br>
                    </h2>
                </div>






                <div className="art-image-container">
                    <img
                        src="images/red.jpeg"
                        alt="Red"
                        className="art-general-image"
                    />

                </div>
                <div className="art-text-container">
                    <h1 className="art-fade-in-text">Red
                    </h1>
                    <h2 className="art-fade-in-text">
                    <br></br>
                        An original character I made inspired by Little Red Riding Hood.<br></br><br></br>
                    </h2>
                </div>




                <div className="art-image-container">
                    <img
                        src="images/sun.jpeg"
                        alt="Sun"
                        className="art-general-image"
                    />

                </div>
                <div className="art-text-container">
                    <h1 className="art-fade-in-text">Sun
                    </h1>
                    <h2 className="art-fade-in-text">
                    <br></br>
                        A study of a selfie I took with cool lighting.<br></br><br></br>
                    </h2>
                </div>





                <div className="art-image-container">
                    <img
                        src="images/squidbee.jpeg"
                        alt="Friend"
                        className="art-general-image"
                    />

                </div>
                <div className="art-text-container">
                    <h1 className="art-fade-in-text">Friend
                    </h1>
                    <h2 className="art-fade-in-text">
                    <br></br>
                        A drawing I made for a friend's birthday.
                        She always wears a wool sweatshirt so she reminds me of a sheep.
                        She loves nature and bees.<br></br><br></br>
                    </h2>
                </div>


                <div className="art-image-container">
                    <img
                        src="images/surfer.jpeg"
                        alt="Surfer"
                        className="art-general-image"
                    />

                </div>
                <div className="art-text-container">
                    <h1 className="art-fade-in-text">Surfer
                    </h1>
                    <h2 className="art-fade-in-text">
                    <br></br>
                        I like the shading in the hair. I had fun making the highlights.<br></br><br></br>
                    </h2>
                </div>



                <div className="art-image-container">
                    <img
                        src="images/straw.jpeg"
                        alt="Strawberry"
                        className="art-general-image"
                    />

                </div>
                <div className="art-text-container">
                    <h1 className="art-fade-in-text">Strawberry Lemonade
                    </h1>
                    <h2 className="art-fade-in-text">
                    <br></br>
                        I like this slightly muted color palette.<br></br><br></br>
                    </h2>
                </div>




            </div>
            <Footer />

        </>
    );
}