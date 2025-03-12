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
                            src='images/fine-art-3.mp4'
                            text='Exploring many different mediums,
                            I drew inspiration from familiar spaces, nature, past memories, and dreams.'
                            label='Fine Art'
                            path='/fineart'
                            iconRead='/fineart'
                            skills={['Acrylic', 'Charcoal', 'Ink', 'Clay']}
                        />
                        <CardItem
                            src='images/dig-art-5.mp4'
                            text='Using Adobe Photoshop and Procreate to draw fictional characters, original characters,
                            family, friends, and myself.'
                            label='Digital Art'
                            path='/digitalart'
                            iconRead='/digitalart'
                            skills={['Acrylic', 'Procreate']}
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default CardsA;