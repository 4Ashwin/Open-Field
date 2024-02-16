import Navbar from '@/components/navbar';
import React from 'react';

function openfield(props) {
    return (
        <div>
            <Navbar />
            <div className='w-screen h-screen'>
                <iframe width="100%" height="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=%20Bengaluru+()&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe> <a href='https://www.krankenversicherungsvergleich.at/'>Zusatzversicherung Vergleich</a> <script type='text/javascript' src='https://embedmaps.com/google-maps-authorization/script.js?id=9ab34e5f13f68669c6803a130144e0e2aa069edb'></script>
            </div>
        </div>
    );
}

export default openfield;