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
                    ) : (
                        <img className='cards__item__img' alt='' src={props.src} />
                    )}
                </figure>
                <div className='cards__item__info'>
                    <h5 className='cards__item__text'>{props.text}</h5>
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
