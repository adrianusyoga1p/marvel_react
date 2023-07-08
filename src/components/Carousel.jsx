import React, { useState } from 'react'
import { animated, useSprings } from '@react-spring/web';
import { Link } from 'react-router-dom'
import dataHeroes from "@/data/data.json"
import './Carousel.css'

function Carousel() {
    const data = dataHeroes["heroes"];

    const[activeIndex, setActiveIndex] = useState(0);

    // const visibleItems = 3;

    // const visibleData = data.slice(activeIndex, activeIndex + visibleItems);

    // const springs = useSprings(
    //     visibleData.length,
    //     visibleData.map((item, i) => ({
    //         transform: `translateY(${i * 100}%)`,
    //     }))
    // )

    // const handleClick = (direction) => {
    //     if (direction === 'up') {
    //       setActiveIndex((prevIndex) => (prevIndex === 0 ? data.length - visibleItems : prevIndex - 1));
    //     } else {
    //       setActiveIndex((prevIndex) => (prevIndex === data.length - visibleItems ? 0 : prevIndex + 1));
    //     }
    //   };

    const lengthOfItem = data.length;

    const downSlide = () => {
        setActiveIndex(activeIndex === lengthOfItem - 1 ? 0 : activeIndex + 1)
    };

    const upSlide = () => {
        setActiveIndex(activeIndex === 0 ? lengthOfItem - 1 : activeIndex - 1)
    };

    if(!Array.isArray(data) || data.lengthOfItem <= 0){
        return null;
    }

    return (
    <div className="carousel flex flex-row items-center">
        <div className="carousel-inner flex flex-col h-full items-center">
            {data.map((item, index) => (
                <div key={item["id"]} className={`md:w-[350px] w-[250px] md:h-[500px] h-[350px] ${index === activeIndex ? 'carousel-item active' : 'carousel-item'}`}>
                    <Link to={`/detailhero/${item["id"]}`} className='block h-[500px] w-full'>
                        <img className='object-cover w-full h-full' src={item["content"].image} alt={item["nameHero"]} />
                    </Link>
                </div>
            ))}
        </div>
        <div className="btn-group flex gap-[32px]">
            <button type="button" className="btn Down" onClick={downSlide}>slide down</button>
            <button type="button" className="btn Up" onClick={upSlide}>slide up</button>
        </div>
    </div>
    )
}


export default Carousel;
