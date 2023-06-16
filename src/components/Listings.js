import * as React from 'react'
import '../css/project-base.css'
import '../css/animations.css';
import Navbar from './Navbar';
import Footer from './Footer';

import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Property from './Property';
import { useTheme } from 'styled-components';
import { listClasses } from '@mui/material';
const data = require('../data/data.json');

function Listings () {
  const [listingContent, setListingContent] = useState([]);

  useEffect(() => {
    const tmp = [];
    for (let i = 0; i < data.length; i++) {
      tmp.push(<Property imageUrl={data[i].imageUrl} title={data[i].title} price={data[i].price} status={data[i].status}/>);
    }
    setListingContent(tmp);
  }, []);

    return (
      <div className="App">
        <div className='relative w-full h-full body'>            
          <div className='title fadeInRight'>
              <img src="https://www.lpc.com/wp-content/uploads/2018/05/header.jpg" style={{height: "130px", width:"100%"}}></img>
              <div className='py-5 text-3xl font-bold text-gray-700'>Apartments & Townhomes For Rent</div>
              <div className='py-1 text-xl font-bold text-gray-500'>Below you will find the most up-to-date list of units we have available.</div>
              {/* <div className='py-1 italic font-bold text-red-500 text-md'>Please note: Photos listed on our site may not be exact to your unit. Floor plans will be the same, however, each unit will have some cosmetic differences.</div> */}
          </div>
            <div className='grid grid-cols-5 gap-2 p-10 duration-300 ease-in-out transitioin-all listingContent _md:grid-cols-3 fadeInLeft'>
              {listingContent}
            </div>
          <Footer />
          <div className='fixed top-0 w-full fadeInDown'>
            <Navbar />
          </div>          
        </div>
      </div>
    );
}

export default Listings;
