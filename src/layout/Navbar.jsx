import React, { useState } from 'react'
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

    return (
        <>
            <div className='w-full py-[16px] px-7 navbar'>
                <div className="container mx-auto flex items-center justify-between">
                    <img src={logoImage} alt="" className="logo w-[140px] max-w-full h-auto" />
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
