import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function CardsA() {
    return (
        <div className='cards'>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>

                        <CardItem
                            src='images/art-1.jpeg'
                            text='Worked on the PennApps creative team to design
                            the 2023 PennApps hackathon website on Figma'
                            label='Game Design'
                            path='/services'
                        />
                        <CardItem
                            src='images/art-2.jpeg'
                            text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
                            label='3D Modeling'
                            path='/services'
                        />
                    </ul>
                    <ul className='cards__items'>

                        <CardItem
                            src='images/img-4.jpg'
                            text='Experience Football on Top of the Himilayan Mountains'
                            label='Fine Art'
                            path='/products'
                        />
                        <CardItem
                            src='images/img-8.jpg'
                            text='Ride through the Sahara Desert on a guided camel tour'
                            label='Digital Art'
                            path='/sign-up'
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default CardsA;