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

                        Cave Systems

                        <br></br><br></br>

                        ✦ Extended the Perlin noise algorithm to 3D for generating cave systems beneath the terrain.
                        <br></br>
                        ✦ Sampled 3D Perlin noise at every block with Y coordinates in the range [1, 128]. Blocks with negative noise values were set to EMPTY, and blocks below Y=25 with negative noise values were set to LAVA. Y=0 blocks were set to BEDROCK and made unbreakable.
                        <br></br>
                        ✦ Modified the 2D Perlin noise to work in three dimensions by sampling eight surflets and using trilinear interpolation.
                        <br></br>
                        ✦ Adjusted sampling to manage the performance impact on single-threaded environments.


                        <br></br><br></br>

                        Post-Process Rendering Pipeline

                        <br></br><br></br>

                        ✦ Implemented a post-process rendering pipeline to overlay effects when the player's head is beneath water or lava.
                        <br></br>
                        ✦ Created a system where the screen is tinged blue underwater and red in lava, using frame buffers and shaders.
                        <br></br>
                        ✦ Designed player collision detection to not stop movement in WATER and LAVA blocks.

                        <br></br>
                        ✦ Implemented a 2/3 speed reduction in water and lava, and enabled upward swimming with the Spacebar.
                        <br></br>
                        ✦ Created visual overlay effects for water and lava by setting up a post-process pipeline and rendering the scene to a frame buffer, then applying shaders for the color tinge.

                    </h2>




                    </div>
            </div>

            <div className="free-space"><br></br></div>

            <Footer />

        </>
    );
}