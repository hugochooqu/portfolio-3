import React from 'react';

export default function Header(){
    return(
        <div className='bg-fuchsia-500 h-12 fixed w-8/12 '>
            <ul className='flex justify-around pt-2  text-neutral-100 font-semibold text-lg'>
                <li>
                    Home
                </li>
                <li>
                    About
                </li>
                <li>
                    Skills
                </li>
                <li>
                    Contact
                </li>
            </ul>
        </div>
    )
}