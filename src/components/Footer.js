import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className='footer-container'>
            <div className='footer-links'>
                <div className='social-icons'>
                    <Link
                        className='social-icon-link email'
                        to='/'
                        target='_blank'
                        aria-label='Email'
                    >
                        <i className='fas fa-envelope' />
                    </Link>
                    <Link
                        className='social-icon-link linkedin'
                        to='/'
                        target='_blank'
                        aria-label='LinkedIn'
                    >
                        <i className='fab fa-linkedin' />
                    </Link>
                    <Link
                        className='social-icon-link github'
                        to='/'
                        target='_blank'
                        aria-label='GitHub'
                    >
                        <i className='fab fa-github' />
                    </Link>
                </div>
                </div>
                <div class='social-media-wrap'>
                    <small class='website-rights'>Made by Christina Qiu using React</small>
                </div>
        </div>
    );
}

export default Footer;