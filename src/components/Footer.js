import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className='footer-container'>
            <div className='footer-links'>
                <div className='vertical'>

                <Link to='/' className='social-logo'>
                    Christina Qiu
                </Link>

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


                <div className='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>Game Dev</h2>
                        <Link to='/'>Galaxy Gacha</Link>
                        <Link to='/'>Fairy Minigame</Link>
                        <Link to='/'>Trick Gamejam</Link>
                        <Link to='/'>Alice RPG</Link>
                        <Link to='/'>CHOP Consent</Link>
                    </div>
                    <div className='footer-link-items'>
                        <h2>Web Dev</h2>
                        <Link to='/'>PennApps</Link>
                        <Link to='/'>Thrift Store</Link>
                        <Link to='/'>This Site Process</Link>
                        <Link to='/'>Experimental</Link>
                    </div>
                    <div className='footer-link-items'>
                        <h2>Artwork</h2>
                        <Link to='/'>Paintings</Link>
                        <Link to='/'>Digital Art</Link>
                        <Link to='/'>3D Modeling</Link>
                        <Link to='/'>Animation</Link>
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