
import '../../App.css';
import Footer from "../Footer";
import useScrollToTop from '../useScrollToTop';

export default function DigitalArt() {
    useScrollToTop();
    return (
        <>
            <div className="content">
                <h1 className="sub-heading">DIGITAL ART</h1>
                <p className="home-text"></p>
            </div>
            <div className="content-abt">
                <div className="image-container">
                    <img
                        src="images/grandparents.jpeg"
                        alt="Grandparents"
                        className="general-image"
                    />

                </div>
                <div className="text-container">
                    <h1 className="fade-in-text">Grandparents
                    </h1>
                    <h2 className="fade-in-text">
                        A drawing I made for my grandparents for Christmas.<br></br><br></br>
                    </h2>
                </div>




                <div className="image-container">
                    <img
                        src="images/chibi.jpeg"
                        alt="Chibi"
                        className="general-image"
                    />

                </div>
                <div className="text-container">
                    <h1 className="fade-in-text">Chibi Me
                    </h1>
                    <h2 className="fade-in-text">
                        A stylized drawing of me inspired by Hizgi's artstyle.<br></br><br></br>
                    </h2>
                </div>







                <div className="image-container">
                    <img
                        src="images/chrollo.jpeg"
                        alt="Chrollo"
                        className="general-image"
                    />

                </div>
                <div className="text-container">
                    <h1 className="fade-in-text">Chrollo
                    </h1>
                    <h2 className="fade-in-text">
                        Fanart of a character from Hunter X Hunter.<br></br><br></br>
                    </h2>
                </div>






                <div className="image-container">
                    <img
                        src="images/red.jpeg"
                        alt="Red"
                        className="general-image"
                    />

                </div>
                <div className="text-container">
                    <h1 className="fade-in-text">Red
                    </h1>
                    <h2 className="fade-in-text">
                        An original character I made inspired by Little Red Riding Hood.<br></br><br></br>
                    </h2>
                </div>




                <div className="image-container">
                    <img
                        src="images/sun.jpeg"
                        alt="Sun"
                        className="general-image"
                    />

                </div>
                <div className="text-container">
                    <h1 className="fade-in-text">Sun
                    </h1>
                    <h2 className="fade-in-text">
                        A study of a selfie I took with cool lighting.<br></br><br></br>
                    </h2>
                </div>





                <div className="image-container">
                    <img
                        src="images/squidbee.jpeg"
                        alt="Friend"
                        className="general-image"
                    />

                </div>
                <div className="text-container">
                    <h1 className="fade-in-text">Friend
                    </h1>
                    <h2 className="fade-in-text">
                        A drawing I made for a friend's birthday.
                        She always wears a wool sweatshirt so she reminds me of a sheep.
                        She loves nature and bees.<br></br><br></br>
                    </h2>
                </div>


                <div className="image-container">
                    <img
                        src="images/surfer.jpeg"
                        alt="Surfer"
                        className="general-image"
                    />

                </div>
                <div className="text-container">
                    <h1 className="fade-in-text">Surfer
                    </h1>
                    <h2 className="fade-in-text">
                        I like the shading in the hair. I had fun making the highlights.<br></br><br></br>
                    </h2>
                </div>



                <div className="image-container">
                    <img
                        src="images/straw.jpeg"
                        alt="Strawberry"
                        className="general-image"
                    />

                </div>
                <div className="text-container">
                    <h1 className="fade-in-text">Strawberry Lemonade
                    </h1>
                    <h2 className="fade-in-text">
                        I like this slightly muted color palette.<br></br><br></br>
                    </h2>
                </div>




            </div>
            <Footer />

        </>
    );
}