import React from 'react';
import '../../App.css';
import Footer from "../Footer";
import useScrollToTop from '../useScrollToTop';

export default function Minecraft() {
    useScrollToTop();
    return (
        <>
            <div className="content">
                <h1 className="sub-heading">Mini Minecraft</h1>
            </div>
            <div className="content-desc">
                {/*<h1 className="page-bottom-heading"><br></br>Gaslight Gatekeep Girlboss<br></br><br></br></h1>*/}

                <div>
                    <h2 ><br></br><br></br>

                        My sophomore year computer graphics final project was to create a mini minecraft in a team of three.

                        Below I detail the parts I implemented.

                        <br></br><br></br>

                        <bullet-heading>Cave Systems</bullet-heading>

                        <br></br>
                        <ul class="custom-list">
                            <li>Extended the Perlin noise algorithm to 3D for generating cave systems beneath the terrain. Modified the 2D Perlin noise to work in three dimensions by sampling eight surflets and using trilinear interpolation.
                            </li>
                            <li>Sampled 3D Perlin noise at every block with Y coordinates in the range [1, 128]. Blocks with negative noise values were set to EMPTY, and blocks below Y=25 with negative noise values were set to LAVA. Y=0 blocks were set to BEDROCK and made unbreakable.
                            </li>
                            
                            <li>Adjusted sampling to manage the performance impact on single-threaded environments.</li>
                        </ul>
                        <div className="projdesc-image-container">
                            <div class="image-with-caption2">
                                <img
                                    src="images/cave.png"
                                    alt="PT_roughMirrorBoxUniform.json"
                                    className="general-image"
                                />
                                <p class="caption">
                                    A cross-section of the cave system generated using 3D Perlin noise.
                                </p>
                            </div>

                            </div>


                        
                        <bullet-heading>Player Class</bullet-heading>
                        <br></br>

                        <ul class="custom-list">
                        <li>The Entity class represents any non-terrain object, such as the Player, Cameras, or AI agents. It tracks its local coordinates and axes, and includes functions for movement. Each Entity has a tick function for actions taken every frame.</li>
                        
                        <li>The Player class, inheriting from Entity, represents the player's avatar. It includes a Camera for the player’s POV, velocity and acceleration for physics, and interacts with Terrain.</li>

                        <li>For terrain collision, I assumed the Player’s collision volume is two Minecraft blocks stacked vertically. I used grid marching for collision detection, treating each cube corner of the Player’s volume as a ray origin.</li>
</ul>
<div className="projdesc-image-container">
                            <div class="image-with-caption">
                                <img
                                    src="images/coll1.png"
                                    alt="player collision 1"
                                    className="general-image"
                                />
                                <p class="caption">                Rays cast from each cube vertex detect terrain collisions through grid marching. The player’s movement adjusts based on the closest intersection, stopping immediately upon contact.

                                </p>
                            </div>

                            <div class="image-with-caption">
                                <img
                                    src="images/coll2.png"
                                    alt="player collision 2"
                                    className="general-image"
                                />
                                <p class="caption">
                                    Improved collisions used in game: Movement is split into X, Y, and Z components, resolving collisions per axis. This enables the player to slide along walls instead of stopping abruptly.

                                </p>
                            </div>
                            <div class="image-with-caption">
                                <img
                                    src="images/cam.png"
                                    alt="camera"
                                    className="general-image"
                                />
                                <p class="caption">
                                    The camera follows a spherical (polar) coordinate system. Rotations adjust φ and θ, zooming changes the radius, and panning shifts the sphere’s center.


                                </p>
                            </div></div>

                        <bullet-heading>Water Vertex and Fragment Shaders</bullet-heading>

                        <br></br>
                        <ul class="custom-list">
                        <li>In the vertex shader, I distorted the surface of WATER blocks to simulate wave-like motion. I translated surface normals according, allowing for accurate lighting reflection after a glossy Blinn-Phong highlight was applied.</li>

                        <li>Implemented a post-process rendering pipeline to overlay effects when the player's head
                            is beneath WATER or LAVA blocks. I applied a blue or red Camera overlay with a fluid-like screen distortion and coloration effect, using noise functions to animate the distortion over time.</li>

                            <li>Adjusted player collision detection to not stop movement in WATER and LAVA blocks. Added a 2/3 speed reduction in water and lava, and enabled upward swimming with
                                the Spacebar.
                            </li>
                        </ul>
                        <div className="projdesc-image-container">
                            <div className="image-with-caption2">
                                <img
                                    src="images/water.png"
                                    alt="water"
                                    className="general-image2"
                                />
                                <p className="caption">Water Shader</p>
                            </div>

                            <div className="image-with-caption2">
                                <img
                                    src="images/lava.png"
                                    alt="lava"
                                    className="general-image2"

                                />
                                <p className="caption">Lava Shader</p>
                            </div>

                        </div>


                        <bullet-heading>Day and Night Cycle</bullet-heading>
                        <ul class="custom-list">
                        <li>
                            Developed a procedural sky system simulating a day-night cycle using raycasting and synchronized terrain shader light with the sun's position.
                        </li>
                        <li>
                            Implemented smooth interpolated transitions between time intervals (sunrise, day, sunset, dusk, night)
                            , using UV-mapped gradients and Worley noise for sky color variation.
                        </li>
                            <li>
                                Calculated sun visibility based on view direction and light source angle. Synchronized terrain shader lighting with the sun’s position, adjusting colors near the horizon during sunrise and sunset.

                            </li>
                            <li>
                                Implemented distance fog by interpolating the final color of blocks with a constant color based on the fragment's Z coordinate. Sampled fog color from the current sky color for consistency.

                            </li>
                        </ul>
                        <div className="projdesc-image-container">
                            <div className="image-with-caption">
                                <img
                                    src="images/daytime.png"
                                    alt="daytime"
                                    className="general-image"
                                />
                                <p className="caption">Daytime sun and sky</p>
                            </div>
                            <div className="image-with-caption">
                                <img
                                    src="images/sunset.png"
                                    alt="sunset"
                                    className="general-image"
                                />
                                <p className="caption">Sunset gradient sky</p>
                            </div>


                            <div className="image-with-caption">
                                <img
                                    src="images/fog_copy.png"
                                    alt="fog"
                                    className="general-image"

                                />
                                <p className="caption">Distance fog</p>
                            </div>

                        </div>



                    </h2>




                </div>
            </div>

            <div className="free-space"><br></br></div>

            <Footer />

        </>
    );
}