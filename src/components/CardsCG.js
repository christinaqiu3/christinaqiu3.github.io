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
                            skills={['C++', 'OpenGL', 'Qt', 'GLSL']}
                            label='Half-Edge Mesh & Skinning'
                            //path='/'
                        />
                        <CardItem
                            src='images/marioR.mp4'
                            text='Built a 3D model to 2D image rasterizer using polygon triangulation, perspective projection, and texture and normal mapping.
Coded custom Vertex and Post-Processing GLSL shaders to apply coloration effects to 3D model surfaces. Used QT to build UI.
'
                            skills={['C++', 'OpenGL', 'Qt']}
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
                            skills={['C++', 'OpenGL', 'Qt']}
                            label='Configurable Scene Graph'
                            //path='/fineart'
                        />
                        <CardItem
                            src='images/24hrAnim4.mp4'
                            text='Coded player physics and procedural cave generation.
'skills={['C++', 'OpenGL', 'Qt']}
                            label='Mini Minecraft'
                            //path='/minecraft'
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default CardsCG;