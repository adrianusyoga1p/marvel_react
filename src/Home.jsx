import React from 'react'
import dataHeroes from "@/data/data.json";
import Carousel from './components/Carousel'

function Home() {
    return (
        <div className='hero absolute flex items-center justify-center h-full w-full'>
            <Carousel/>
        </div>
    )
}

export default Home
