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
                            the 2023 PennApps hackathon website on Figma. Click to visit the site!'
                            label='PennApps 2023 Website'
                            path='https://2023f.pennapps.com/'
                        />
                        <CardItem
                            src='images/fv5.mp4'
                            text='Created this website from scratch using Figma and ReactJS. Click here to take a look at my design process!'
                            label='My Personal Website'
                            path='/personalwebsite'
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default CardsWD;