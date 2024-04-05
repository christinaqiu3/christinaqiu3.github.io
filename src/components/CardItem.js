import React from 'react';
import {Link} from "react-router-dom";

function CardItem(props) {
    const isExternalLink = /^https?:\/\//.test(props.path); // Check if it's an external link

    const skills = props.skills || []; // Ensure skills is an array or default to an empty array

    return (
        <li className='cards__item'>
            <Link
                className='cards__item__link'
                to={props.path}
                target={isExternalLink ? '_blank' : '_self'} // Set target based on link type
                rel={isExternalLink ? 'noopener noreferrer' : ''}
            >

                <figure className='cards__item__pic-wrap' data-category={props.label}>
                    {/* Use the appropriate element based on the content (video or image) */}
                    {props.src.endsWith('.mp4') ? (
                            <div className='video-container'>
                        <video
                            className='cards__item__img'
                            alt='Travel Video'
                            autoPlay
                            loop
                            muted
                            playsInline // Add the playsInline attribute here
                        >
                            <source src={props.src} type='video/mp4' />
                            Your browser does not support the video tag.
                        </video>
                                <div className='overlay'>
                                    <div className='overlay-text'>{props.text}</div>
                                </div>
                            </div>
                    ) : (
                        <iframe
                            className='cards__item__img'
                            title='YouTube Video'
                            src={`https://www.youtube.com/embed/${props.youtubeId}autoplay=1`}
                            frameBorder='0'
                            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; loop'
                            allowFullScreen
                        ></iframe>
                    )}
                </figure>
                <div className='cards__item__info'>
                    <h5 className='cards__item__text'>Unity water surface shader with adjustable parameters for</h5>
                    <div className='rounded-rectangle-container'>
                        {skills.map((skill, index) => (
                            <div key={index} className='custom-rounded-rectangle'>
                                {skill}
                            </div>
                        ))}
                    </div>
                </div>

            </Link>
        </li>
    );
}

export default CardItem;
