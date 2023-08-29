import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function CardsGD() {
    return (
        <div className='cards'>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>

                        <CardItem
                            src='images/vamp3try.mp4'
                            text='Designed game UI and a monster with a timing based minigame coded in Unity.
                            Click to see more!'
                            label='Galaxy Gacha'
                            path='/galaxygacha'
                        />
                        <CardItem
                            src='images/FF4.mp4'
                            text='The UPGRADE minigame collection for which I created essential assets and an endless runner game.
                            Click for more!'
                            label='Island Escapades'
                            path='/islandescapades'
                        />
                    </ul>
                    <ul className='cards__items'>


                        <CardItem
                            src='images/Alice2.mp4'
                            text='A Java game utilizing Swing, file i/o, JPanel/JFrame, and 2D arrays.
                            Click here to visit the repo!
                            '
                            label='Alice in Dungeonland'
                            path='https://github.com/christinaqiu3/AliceJava'
                        />

                        <CardItem
                            src='images/MMM4.mp4'
                            text='Created character assets and various storyline routes for this Visual Novel.

                            Won “Best Production Value - Art & Sound” and “Best Use of ‘Trick’ Theme” for the 2022 UPGRADE 24 hour game jam.'
                            label='Mansplain Manipulate Manslaughter'
                            path='https://ooorz.itch.io/mansplain-manipulate-manslaughter'
                        />


                    </ul>
                </div>
            </div>
        </div>
    );
}

export default CardsGD;