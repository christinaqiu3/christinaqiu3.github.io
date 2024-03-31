import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function CardsD() {
    return (
        <div className='cards'>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>

                        <CardItem
                            src='images/charawip (1).mp4'
                            text='Working on hair for character model.'
                            skills={['Maya']}
                            label='Character WIP'
                            //path='/character'
                        />

                        <CardItem
                            src='images/envwipCropped.mp4'
                            text='Working on a fairy room model.'
                            skills={['Maya', 'Blender']}
                            label='Environment WIP'
                            //path='/environment'
                        />

                    </ul>
                    <ul className='cards__items'>

                        <CardItem
                            youtubeId='https://youtu.be/AQ-fSgDwUH0?si=4LZSYvHCACmTHB_g'
                            text='Developed essential 3D character animation, model creation, and camera work
                            with a team of 5 to produce a 3D animation.
'skills={['Blender', 'Procreate']}
                            label='24 HOURS Animation Contest'
                            path='https://youtu.be/AQ-fSgDwUH0?si=4LZSYvHCACmTHB_g'
                        />

                        <CardItem
                            src='images/cig.mp4'
                            text='Collaborated in a team of 3 to render a character walking cycle. Self taught and completed an mp3 with scripted camera movement in 6 hours.'
                            skills={['Blender', 'Rigify', 'Unreal Engine']}
                            label='UPGRADE Graphics Pipeline Speedrun'
                            //path='/'
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default CardsD;