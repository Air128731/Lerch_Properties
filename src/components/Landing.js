import * as React from 'react'
import '../css/project-base.css'
import '../css/animations.css';
import Navbar from './Navbar';
import Slideshow from './Slideshow';

import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Landing () {
    return (
      <div className="App">
        <div className='relative w-full h-full body'>
          <div className='relative overflow-hidden' style={{width: "100vw", height: "100vh"}}>
            <Slideshow />
          </div>
          
          <div className='fixed top-0 w-full'>
            <Navbar />
          </div>          
        </div>
      </div>
    );
}

export default Landing;
