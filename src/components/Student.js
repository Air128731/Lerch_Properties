import * as React from 'react'
import '../css/project-base.css'
import '../css/animations.css';
import Navbar from './Navbar';
import Newsletter from './Newsletter';
import StudentItem from './StudentItem';

function Listings () {
    return (
      <div className="App">
        <div className='relative w-full h-full body'>
            <img src="https://www.lpc.com/wp-content/uploads/2018/04/rooftop_banner2.jpg" style={{width: "100%", height: "200px"}}></img>       
            
            <div className="max-w-2xl pt-20 mx-auto sm:text-center fadeInDown">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Housing for Students – Lerch Properties</h2>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                    View our frequently available units below, for students in the Edwardsville/Glen Carbon area, which are located just minutes from the SIUE campus.
                </p>
            </div>


            <StudentItem />
            <StudentItem />
            <StudentItem />
            <StudentItem />
            <StudentItem />
            
          <Newsletter />
          <div className='fixed top-0 w-full fadeInDown'>
            <Navbar />
          </div>          
        </div>
      </div>
    );
}

export default Listings;
