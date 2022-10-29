import React from 'react';

import './home.styles.css'
import Header from '../../components/Header/header';
import BottomNavbar from '../../components/Bottom-Navbar/bottom-navbar';

export default function Home() {
    return (
        <div className='w-auto h-screen flex'>
          <div className='w-4/12 h-screen portfolioColor'>
            <h1 className='text-neutral-100 
            lg:text-2xl font-semibold 
            relative top-4 lg:left-48 left-10'>
            PORTFOLIO.
            </h1>
            <h1 className='text-neutral-100 text-lg lg:text-3xl relative top-60 left-10 lg:left-48'>
                Hello,
            </h1>
            <h1 className='
            text-neutral-100 text-xl lg:text-4xl
              font-bold 
              relative top-64 left-10 lg:left-48 '>
                I'm Ugochukwu Victor
            </h1>
            <p className='lg:text-xl bg-blue-700 w-48 relative left-20 lg:left-80 top-72 pl-2 font-semibold'>
                A FRONT-END DEV.
            </p>
         </div> 
         <div className=' h-screen w-8/12'>
            <Header />
            
             <div className='profilePicture  '/>

             <BottomNavbar />
             
         </div>
        
        </div>

    )
}
 
