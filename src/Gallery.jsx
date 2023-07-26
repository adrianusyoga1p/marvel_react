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
    const [filter, setFilter] = useState(data)
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

    // Filter data
    const search = (q) => {
        const query = q.target.value;
        let updateList = [...data];
        updateList = updateList.filter(item => {
            return (
                item.nameHero.toLowerCase().indexOf(query.toLowerCase()) !== -1 || item.content.aliasName.toLowerCase().indexOf(query.toLowerCase()) !== -1
            )
        });
        setFilter(updateList)
    };

    return (
        <div className='section content w-full h-full sm:px-4 pt-[120px] px-[20px]'>
            <h1 className='text-white'>MARVEL UNIVERSE</h1>
            <div className="flex flex-wrap justify-between items-center sm:mb-10 mb-4">
                <div className="input-group md:w-1/2 w-full">
                    <FontAwesomeIcon className='absolute text-[#aaa]' icon={faMagnifyingGlass} />
                    <input type="text" placeholder='search' onChange={search}/>
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
                {filter.map((item) => {
                    return (
                        <div key={item?.id} className="md:w-full sm:basis-1/2 lg:basis-1/4 w-full h-full px-3 mb-6">
                            <Link to={`/detailhero/${item?.id}`}>
                                <div className="bg-white w-full h-full">
                                    <div className="flex flex-col items-center">
                                        <div className="h-[200px] w-full card-img">
                                            <img src={item?.content.image} className="object-cover max-w-full w-full h-full" />
                                        </div>
                                        <div className="content h-min flex flex-col justify-center items-center py-6">
                                            <h2 className='my-auto text-2xl'>{item.nameHero}</h2>
                                            <h2 className='text-base my-auto'>{item?.content.aliasName}</h2>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Gallery
