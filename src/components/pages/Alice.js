import React from 'react';
import '../../App.css';
import Footer from "../Footer";
import useScrollToTop from '../useScrollToTop';

export default function Alice() {
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

                        <b>Cave Systems</b>

                        <br></br>

                        ✦ Extended the Perlin noise algorithm to 3D for generating cave systems beneath the terrain.
                        <br></br>
                        ✦ Sampled 3D Perlin noise at every block with Y coordinates in the range [1, 128]. Blocks with negative noise values were set to EMPTY, and blocks below Y=25 with negative noise values were set to LAVA. Y=0 blocks were set to BEDROCK and made unbreakable.
                        <br></br>
                        ✦ Modified the 2D Perlin noise to work in three dimensions by sampling eight surflets and using trilinear interpolation.
                        <br></br>
                        ✦ Adjusted sampling to manage the performance impact on single-threaded environments.


                        <br></br><br></br>

                        <b>Post-Process Rendering Pipeline</b>
<br></br>

                        ✦ Implemented a post-process rendering pipeline to overlay effects when the player's head is beneath water or lava.
                        <br></br>
                        ✦ Created a system where the screen is tinged blue underwater and red in lava, using frame buffers and shaders.
                        <br></br>
                        ✦ Designed player collision detection to not stop movement in WATER and LAVA blocks.

                        <br></br>
                        ✦ Implemented a 2/3 speed reduction in water and lava, and enabled upward swimming with the Spacebar.
                        <br></br>
                        ✦ Created visual overlay effects for water and lava by setting up a post-process pipeline and rendering the scene to a frame buffer, then applying shaders for the color tinge.
                        <br></br><br></br>

                        <b>Entity Class</b>

                        <br></br>

                        ✦ The Entity class represents any non-terrain object, such as the Player, Cameras, or AI agents. It tracks its local coordinates and axes, and includes functions for movement. Each Entity has a tick function for actions taken every frame.
                        <br></br><br></br>

                        <b>Player Class</b>
<br></br>

                        ✦ The Player class, inheriting from Entity, represents the player's avatar. It includes a Camera for the player’s POV, velocity and acceleration for physics, and interacts with Terrain.

                        <br></br>
                        ✦ For terrain collision, I assumed the Player’s collision volume is two Minecraft blocks stacked vertically
                        <br></br>
                        ✦ I used grid marching for collision detection, treating each cube corner of the Player’s volume as a ray origin.


                        <br></br><br></br>

                        <b>Water Waves</b>

                        <br></br>
                        ✦ In the vertex shader, I distorted the surface of WATER blocks to simulate wave-like motion. I translated surface normals according, allowing for accurate lighting reflection after a glossy Blinn-Phong highlight was applied.
                        <br></br><br></br>

                        <b>Post-process Camera Overlay</b>
<br></br>
                        ✦  When the player enters WATER or LAVA blocks, I applied a blue or red overlay with a fluid-like screen distortion and coloration effect, using noise functions to animate the distortion over time.

                        <br></br><br></br>

                        <b>Day and Night Cycle</b>
                        <br></br>
                        ✦ I created a procedural sky background that simulates a full day and night cycle using raycasting. I synchronized the terrain shader's light direction with the sky’s changing sun position. The transitions between different times of the day are smooth, with interpolated sky colors, and the sky changes color near the horizon during sunrise and sunset.

                        <br></br><br></br>

                        <b>Distance Fog</b>
                        <br></br>
                        ✦ I implemented a fog effect in the shader by interpolating the final color of blocks with a constant color based on the fragment's Z coordinate. This creates a realistic fog effect that increases with the distance from the camera.


                    </h2>




                    </div>
            </div>

            <div className="free-space"><br></br></div>

            <Footer />

        </>
    );
}