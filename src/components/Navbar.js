import {useState, useEffect} from 'react';
import {NavLink} from 'react-router-dom';
import './Navbar.css';
//import {Button} from "./Button";
//import {NavLink} from 'react-router-dom';

function Navbar() {
    const [click, setClick] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);
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

    //const [emoji, setEmoji] = useState("🌕");

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
            root.style.setProperty('--card', '#1f2134');
            root.style.setProperty('--heading', '#959CF8');
            //root.style.setProperty('--nav-background', '#656FC8');
        }
        setIsDarkMode(!isDarkMode);
        //setEmoji(isDarkMode ? "☀️" : "🌙");
        root.classList.toggle('dark-mode');
    };

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <NavLink to="/" className="navbar-logo" onClick={closeMobileMenu} >
                        CHRISTINA QIU
                    </NavLink>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <NavLink to="/" className='nav-links' onClick={closeMobileMenu}>
                                About
                            </NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink to="/projects" className='nav-links' onClick={closeMobileMenu}>
                                Projects
                            </NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink to="/portfolio" className='nav-links' onClick={closeMobileMenu}>
                                Portfolio
                            </NavLink>
                        </li>


                        <button onClick={toggleDarkMode} className="LD">
                            <img src={isDarkMode ? "images/icons8-moon-and-stars-48.png" : "images/icons8-sun-48.png"} alt="Sun/Moon" width="28" height="28" className="LD-image"/>
                        </button>

                        <br></br><br></br>
                    </ul>
                </div>
            </nav>

        </>
    )
}

export default Navbar;
