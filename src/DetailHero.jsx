import React from 'react'
import dataHeroes from "@/data/data.json"
import { useParams } from 'react-router-dom'

function DetailHero() {
    const data = dataHeroes["heroes"];
    
    const { id } = useParams();

    return (
        <div className='section content h-auto relative px-7 sm:px-0 overflow-y-scroll py-[88px]'>
            {data.map((item)=> {
                if (item["id"] === id){
                    return <div key={item["id"]} className="flex items-center justify-center flex-col md:gap-[64px] gap-[24px]">
                        <h1 className='text-white text-[42px] mt-0 mb-[48px]'>{item["nameHero"]}</h1>
                        <div className="flex md:flex-row flex-col items-center bg-[#0C122D] w-full md:h-[350px] h-[600px]" style={{borderTop: "4px solid var(--colorRed)"}}>
                            <div className="md:w-[45%] w-full md:h-[450px] h-full rounded-[5px] overflow-hidden" style={{clipPath: "polygon(0 1%, 72% 1%, 100% 100%, 0% 100%)"}}>
                                <img className='object-cover object-center w-full h-full' src={item["content"].image} alt="" />
                            </div>
                            <div className="md:w-[55%] w-full md:pr-[32px] p-[32px]">
                                <p className='text-white text-[18px] font-franklin-gothic'>{item["content"].description}</p>
                                <p className='text-white text-[28px] mt-4'>- {item["content"].aliasName} -</p>
                            </div>
                        </div>
                    </div>;
                }
            })}
        </div>
    )
}

export default DetailHero
