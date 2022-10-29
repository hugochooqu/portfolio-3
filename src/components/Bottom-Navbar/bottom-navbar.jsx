import React from "react";

export default function BottomNavbar() {
    return(
        <div className='bg-neutral-100 h-14 '>
            <ul className='flex justify-around pt-2  text-neutral-800 font-semibold text-lg'>
                <li>
                    Resume
                </li>
                <li>
                    Blog
                </li>
                <li>
                    Schedule call
                </li>
                <li>
                    Latest work
                </li>
            </ul>
        </div>
    )
}