
import './Cards.css';
import CardItem from './CardItem';
import React from "react";

function CardsH() {
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
                            path='https://vimeo.com/901575818?share=copy'
                            fillertext='y'
                            iconRead='/minecraft'
                            iconLink='https://vimeo.com/901575818?share=copy'
                            //iconCode='\chop'
                        />

                        <CardItem
                            src='images/ChristinaQiu_2E (1).mp4'
                            text='Work in progress. Did the 3D modeling, texturing, rigging, lighting, and camera movement. Created stylized customizable shader for BSDF materials. Used Houdini to create procedurally generated trees and geometry nodes to duplicate the trees randomly on the terrain. '
                            skills={['Maya', 'Blender', 'Rigify', 'Houdini']}
                            label='Animation WIP'
                            path='https://drive.google.com/file/d/1Fkpx6lIW2hvuDoIGW-AyoAM9B5y8uLd3/view?usp=sharing'
                            fillertext='y'
                        />


                        {/*<CardItem*/}
                        {/*    src='images/chop3.mp4'*/}
                        {/*    text='Working in a team of 5 to develop a game for children with Down syndrome intended*/}
                        {/*    to help their understanding of what a sleep study entails for a better informed assent.'*/}
                        {/*    label='CHOP Sleep Study Serious Game'*/}
                        {/*    path='/CHOP'*/}
                        {/*/>*/}
                        {/*<CardItem*/}
                        {/*    src='images/'*/}
                        {/*    text='Working on a 2D RPG Unity game personal project inspired by Alice in Wonderland.*/}
                        {/*    Writing the script, creating assets, and coding.'*/}
                        {/*    label='Alice: A Tale of Choices'*/}
                        {/*    path='/Alice'*/}
                        {/*/>*/}
                    </ul>
                    <ul className='cards__items'>
                        <CardItem
                            src='images/cube3.mp4'
                            text='A Mini Maya application that parses OBJ files into Half-Edge meshes,
                            allowing edge splitting, face triangulation, and smoothening via Catmull-Clark subdivision.
                            Utilizing a JSON skeleton, performs distance-based skinning for mesh deformation.' //extrusion
                            skills={['C++', 'OpenGL', 'Qt', 'GLSL']}
                            label='Mini Maya'
                            path='https://vimeo.com/904651208?share=copy'
                            fillertext='y'
                        />

                        <CardItem
                            src='images/duck tub copy.mp4'
                            text='Randomized Physics Scattering Scriptable Tool made in Unreal Engine 5.
                            Users can import their own models and generate randomly scattered objects to quickly create a natural looking scene.
                            Ducks and bathtub modeled in Blender.'
                            skills={['Unreal Engine', 'Blender']}
                            label='Physics Scattering UE5 Tool'
                            path='https://vimeo.com/905688463?share=copy'
                            fillertext='y'
                            //iconRead='/duck'
                            //iconLink='https://vimeo.com/905688463?share=copy'
                        />
                        {/*<CardItem*/}
                        {/*    src='images/flowerPlug (1).mp4'*/}
                        {/*    text='Flower generator plugin for Maya. Users can customize a flower design and generate multiple flowers on selected vertices.*/}
                        {/*There are settings for randomization to introduce natural looking variation between flowers.'*/}
                        {/*    skills={['Python','Maya']}*/}
                        {/*    label='Flower Generator Maya Plugin'*/}
                        {/*    path='https://vimeo.com/905690072?share=copy'*/}
                        {/*    fillertext='y'*/}
                        {/*/>*/}
                    </ul>




                </div>
            </div>
        </div>
    );
}

export default CardsH;