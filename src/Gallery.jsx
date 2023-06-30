import React, { useState, useEffect, useRef } from 'react'
import '@/components/Input.css'
import '@/components/Dropdown.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import dataHeroes from "@/data/data.json"
import { Link } from 'react-router-dom'


function Gallery() {
    const data = dataHeroes["heroes"];

    const [dropdownActive, setThisActive] = useState(false);
    const dropRef = useRef();

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropRef.current && !dropRef.current.contains(event.target)) {
                setThisActive(false);
            }
        };
    
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className='section content h-full relative pt-[180px] pb-[96px] px-7 sm:px-0 overflow-y-scroll overflow-x-hidden'>
            <h1 className='text-white'>MARVEL UNIVERSE</h1>
            <div className="flex flex-wrap justify-between items-center mb-10">
                <div className="input-group md:w-1/2 w-full">
                    <FontAwesomeIcon className='absolute text-[#aaa]' icon={faMagnifyingGlass} />
                    <input type="text" placeholder='search' />
                </div>
                <div className="dropdown relative" ref={dropRef}>
                    <button className={`btn dropdown-btn text-lg text-white p-4 mr-0 ${dropdownActive ? 'active' : ''}`} onClick={() => setThisActive(!dropdownActive)}><span className='mr-2'>SORT BY</span>
                        <FontAwesomeIcon icon={faChevronDown} size='xs'/>
                    </button>
                    {dropdownActive && (
                        <ul className='dropdown-menu absolute bg-slate-100 w-full rounded overflow-hidden'>
                            <li className='dropdown-item'><a className='p-3 dropdown-link block' href="#">A TO Z</a></li>
                            <li className='dropdown-item'><a className='p-3 dropdown-link block' href="#">Z TO A</a></li>
                            <li className='dropdown-item'><a className='p-3 dropdown-link block' href='#'>MOVIE</a></li>
                            <li className='dropdown-item'><a className='p-3 dropdown-link block' href="#">TV</a></li>
                        </ul>
                    )}
                </div>
            </div>
            <div className="flex flex-wrap items-center -mx-3">
                {data.map((item) => (
                    <div key={item["id"]} className="md:w-full md:basis-1/4 w-full h-full px-3 mb-6">
                        <Link to={`/detailhero/${item["id"]}`}>
                            <div className="bg-white w-full h-full">
                                <div className="flex flex-col items-center">
                                    <div className="h-[200px] w-full card-img">
                                        <img src={item["content"].image} className="object-cover max-w-full w-full h-full" />
                                    </div>
                                    <div className="content h-min flex flex-col justify-center items-center py-6">
                                        <h2 className='my-auto text-2xl'>{item["nameHero"]}</h2>
                                        <h2 className='text-base my-auto'>{item["content"].aliasName}</h2>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Gallery