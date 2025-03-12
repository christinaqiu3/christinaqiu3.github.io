import React from 'react';
import '../../App.css';
import Footer from "../Footer";
import useScrollToTop from '../useScrollToTop';

export default function Pathtracer() {
    useScrollToTop();
    return (
        <>
            <div className="content">
                <h1 className="sub-heading">Pathtracer</h1>
            </div>
            <div className="content-desc">
                {/*<h1 className="page-bottom-heading"><br></br>Gaslight Gatekeep Girlboss<br></br><br></br></h1>*/}

                <div>
                    <h2 ><br></br><br></br>

                        In this Monte Carlo Pathtracer project, I simulate light transport within a scene using the Light Transport Equation (LTE), exploring and refining different rendering techniques such as naive path tracing, direct lighting, and multiple importance sampling to determine the most effective approach for realistic and efficient rendering.

                        <br></br><br></br><br></br>
                        
                        <bullet-heading>Lambertian Reflectance and Cosine-Weighted Sampling</bullet-heading>
                        <br></br>
                        
                        <ul class="custom-list">
                            <li>The <b>Lambertian BRDF</b> is used to model Lambertian surfaces in the pathtracer. The key aspect of this BRDF is <b>cosine-weighted hemisphere sampling</b> to ensure light is scattered uniformly in the hemisphere, following Lambert's Law.</li>
                            
                            <li>The Lambertian BRDF formula is given by: <highlight>f(ωi, ωo) = ρ / π</highlight>, where <highlight>ωi</highlight> and <highlight>ωo</highlight> represent the incoming and outgoing light directions, and <highlight>ρ</highlight> is the surface albedo.
                            </li>
                            
                            <li>For <b>sampling</b> the light directions, I use a cosine-weighted function: <highlight>p(ωi) = cos(θi) / π</highlight>, where <highlight>θi</highlight> is the angle between the normal and the sampled direction.
                            </li>
                            
                        </ul>
                        <div className="projdesc-image-container">
                            <div class="image-with-caption">
                                <img
                                    src="images/hw2_8.png"
                                    alt="Lambertian"
                                    className="general-image"
                                />
                                <p class="caption">testing Lambertian implementation by outputting wi direction as color remapped from [-1, 1] to [0, 1]</p>
                            </div>
                            
                            <div class="image-with-caption">
                            <img
                                src="images/hw2_6.png"
                                alt="Hemisphere (Uniform)"
                                className="general-image"
                            />
                            <p class="caption">samples are uniformly distributed across the entire hemisphere</p>
                            </div>
                            <div class="image-with-caption">
                            <img
                                src="images/hw2_7.png"
                                alt="Hemisphere (Cosine Weighted)"
                                className="general-image"
                            />
                            <p class="caption">Cosine-weighted sampling biases the distribution towards the hemisphere's pole</p>
                            </div>

                        </div>
                        <bullet-heading>Naive Integrator</bullet-heading>

                        <br></br>
                        <ul class="custom-list">
                            <li>In the <b>Naive Pathtracer</b>, I cast rays from the camera and recursively bounce them through the scene, accumulating radiance along the way. When a ray hits an object, I compute the incoming radiance based on the <b>light transport equation</b> (LTE).</li>
                            
                            <li>However, the <b>Naive Pathtracer</b> suffers from inefficiency due to many recursive ray bounces. This method becomes computationally expensive, especially in scenes with complex lighting interactions.</li>
                            
                            <li>To address this, the <b>Direct Lighting method</b> is introduced later, which avoids multiple bounces and instead casts a single ray from the camera to a point on the light source.</li>
                        </ul>
                        <div className="projdesc-image-container">
                            <div class="image-with-caption">
                                <img
                                    src="images/hw2_9.png"
                                    alt="single sample"
                                    className="general-image"
                                />
                                <p class="caption">single sample per pixel of the scene</p>
                            </div>
                            
                            <div class="image-with-caption">
                            <img
                                src="images/NoHDR.png"
                                alt="summed up render"
                                className="general-image"
                            />
                            <p class="caption">sum render passes using previous iterations stored in a sampler2D</p>
                            </div>
                            <div class="image-with-caption">
                            <img
                                src="images/hw2_11.png"
                                alt="High Dynamic Range conversion"
                                className="general-image"
                            />
                            <p class="caption">High Dynamic Range conversion using the Reinhard operator and gamma correction</p>
                            </div>

                        </div>
                        <bullet-heading>Specular Materials</bullet-heading>
                        <br></br>
                        <ul class="custom-list">
                        <li>Implemented Specular BRDF function to reflect <strong><highlight>ωo</highlight></strong> about the surface normal to generate <strong><highlight>ωi</highlight></strong> in tangent space. Both the <strong><highlight>f</highlight></strong> and <strong><highlight>Pdf</highlight></strong> return <strong><highlight>0</highlight></strong> as specular reflection has zero probability of random sampling the exact mirror direction.</li>
  
  <li>Implemented Specular BTDF function to refract <strong><highlight>ωo</highlight></strong> and handle total internal reflection, returning black if it occurs. Checked for ray entry or exit by comparing <strong><highlight>ωo</highlight></strong> with the surface normal, adjusting the refractive index accordingly.</li>
  
  <li>Implemented a dielectric materials function to compute the <strong>Fresnel reflection coefficient</strong>, which determines how reflective a surface point on a dielectric material is, based on its indices of refraction and the angle between the incident ray and the surface normal.</li>


</ul>
                        <div className="projdesc-image-container">
                            <div class="image-with-caption">
                                <img
                                    src="images/p1.png"
                                    alt="Specular BRDF"
                                    className="general-image"
                                />
                                <p class="caption">Tested using <highlight>PT_mirrorBox.json</highlight> with the <highlight>Li_Naive</highlight> function to verify correct mirror reflection.</p>
                            </div>
                            
                            <div class="image-with-caption">
                            <img
                                src="images/p2.png"
                                alt="Specular BTDF"
                                className="general-image"
                            />
                            <p class="caption">Tested using <highlight>PT_transmitBox.json</highlight> with <highlight>Li_Naive</highlight> to verify correct refraction behavior.</p>
                            </div>
                            <div class="image-with-caption">
                            <img
                                src="images/p3.png"
                                alt="dielectric materials"
                                className="general-image"
                            />
                            <p class="caption">Tested with <highlight>PT_glassBallBox.json</highlight> to verify realistic glass reflections using Fresnel effects.</p>
                            </div>

                        </div>
                        <bullet-heading>Direct Light</bullet-heading>
                        <br></br>
                        <ul class="custom-list">
                        <li>Unlike the Naive Pathtracer, the <b>Direct Lighting</b> method only traces a ray from the intersection point to the light source, returning the direct light value without additional bounces. This is calculated by generating <highlight>ωi</highlight> as the direction from the view point to the light source: <highlight>ωi = normalize(light_position - intersection_point)</highlight>.
                        </li>
    
    <li>This method significantly reduces computation time, as it does not involve iterative ray bouncing. The probability density function (PDF) is set to a Dirac delta function, as the ray is guaranteed to be directed towards the light source: <highlight>PDF = δ(ωi)</highlight>.</li>
    
    <li>However, <b>Direct Lighting</b> only captures the light that directly hits the surface from the light source, missing indirect lighting from other parts of the scene. If the shadow feeler ray intersects any geometry before reaching the light source, the point is occluded, and no light contribution is returned: <highlight>Le = 0</highlight> if occluded, otherwise <highlight>Le / distance^2</highlight> is returned.</li>
    <li><b>Naive Pathtracing</b> generates more noise than <b>Direct Lighting</b> because it relies on random ray bounces, which often fail to hit light sources, whereas <b>Direct Lighting</b> directly samples light, leading to faster convergence and less noise.</li>

                        </ul>
                        <div className="projdesc-image-container">
                            <div class="image-with-caption">
                                <img
                                    src="images/p4.png"
                                    alt="DirectSamplePointLight"
                                    className="general-image"
                                />
                                <p class="caption">Direct light sampling from a point light source with shadow occlusion check.</p>
                            </div>
                            
                            <div class="image-with-caption">
                            <img
                                src="images/p5.png"
                                alt="DirectSampleSpotLight"
                                className="general-image"
                            />
                            <p class="caption">Spot light rendering with energy reduction based on the view angle with a cubic falloff.</p>
                            </div>
                            <div class="image-with-caption">
                            <img
                                src="images/p7.png"
                                alt="cornellBoxTwoLights"
                                className="general-image"
                            />
                            <p class="caption">Rendering with two point lights, energy scaled for each light.</p>
                            </div>

                        </div>
                        <bullet-heading>Multiple Importance Sampling</bullet-heading>

                        <br></br>
                        <ul class="custom-list">
                            <li><b>Multiple Importance Sampling</b> (MIS) combines both the Naive and Direct Lighting methods to address their individual limitations. This approach involves computing a weighted average of the results from both methods.</li>
                            
                            <li>Using a <b>power heuristic</b>, MIS takes into account the relative efficiency of each method for different light source sizes. It combines the results to produce a more accurate final image with fewer artifacts.</li>
                            
                            <li>For small light sources, Direct Lighting is more efficient, while Naive Pathtracing is more effective for large light sources. MIS balances both to avoid artifacting in the final render.</li>
                        </ul>
                        <div className="projdesc-image-container">
                            <div class="image-with-caption">
                                <img
                                    src="images/hw4_3.png"
                                    alt="Li_Naive"
                                    className="general-image"
                                />
                                <p class="caption">Naive Pathtracer: The left smaller light source is more noisy because random ray bounces have a low chance of hitting the light.</p>
    </div>
                            
                            <div class="image-with-caption">
                            <img
                                src="images/h4_4.png"
                                alt="Li_DirectSimple"
                                className="general-image"
                            />
                            <p class="caption">Simple direct sampling: The large light source shows noise in the reflection area because it only samples rays directly hitting the light.</p>
    </div>
                            <div class="image-with-caption">
                            <img
                                src="images/h4_5.png"
                                alt="Li_DirectMIS"
                                className="general-image"
                            />
                            <p class="caption">Multiple Importance Sampling: The noise is  reduced, as MIS combines the strengths of both methods to sample the light more efficiently.</p>
    </div>

                        </div>
                        <bullet-heading>Full Integrator</bullet-heading>

                        <br></br>
                        <ul class="custom-list">
                            <li>The final step in the pathtracer involves integrating <b>global illumination</b>, which reintroduces the concept of recursive ray bounces from the Naive Pathtracer. By combining <b>Multiple Importance Sampling</b> with recursive ray bounces, the pathtracer is able to produce highly accurate renders with complex lighting effects, such as <b>environment maps</b> and <b>indirect lighting</b>.</li>
                            
                            <li>Each ray bounce samples a new <code>ωi</code>, which is influenced by material properties (such as <b>diffuse</b> or <b>microfacet</b> surfaces). The direction is determined based on random sampling.

                            The color from this sample is then adjusted by how much light is still traveling (<code>throughput</code>), the angle of the light (<code>dot-product</code>), and a normalization factor (<code>1/Pdf</code>) to accurately compute the light contribution after multiple bounces.</li>
                            
                            <li>

The environment lighting is added by sampling the <b>environment map</b>, taking into account the <b>cosine-weighted</b> hemisphere sample at the intersection point. This lighting is used when rays hit empty space (i.e., no objects intersecting the ray).</li>
                        </ul>
                        <div className="projdesc-image-container">
                            <div class="image-with-caption">
                                <img
                                    src="images/h5-p8.png"
                                    alt="PT_roughMirrorBoxUniform.json"
                                    className="general-image"
                                />
                                <p class="caption">A Full Integrator render of the scene with uniform rough mirrors.



</p>
    </div>
                            
                            <div class="image-with-caption">
                            <img
                                src="images/h5-p3.png"
                                alt="PT_cornellBoxPointLight.json"
                                className="general-image"
                            />
                            <p class="caption">Bright white spots result from rays bouncing near the point light but not hitting it, where the PDF is not adjusted to account for the indirect energy, causing overexposure.</p>
    </div>
                            <div class="image-with-caption">
                            <img
                                src="images/hw5-2.png"
                                alt="snowman"
                                className="general-image"
                            />
                            <p class="caption">A render of a customized JSON snowman scene lit with an environment map.

</p>
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