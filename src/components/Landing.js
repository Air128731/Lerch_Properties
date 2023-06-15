import * as React from 'react'
import '../css/project-base.css'
import '../css/animations.css';
import Navbar from './Navbar';
import Slideshow from './Slideshow';
import Aboutus from './Aboutus';

import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Landing () {
    return (
      <div className="App">
        <div className='relative w-full h-full body'>
          <div className='relative overflow-hidden' style={{width: "100vw", height: "100vh"}}>
            <Slideshow />
            <div className='absolute w-1/2 text-5xl text-white top-1/3 left-1/4 _sm:text-4xl _sm:w-full _sm:left-0 _sm:top-1/3'>
              WE OFFER QUALITY APARTMENT, TOWNHOUSE & DUPLEX RENTALS WITH AFFORDABLE MONTHLY RATES<br></br>
              <span className='text-3xl mt-7 _sm:text-xl'>For More Information Call </span>
              <span className='text-3xl text-yellow-200 mt-7 _sm:text-xl'>(618) 288‐3108</span>
            </div>
          </div>

          <div className='flex justify-center my-10'>
            {/* <Aboutus /> */}
          </div>

          <div className='fixed top-0 w-full'>
            <Navbar />
          </div>          
        </div>
      </div>
    );
}

export default Landing;
