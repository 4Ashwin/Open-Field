import Link from 'next/link';
import React from 'react';

function Navbar(props) {
    return (
        <div className='flex items-cneter justify-evenly p-3'>
            {
                [
                    ["Home", "/openfield"],
                    ["Farmer Login", "/openfield/farmer_login"],
                    ["Intermediatory login", "/openfield/intermediatory_login"]
                ].map((item, ind) => {
                    return (
                        <Link key={ind} href={item[1]}>{item[0]}</Link>
                    )
                })
            }
        </div>
    );
}

export default Navbar;