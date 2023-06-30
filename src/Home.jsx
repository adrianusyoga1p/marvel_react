import React from 'react'
import dataHeroes from "@/data/data.json";
import Carousel from './components/Carousel'

function Home() {
    return (
        <div className='hero relative flex items-center justify-end h-screen w-full'>
            <Carousel data={dataHeroes}/>
        </div>
    )
}

export default Home
