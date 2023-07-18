import React, {useState, useEffect} from 'react';
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

    window.addEventListener('resize', showButton);

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
                            <NavLink to='/' className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink to='/gamedev' className='nav-links' onClick={closeMobileMenu}>
                                Game Dev
                            </NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink to='/webdev' className='nav-links' onClick={closeMobileMenu}>
                                Web Dev
                            </NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink to='/artwork' className='nav-links' onClick={closeMobileMenu}>
                                Artwork
                            </NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink to='/about' className='nav-links' onClick={closeMobileMenu}>
                                About
                            </NavLink>
                        </li>
                        <br></br><br></br>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar;
