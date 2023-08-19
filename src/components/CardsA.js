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
                            text='Using Maya, Blender, and Unreal engine.'
                            label='3D Modeling'
                            path='/3dmodeling'
                        />
                        <CardItem
                            src='images/art-2.jpeg'
                            text='Using Canva to advertise clubs, events, and more!'
                            label='Marketing Design'
                            path='/marketingdesign'
                        />
                    </ul>
                    <ul className='cards__items'>

                        <CardItem
                            src='images/img-4.jpg'
                            text='Exploring many different mediums,
                            I drew inspiration from familiar spaces, nature, past memories, and dreams.'
                            label='Fine Art'
                            path='/fineart'
                        />
                        <CardItem
                            src='images/img-8.jpg'
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