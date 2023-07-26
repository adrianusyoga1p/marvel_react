import React, { useState, useEffect } from 'react'
import './Navbar.css'
import logoImage from '@/assets/images/marvel_logo.png'
import NavLink from './NavLink'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

function Navbar() {
    const [toggleActive, setToggleActive] = useState();

    function toggleBar () {
        setToggleActive(current => !current);
    }

    const [navColor, setNavColor] = useState('transparent');
    const [blur, setBlur] = useState('none');

    const changeBgNavbar = () => {
        if(window.scrollY > 10) {
            setNavColor('#131f5499')
            setBlur('blur(5px')
        } else {
            setNavColor('none')
            setBlur('none')
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeBgNavbar);
        return () => window.removeEventListener('scroll', changeBgNavbar)
    } ,[]);

    return (
        <>
            <div className='w-full py-[16px] px-7 navbar' style={{background: navColor, backdropFilter: blur}}>
                <div className="container mx-auto flex items-center justify-between">
                    <img src={logoImage} alt="" className="logo sm:w-[140px] w-[80px] max-w-full h-auto" />
                    <div className={`navbar-item flex items-center gap-[64px] sm:h-full ${toggleActive ? 'show' : ''}`}>
                        <NavLink to="/">HOME</NavLink>
                        <NavLink to="/gallery">GALLERY</NavLink>
                        <NavLink to="/movies">MOVIES</NavLink>
                    </div>
                    <button className="sm:hidden block toggle text-[20px] text-white" onClick={toggleBar}>
                        <FontAwesomeIcon icon={faBars} />
                    </button>
                </div>
            </div>
        </>
    )
}

export default Navbar
