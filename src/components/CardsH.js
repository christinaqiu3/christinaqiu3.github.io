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
                            text='Working as a ....
                            jbcleblwebflhwblfhbweqlhkbflwblwhbldhbwlfblwhfblkwhebflhwbflhwbf'
                            label='CHOP'
                            path='https://2023f.pennapps.com/'
                        />
                        <CardItem
                            src='images/'
                            text='In process of....
                            jbcleblwebflhwblfhbweqlhkbflwblwhbldhbwlfblwhfblkwhebflhwbflhwbf'
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