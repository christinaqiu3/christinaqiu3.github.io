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
                            src='images/mineCROP.mp4'
                            //Coded player physics and procedural cave generation.
                            text='
Coded player movement, physics, terrain collisions, block removal/placement using grid marching
and ray casting. Created a procedural sky with sun and moon cycles linked to shadow mapping.
Generated procedural caves using 3D Perlin noise and added distance fog. Implemented water and lava overlay
and wave effects with custom GLSL shaders.'
                            skills={['C++', 'OpenGL', 'Qt', 'GLSL']}
                            label='Mini Minecraft'
                            path='/minecraft'
                            iconRead='/minecraft'
                            iconLink='https://vimeo.com/901575818?share=copy'
                        />
                        {/* <CardItem
                            src='images/waterUnityC.mp4'
                            text='Unity water surface shader with adjustable parameters for color gradient based on depth,
                            noise function wave displacement, and overlapping normal textures. Utilized Shader Graph in URP.' //extrusion
                            skills={['Unity', 'Shader Graph', 'URP']}
                            label='Real Time Customizable Water Shader'
                            path='https://vimeo.com/904655686?share=copy'
                        /> */}
                        <CardItem
                            src='images/monte.mp4'
                            text='I simulate light transport within a scene using the Light Transport Equation (LTE), exploring and refining different rendering techniques such as naive path tracing, direct lighting, and multiple importance sampling to determine the most effective approach for realistic and efficient rendering.'
                            skills={['C++', 'OpenGL', 'Qt', 'GLSL']}
                            label='Monte Carlo Pathtracer'
                            path='/pathtracer'
                            iconRead='/pathtracer'
                        />

                    </ul>
                    <ul className='cards__items'>
                        <CardItem
                            src='images/marioRR.mp4'
                            text='Built a 3D model to 2D image rasterizer using polygon triangulation, perspective projection, and texture and normal mapping.
Coded custom Vertex and Post-Processing GLSL shaders to apply coloration effects to 3D model surfaces. Used QT to build UI.
'
                            skills={['C++', 'OpenGL', 'Qt','GLSL']}
                            label='Rasterizer & Custom GLSL Shaders'
                            path='https://vimeo.com/904652011?share=copy'
                        />
                        <CardItem
                            src='images/phineas2.mp4'
                            text='Developed a tree data structure with transformation matrices using C++ pointers,
                            polymorphism, and linear algebra, enabling interactive manipulation of a humanoid puppet
                            within the GUI interface.'
                            skills={['C++', 'OpenGL', 'Qt']}
                            label='Configurable Scene Graph'
                            path='https://vimeo.com/904653681?share=copy'
                        />

                    </ul>
                </div>
            </div>
        </div>
    );
}

export default CardsCG;