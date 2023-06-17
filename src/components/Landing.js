import * as React from 'react'
import '../css/project-base.css'
import '../css/animations.css';

import Navbar from './Navbar';
import Newsletter from './Newsletter';

import Slideshow from './Landing/Slideshow';
import Aboutus from './Landing/Aboutus';
import BlogSection from './Landing/BlogSection';
import Feature from './Landing/Feature';

import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Landing () {
    return (
      <div className="App">
        <div className='relative w-full h-full body'>
          {/* Slideshow section */}
          <div className='relative overflow-hidden' style={{width: "100vw", height: "100vh"}}>
            <Slideshow />
            <div className='absolute w-1/2 text-5xl text-white bg-black bg-opacity-50 fadeInLeft top-1/3 left-1/4 _sm:text-4xl _sm:w-full _sm:left-0 _sm:top-1/3'>
              <div className='font-bold'>WE OFFER QUALITY APARTMENT, TOWNHOUSE & DUPLEX RENTALS WITH AFFORDABLE MONTHLY RATE</div><br></br>
              <span className='text-3xl mt-7 _sm:text-xl'>For More Information Call </span>
              <span className='text-3xl text-yellow-200 mt-7 _sm:text-xl'>(618) 288‐3108</span>
            </div>
          </div>

          {/* Aboutus section */}
          <div className='relative flex items-center justify-center py-20 bg-gradient-to-r from-navy-700 via-navy-500 to-navy-300'>
            {/* <img src="https://raydium.io/backgroundImages/home-bg-element-3.png" className='absolute top-0 w-full h-full _md:hidden' style={{top: "0%"}}></img> */}
            <div className='relative grid grid-cols-3 gap-10 Aboutus _lg:grid-cols-2'>
              <Aboutus flag="1" title="Search our Properties" content="Rentals are available in Edwardsville, Collinsville, Glen Carbon, & surrounding cities. We can help you find the perfect apartment, duplex, or townhouse. We manage over 1300 local properties."/>
              <Aboutus flag="2" title="Rental Application" content="Apply online to qualify for one of our rental properties by submitting our Apartment Rental Application. A copy of your ID, income documents and application fee is required in order for your application to be reviewed. Upon approval, a $200 hold deposit will be required to secure a unit."/>
              <Aboutus flag="3" title="SIUE Student Information" content="We strive to be the #1 resource for SIUE off‐campus student housing rentals in the Edwardsville area. It's never to early to submit an application for a fall or spring move‐in reservation."/>
              <Aboutus flag="4" title="Contact Us" content="Call us today for more information about a specific property or to schedule a tour. You can also begin the first step by filling out our rental application."/>
              <Aboutus flag="5" title="Maintenance Request" content="Fill out our form to submit a maintenance request by clicking on the maintenance request tab at the top of this page. We respond to all maintenance requests in a timely manner. If it’s an emergency, please call us at (618) 288-3108 and follow the prompts for emergency maintenance."/>
              <Aboutus flag="6" title="Pay Rent" content="We offer 2 different ways you can pay your rent. Set up ACH debit withdrawals from your checking or savings account. Stop by our rental office located in Maryville and place your payment in our drop box located to the left of our front office door. Payments can be placed in the drop box any time or day. Our office hours are Mon-Fri: 9AM-5PM."/>
            </div>
          </div>

          {/* Business Hour section */}
          <div className='relative'>
            <img src="https://raydium.io/backgroundImages/home-bg-element-3.png" className='absolute top-0 w-full h-full _md:hidden' style={{top: "0%"}}></img>
            <Feature />
          </div>

          {/* Testimonial */}
          <BlogSection />

          <Newsletter />
          <div className='fixed top-0 w-full fadeInDown'>
            <Navbar />
          </div>          
        </div>
      </div>
    );
}

export default Landing;
