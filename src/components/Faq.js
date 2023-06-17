import * as React from 'react'
import '../css/project-base.css'
import '../css/animations.css';
import Navbar from './Navbar';
import Newsletter from './Newsletter';
import Rental from './Application/Rental';
import Accordions from './Application/Accordions';

function Listings () {
    return (
      <div className="App">
        <div className='relative w-full h-full body'>    
            <img src="https://lerchproperties.net/wp-content/uploads/2023/06/Lerch-Properties-19.webp" className='w-full h-24'></img>      
            {/* Rental Application */}
            <div className='fadeInLeft'>
              <Rental />
            </div>
            
            {/* Faq */}
            <div className='border border-gray-300 fadeInUp'>
              <Accordions />
            </div>

          <Newsletter />
          <div className='fixed top-0 w-full fadeInDown'>
            <Navbar />
          </div>          
        </div>
      </div>
    );
}

export default Listings;
