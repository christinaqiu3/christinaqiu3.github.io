import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';
import {Button} from "./Button";
import { NavLink } from 'react-router-dom';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 930) {
            setButton(false)
            if (click) {
                setClick(false);
            }
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    useEffect(() => {
        const smoothScroll = (targetId) => {
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                const offset = 8 * parseFloat(getComputedStyle(document.documentElement).fontSize); // 8rem in pixels
                window.scrollTo({
                    top: targetElement.offsetTop - offset,
                    behavior: 'smooth',
                });
            }
        };

        // Add smooth scroll behavior when clicking on anchor links
        document.querySelectorAll('.nav-links').forEach((link) => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = e.target.getAttribute('href').substring(1); // Get the target ID without the '#'
                smoothScroll(targetId);
            });
        });
    }, []);

    const [emoji, setEmoji] = useState("🌕");

    window.addEventListener('resize', showButton);

    const toggleDarkMode = () => {
        const root = document.documentElement;
        const isDarkMode = root.classList.contains('dark-mode');
        if (isDarkMode) {
            root.style.setProperty('--background', '#ffffff');
            root.style.setProperty('--text', '#000000');
            root.style.setProperty('--card', '#e6e7ff');
            root.style.setProperty('--heading', '#000000');
            //root.style.setProperty('--nav-background', '#959CF8');
        } else {
            root.style.setProperty('--background', '#000000'); //#32324b//222628
            root.style.setProperty('--text', '#959CF8');//D3D3F0
            root.style.setProperty('--card', '#32324b');
            root.style.setProperty('--heading', '#959CF8');
            //root.style.setProperty('--nav-background', '#656FC8');
        }
        setEmoji(isDarkMode ? "🌕" : "🌑");
        root.classList.toggle('dark-mode');
    };

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu} >
                        CHRISTINA QIU
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <a href='#about' className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </a>
                        </li>
                        <li className='nav-item'>
                            <a href='#game' className='nav-links' onClick={closeMobileMenu}>
                                Game Dev
                            </a>
                        </li>
                        <li className='nav-item'>
                            <a href='#web' className='nav-links' onClick={closeMobileMenu}>
                                Web Dev
                            </a>
                        </li>
                        <li className='nav-item'>
                            <a href='#art' className='nav-links' onClick={closeMobileMenu}>
                                Artwork
                            </a>
                        </li>

                        <button onClick={toggleDarkMode}>{emoji}</button>

                        <br></br><br></br>
                    </ul>
                </div>
            </nav>

        </>
    )
}

export default Navbar;
