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
                            src='images/mineCROP.mp4'
                            text='
Coded player movement, physics, terrain collisions, block removal/placement using grid marching
and ray casting. Created a procedural sky with sun and moon cycles linked to shadow mapping.
Generated procedural caves using 3D Perlin noise and added distance fog. Implemented water and lava overlay
and wave effects with custom GLSL shaders.'
                            skills={['Python','Maya']}
                            label='Maya Plugins'
                            path='https://vimeo.com/901575818?share=copy'
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