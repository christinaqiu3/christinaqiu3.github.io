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
                            src='images/vamp-redo 3 4.mp4'
                            text='Designed game UI and a monster with a timing based minigame coded in Unity.
                            Click to see more!'
                            label='Galaxy Gacha'
                            path='/galaxygacha'
                        />
                        <CardItem
                            src='images/img-3.jpg'
                            text='The UPGRADE minigame collection for which I created essential assets and an endless runner game.
                            Click for more!'
                            label='Island Escapades'
                            path='/islandescapades'
                        />
                    </ul>
                    <ul className='cards__items'>

                        <CardItem
                            src=''
                            text='Created character assets and various storyline routes for this Visual Novel.

                            Won “Best Production Value - Art & Sound” and “Best Use of ‘Trick’ Theme” for the 2022 UPGRADE 24 hour game jam.'
                            label='Mansplain Manipulate Manslaughter'
                            path='https://ooorz.itch.io/mansplain-manipulate-manslaughter'
                        />
                        <CardItem
                            src='images/img-8.jpg'
                            text='Working on a 2D RPG Unity game: writing the script, creating assets, and coding.'
                            label='Alice'
                            path='/alice'
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default CardsGD;