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
                            src='images/cig.mp4'
                            text='Using Maya, Blender, and Unreal engine.'
                            label='3D Modeling'
                            path='/modeling'
                        />
                    </ul>
                    <ul className='cards__items'>

                        <CardItem
                            src='images/fine-art-3.mp4'
                            text='Exploring many different mediums,
                            I drew inspiration from familiar spaces, nature, past memories, and dreams.'
                            label='Fine Art'
                            path='/fineart'
                        />
                        <CardItem
                            src='images/dig-art-5.mp4'
                            text='Using Adobe Photoshop and Procreate to draw fictional characters, original characters,
                            family, friends, and myself.'
                            label='Digital Art'
                            path='/digitalart'
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default CardsA;