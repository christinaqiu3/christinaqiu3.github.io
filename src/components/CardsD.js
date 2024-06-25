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
                            src='images/ChristinaQiu_2E (s).mp4'
                            text='Work in progress. Did the 3D modeling, texturing, rigging, lighting, and camera movement. Created stylized customizable shader for BSDF materials. Used Houdini to create procedurally generated trees and geometry nodes to duplicate the trees randomly on the terrain. '
                            skills={['Maya', 'Blender', 'Rigify', 'Houdini']}
                            label='Animation WIP'
                            path='https://drive.google.com/file/d/1Fkpx6lIW2hvuDoIGW-AyoAM9B5y8uLd3/view?usp=sharing'
                        />

                        {/*<CardItem*/}
                        {/*    src='images/charawip (1).mp4'*/}
                        {/*    text='Working on hair for character model.'*/}
                        {/*    skills={['Maya']}*/}
                        {/*    label='Character WIP'*/}
                        {/*    //path='/character'*/}
                        {/*/>*/}

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
                            src='images/24hrAnim4.mp4'
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