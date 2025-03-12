import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";


function CardItem(props) {
    const isExternalLinkPath = /^https?:\/\//.test(props.path); // Check if it's an external link
    const isExternalLinkRead = /^https?:\/\//.test(props.iconRead);
    const isExternalLinkLink = /^https?:\/\//.test(props.iconLink);
    const isExternalLinkCode = /^https?:\/\//.test(props.iconCode);

    const skills = props.skills || []; // Ensure skills is an array or default to an empty array


    return (
        <li className='cards__item'>
            {/* Conditionally render Link or <a> based on whether path is internal or external */}
            {isExternalLinkPath ? (
                <a
                    href={props.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className='cards__item__link'
                >
                    {/* Your content here */}
                </a>
            ) : (
                <Link
                    className='cards__item__link'
                    to={props.path}
                >
                    {/* Your content here */}
                </Link>
            )}

            <figure className='cards__item__pic-wrap' data-category={props.label}>
                {props.src.endsWith('.mp4') ? (
                    <div className='video-container'>
                        <video
                            className='cards__item__img'
                            alt='Travel Video'
                            autoPlay
                            loop
                            muted
                            playsInline
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
                        src={`https://www.youtube.com/embed/${props.youtubeId}?autoplay=1`}
                        frameBorder='0'
                        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; loop'
                        allowFullScreen
                    ></iframe>
                )}

                <div className='cards__icons'>
                    {/* iconRead */}
                    {props.iconRead && (
                        <div className='cards__icon'>
                            {isExternalLinkRead ? (
                                <a
                                    href={props.iconRead}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img
                                        src="/images/icons8-note-48.png"
                                        alt="Read Icon"
                                        style={{ width: '18px', height: '18px' }}
                                    />
                                </a>
                            ) : (
                                <Link to={props.iconRead}>
                                    <img
                                        src="/images/icons8-note-48.png"
                                        alt="Read Icon"
                                        style={{ width: '18px', height: '18px' }}
                                    />
                                </Link>
                            )}
                        </div>
                    )}

                    {/* iconLink */}
                    {props.iconLink && (
                        <div className='cards__icon'>
                            {isExternalLinkLink ? (
                                <a
                                    href={props.iconLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img
                                        src="/images/icons8-link-52.png"
                                        alt="Link Icon"
                                        style={{ width: '18px', height: '18px' }}
                                    />
                                </a>
                            ) : (
                                <Link to={props.iconLink}>
                                    <img
                                        src="/images/icons8-link-52.png"
                                        alt="Link Icon"
                                        style={{ width: '18px', height: '18px' }}
                                    />
                                </Link>
                            )}
                        </div>
                    )}

                    {/* iconCode */}
                    {props.iconCode && (
                        <div className='cards__icon'>
                            {isExternalLinkCode ? (
                                <a
                                    href={props.iconCode}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img
                                        src="/images/icons8-source-code-64.png"
                                        alt="Code Icon"
                                        style={{ width: '18px', height: '18px' }}
                                    />
                                </a>
                            ) : (
                                <Link to={props.iconCode}>
                                    <img
                                        src="/images/icons8-source-code-64.png"
                                        alt="Code Icon"
                                        style={{ width: '18px', height: '18px' }}
                                    />
                                </Link>
                            )}
                        </div>
                    )}
                </div>
            </figure>

            <div className='cards__item__info'>
                {props.fillertext ? (
                    <h5 className='cards__item__text__sm'>Unity water surface shader with adjustable parameters for</h5>
                ) : (
                    <h5 className='cards__item__text'>Unity water surface shader with adjustable parameters for</h5>
                )}
                <div className='rounded-rectangle-container'>
                    {skills.map((skill, index) => (
                        <div key={index} className='custom-rounded-rectangle'>
                            {skill}
                        </div>
                    ))}
                </div>
            </div>
        </li>
    );
}

export default CardItem;
