import React from 'react';
import {Link} from "react-router-dom";

function CardItem(props) {
    return (
        <li className='cards__item'>
            <Link
                className='cards__item__link'
                to={props.path}
                target='_blank'
                rel='noopener noreferrer'
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
                        >
                            <source src={props.src} type='video/mp4' />
                            Your browser does not support the video tag.
                        </video>
                    ) : (
                        <img
                            className='cards__item__img'
                            alt='Travel Image'
                            src={props.src}
                        />
                    )}
                </figure>
                <div className='cards__item__info'>
                    <h5 className='cards__item__text'>{props.text}</h5>
                </div>
            </Link>
        </li>
    );
}




export default CardItem;
