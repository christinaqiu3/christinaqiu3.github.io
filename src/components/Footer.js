import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className='footer-container'>
            <div className='footer-links'>
                <div className='social-icons'>
                    <Link
                        className='social-icon-link-foot email'
                        to='mailto:chuu@seas.upenn.edu'
                        target='_blank'
                        aria-label='Email'
                    >
                        <i className='fas fa-envelope-open-text' />
                    </Link>
                    <Link
                        className='social-icon-link-foot linkedin'
                        to='https://www.linkedin.com/in/christina-qiu-6094301b6/'
                        target='_blank'
                        aria-label='LinkedIn'
                    >
                        <i className='fab fa-linkedin' />
                    </Link>
                    <Link
                        className='social-icon-link-foot github'
                        to='https://github.com/christinaqiu3'
                        target='_blank'
                        aria-label='GitHub'
                    >
                        <i className='fab fa-github' />
                    </Link>
                    <Link
                        className='social-icon-link-foot resume'
                        to='https://docs.google.com/document/d/1T4t-cWnUCJLQr6aDtaHePDn3ETmcyxLqvvNcqZW6Z5Y/edit#heading=h.s7eubbvdu4vb'
                        target='_blank'
                        aria-label='Resume'
                    >
                        <i className='fas fa-file-invoice' />
                    </Link>
                </div>
                </div>
                <div class='social-media-wrap'>
                    <small class='website-rights'>Made with ♥︎ by Christina Qiu</small>
                </div>
            <small className='updates'>Last updated June 2024</small>
        </div>
    );
}

export default Footer;