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
                        to='mailto:chuu@seas.upenn.edu'
                        target='_blank'
                        aria-label='Email'
                    >
                        <i className='fas fa-envelope-open-text' />
                    </Link>
                    <Link
                        className='social-icon-link linkedin'
                        to='https://www.linkedin.com/in/christina-qiu-6094301b6/'
                        target='_blank'
                        aria-label='LinkedIn'
                    >
                        <i className='fab fa-linkedin' />
                    </Link>
                    <Link
                        className='social-icon-link github'
                        to='https://github.com/christinaqiu3'
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