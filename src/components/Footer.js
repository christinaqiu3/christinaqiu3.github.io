import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className='footer-container'>
            <div className='footer-links'>
                <div className='vertical'>

                <div className='social-icons'>
                    <Link
                        className='social-icon-link youtube'
                        to='/'
                        target='_blank'
                        aria-label='Youtube'
                    >
                        <i className='fab fa-youtube' />
                    </Link>
                    <Link
                        className='social-icon-link linkedin'
                        to='/'
                        target='_blank'
                        aria-label='LinkedIn'
                    >
                        <i className='fab fa-linkedin' />
                    </Link>
                </div>
                </div>

            </div>
                <div class='social-media-wrap'>
                    <small class='website-rights'>Made by Christina Qiu using React</small>
                </div>
        </div>
    );
}

export default Footer;