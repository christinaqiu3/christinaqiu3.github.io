import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function CardsTools() {
    return (
        <div className='cards'>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                            src='images/flowerPlug (1).mp4'
                            text='Flower generator plugin for Maya. Users can customize a flower design and generate multiple flowers on selected vertices.
                        There is a randomize functionality to add a more natural looking variation between flowers.'
                            skills={['Python','Maya']}
                            label='Flower Generator Maya Plugin'
                            path='https://drive.google.com/file/d/1tPDEfHZSkRQRqUVY8JSyBJdrJ3f7kfjP/view?usp=sharing'
                        />
                        <CardItem
                            src='images/cube3.mp4'
                            text='A mini Maya application that parses OBJ files into Half-Edge meshes,
                            allowing edge splitting, face triangulation, and smoothening via Catmull-Clark subdivision.
                            Utilizing a JSON skeleton, performs distance-based skinning for mesh deformation.' //extrusion
                            skills={['C++', 'OpenGL', 'Qt', 'GLSL']}
                            label='Half-Edge Mesh & Skinning'
                            path='https://vimeo.com/904651208?share=copy'
                        />

                    </ul>
                    
                </div>
            </div>
        </div>
    );
}

export default CardsTools;