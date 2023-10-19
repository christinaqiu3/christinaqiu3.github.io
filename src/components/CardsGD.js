import './Cards.css';
import CardItem from './CardItem';

function CardsGD() {
    return (
        <div className='cards'>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>

                        <CardItem
                            src='images/Alice2.mp4'
                            text='A Java game utilizing Swing, file i/o, JPanel/JFrame, and 2D arrays.
                            Submitted as my CIS 1200 final project.
                            Click here to visit the repo!
                            '
                            label='Alice in Dungeonland'
                            path='https://github.com/christinaqiu3/AliceJava'
                        />

                        <CardItem
                            src='images/vamp3tryFINAL.mp4'
                            text='Designed game UI and a monster with a timing based minigame coded in Unity.
                            Click to see more!'
                            label='Galaxy Gacha'
                            path='/galaxygacha'
                        />

                    </ul>
                    <ul className='cards__items'>

                        <CardItem
                            src='images/MMM4.mp4'
                            text='Designed and developed visual novel in 24 hours with 2 team members for the UPGRADE
                            Halloween Game Jam. Won “Best Production Value – Art & Sound” and “Best Use of Trick Theme” Awards.'
                            label='Mansplain Manipulate Manslaughter'
                            path='https://ooorz.itch.io/mansplain-manipulate-manslaughter'
                        />

                        <CardItem
                            src='images/FF4.mp4'
                            text='The UPGRADE minigame collection for which I and 2 team members made an endless runner game.
                            Click for more!'
                            label='Island Escapades'
                            path='/islandescapades'
                        />

                    </ul>
                </div>
            </div>
        </div>
    );
}

export default CardsGD;