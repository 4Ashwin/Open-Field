import Link from 'next/link';
import React from 'react';

function Navbar(props) {
    return (


        <div className="navbar bg-base-100 max-w-screen  fixed top-0 left-0 w-full z-10">
            <div className="flex-1">
                <Link href={"/openfield"} className="btn btn-ghost text-xl">OpenField</Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li><a>Link</a></li>
                    <li>
                        <details>
                            <summary>
                                Login as
                            </summary>
                            <ul className="p-2 bg-base-100 rounded-t-none">
                                {
                                    [
                                        ["Farmer", "/openfield/farmer_login"],
                                        ["Distributor", "/openfield/distributor_login"],
                                        ["Regulatory board", "/openfield/regulatory_board_login"],
                                        ["Producer", "/openfield/producer_login"]
                                    ].map((item, ind) => {
                                        return (
                                            <li>

                                                <Link key={ind} href={item[1]}>{item[0]}</Link>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </details>
                    </li>
                </ul>
            </div>
        </div>

    );
}

export default Navbar;