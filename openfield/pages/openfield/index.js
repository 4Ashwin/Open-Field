import Navbar from '@/components/navbar';
import Link from 'next/link';
import React from 'react';
import { FaLocationDot } from "react-icons/fa6";

function openfield(props) {
    return (
        <div>
            <Navbar />
            <div className='w-screen h-screen'>
                <iframe className='absolute z-0' width="100%" height="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=%20Bengaluru+()&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe> <a href='https://www.krankenversicherungsvergleich.at/'>Zusatzversicherung Vergleich</a> <script type='text/javascript' src='https://embedmaps.com/google-maps-authorization/script.js?id=9ab34e5f13f68669c6803a130144e0e2aa069edb'></script>

                <div>
                    <Link href="/openfield/farmer_profile" className='absolute top-[50%] left-[50%] z-10 '>
                        <div className='h-64 group'>
                            <FaLocationDot className='absolute left-0 text-red-600 text-6xl z-10' />
                            <div className='hidden group-hover:block absolute z-20 right-0 text-black backdrop-blur-md flex flex-col items-start'>
                                <p className=' font-bold text-xl'>Sreehari</p>
                                <p className=' font-bold text-xl'>4.5/5</p>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default openfield;