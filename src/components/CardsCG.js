import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function CardsCG() {
    return (
        <div className='cards'>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>

                        <CardItem
                            src='images/cube3.mp4'
                            text='A mini Maya application that parses OBJ files into Half-Edge meshes,
                            allowing edge splitting, face triangulation, and smoothening via Catmull-Clark subdivision.
                            Utilizing a JSON skeleton, performs distance-based skinning for mesh deformation.' //extrusion
                            label='Half-Edge Mesh & Skinning'
                            //path='/'
                        />
                        <CardItem
                            src='images/marioR.mp4'
                            text='Built a 3D model to 2D image rasterizer using polygon triangulation, perspective projection, and texture and normal mapping.
Coded custom Vertex and Post-Processing GLSL shaders to apply coloration effects to 3D model surfaces. Used QT to build UI.
'
                            label='Rasterizer & Custom GLSL Shaders'
                            //path='/'
                        />
                    </ul>
                    <ul className='cards__items'>

                        <CardItem
                            src='images/phineas2.mp4'
                            text='Developed a tree data structure with transformation matrices using C++ pointers,
                            polymorphism, and linear algebra, enabling interactive manipulation of a humanoid puppet
                            within the GUI interface.'
                            label='Configurable Scene Graph'
                            //path='/fineart'
                        />
                        <CardItem
                            src='images/24hrAnim4.mp4'
                            text='Developed essential 3D character animation, model creation, and camera work
                            with a team of 5 to produce a 3D animation.
'
                            label='24 HOURS Animation Contest'
                            path='https://youtu.be/AQ-fSgDwUH0?si=4LZSYvHCACmTHB_g'
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default CardsCG;