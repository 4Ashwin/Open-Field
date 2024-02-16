import Navbar from '@/components/navbar';
import Link from 'next/link';
import React from 'react';
import { FaLocationDot } from "react-icons/fa6";

function openfield(props) {
    const farmers = [
        {
            name: "Sreehari",
            rating: "3.5",
            left: "45%",
            top: "30%"
        },
        {
            name: "Ashwin",
            rating: "4.5",
            left: "50%",
            top: "45%"
        },
        {
            name: "Nooha",
            rating: "4.5",
            left: "46%",
            top: "35%"
        },
        {
            name: "Asher",
            rating: "4.9",
            left: "43%",
            top: "43%"
        },
    ]
    return (
        <div>
            <Navbar />
            <div className='w-screen h-screen relative'>
                <iframe style={{ pointerEvents: "none" }} className='absolute z-0' width="100%" height="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=%20Bengaluru+()&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed&z=6"></iframe> <a href='https://www.krankenversicherungsvergleich.at/'>Zusatzversicherung Vergleich</a> <script type='text/javascript' src='https://embedmaps.com/google-maps-authorization/script.js?id=9ab34e5f13f68669c6803a130144e0e2aa069edb'></script>

                <div className='w-full h-full relative'>
                    {
                        farmers.map((item, ind) => {
                            return (
                                <Link style={{ top: item.top, left: item.left }} href="/openfield/farmer_profile" className={`absolute`}>

                                    <div className='h-64 absolute group'>
                                        <FaLocationDot className='absolute left-0 text-red-600 text-6xl z-[1]' />
                                        <div className='hidden group-hover:block absolute z-[2] right-0 text-black backdrop-blur-md flex flex-col items-start p-4 rounded-md min-w-64'>
                                            <p className=' font-bold text-xl'>{item.name}</p>
                                            <p className=' font-bold text-xl'>{item.rating}/5</p>
                                        </div>
                                    </div>
                                </Link>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default openfield;