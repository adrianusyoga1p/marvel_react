import React from 'react'
import './App.css'
import Navbar from './layout/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Gallery from './Gallery'
import Movies from './Movies'
import DetailHero from './DetailHero'

function App() {
    return (
        <div className='w-full lg:h-screen h-full flex items-center'>
            <h1 className="lg:text-[350px] sm:text-[200px] background m-0 text-[100px]">MARVEL</h1>
                <Navbar />
                <div className="container flex items-center mx-auto w-full h-full justify-center">
                    <Routes>
                        <Route path='/' element={<Home/>} />
                        <Route path='/gallery' element={<Gallery/>} />
                        <Route path='/movies' element={<Movies/>} />
                        <Route path='/detailhero/:id' element={<DetailHero/>} />
                    </Routes>
                </div>
        </div>
    )
}

export default App
