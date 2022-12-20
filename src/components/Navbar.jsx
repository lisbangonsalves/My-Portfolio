import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import logo from '../assets/logo.png'
import resume from '../assets/resume.pdf'

import './Navbar.css'

const Navbar = () => {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const closeMenu = () => setClick(false)

    return (
        <div className='header'>
            <nav className='navbar'>
                <a href='/' className='logo'>
                    <img src={logo} alt='logo' />
                </a>
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={30} style={{ color: '#ffffff' }} />)
                        : (<FaBars size={30} style={{ color: '#ffffff' }} />)}

                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className='nav-item'>
                        <a href='#about' onClick={closeMenu}>About</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#experience' onClick={closeMenu}>Experience</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#work' onClick={closeMenu}>Work</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#projects' onClick={closeMenu}>Projects</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#contact' onClick={closeMenu}>Contact</a>
                    </li>
                    <li className='nav-item resumebtn'>
                        <a href={resume} download ={resume} onClick={closeMenu}>Resumé</a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
