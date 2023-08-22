import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function CardsH() {
    return (
        <div className='cards'>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>

                        <CardItem
                            src='images/'
                            text='Working in a team of 5 to develop a game for children with Down syndrome intended
                            to help their understanding of what a sleep study entails for a better informed assent.'
                            label='CHOP'
                            path='https://2023f.pennapps.com/'
                        />
                        <CardItem
                            src='images/'
                            text='Developing a React web app that functions as a Penn-specific thrift store, complete
                            with individual profile pages, an explore page, and a direct messaging page.'
                            label='Thrift Store'
                            path='/personalwebsite'
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default CardsH;