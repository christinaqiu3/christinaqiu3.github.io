import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function CardsWD() {
    return (
        <div className='cards'>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>

                        <CardItem
                            src='images/pennapps-vid.mp4'
                            text='Worked on the PennApps creative team to design
                            the 2023 PennApps hackathon website on Figma'
                            label='PennApps 2023 Website'
                            path='/pennapps'
                        />
                        <CardItem
                            src='images/img-3.jpg'
                            text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
                            label='Mystery'
                            path='/'
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default CardsWD;