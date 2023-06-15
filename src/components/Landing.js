import * as React from 'react'
import '../css/project-base.css'
import '../css/animations.css';
import Navbar from './Navbar';
import Slideshow from './Slideshow';
import Aboutus from './Aboutus';

import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckIcon, ClockIcon } from '@heroicons/react/24/outline';
import { DiagnosticCategory } from 'typescript';

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
          <div className='flex justify-center py-20 fadeInLeft'>
            <div className='grid grid-cols-3 gap-10 Aboutus _lg:grid-cols-2'>
              <Aboutus flag="1" title="Search our Properties" content="Rentals are available in Edwardsville, Collinsville, Glen Carbon, & surrounding cities. We can help you find the perfect apartment, duplex, or townhouse. We manage over 1300 local properties."/>
              <Aboutus flag="2" title="Rental Application" content="Apply online to qualify for one of our rental properties by submitting our Apartment Rental Application. A copy of your ID, income documents and application fee is required in order for your application to be reviewed. Upon approval, a $200 hold deposit will be required to secure a unit."/>
              <Aboutus flag="3" title="SIUE Student Information" content="We strive to be the #1 resource for SIUE off‐campus student housing rentals in the Edwardsville area. It's never to early to submit an application for a fall or spring move‐in reservation."/>
              <Aboutus flag="4" title="Contact Us" content="Call us today for more information about a specific property or to schedule a tour. You can also begin the first step by filling out our rental application."/>
              <Aboutus flag="5" title="Maintenance Request" content="Fill out our form to submit a maintenance request by clicking on the maintenance request tab at the top of this page. We respond to all maintenance requests in a timely manner. If it’s an emergency, please call us at (618) 288-3108 and follow the prompts for emergency maintenance."/>
              <Aboutus flag="6" title="Pay Rent" content="We offer 2 different ways you can pay your rent. Set up ACH debit withdrawals from your checking or savings account. Stop by our rental office located in Maryville and place your payment in our drop box located to the left of our front office door. Payments can be placed in the drop box any time or day. Our office hours are Mon-Fri: 9AM-5PM."/>
            </div>
          </div>

          {/* Business Hour section */}
          <div className='grid grid-cols-3 py-20 text-lg font-bold text-gray-600 _md:grid-cols-1 fadeInRight' style={{backgroundImage: "url('https://lerchproperties.net/wp-content/uploads/2023/06/Lerch-Properties-3.webp')"}}>
            <div className='flex justify-center'>
              <div className='flex flex-col items-start justify-start'>
                <div className='flex flex-row items-center gap-2 text-2xl bg-[#6366f1] rounded-lg p-2 text-white'>Why Choose Us?</div>
                <div className='flex flex-row items-center gap-2 pt-10'><CheckIcon className='w-8 h-8 text-green-800'/>Excellent Customer Service</div>
                <div className='flex flex-row items-center gap-2 pt-2'><CheckIcon className='w-8 h-8 text-green-800'/>Safe, Quality Properties</div>
                <div className='flex flex-row items-center gap-2 pt-2'><CheckIcon className='w-8 h-8 text-green-800'/>Quick Response</div>
                <div className='flex flex-row items-center gap-2 pt-2'><CheckIcon className='w-8 h-8 text-green-800'/>Our Great Reputation</div>
                <div className='flex flex-row items-center gap-2 pt-2'><CheckIcon className='w-8 h-8 text-green-800'/>Leader in the industry</div>
                <div className='flex flex-row items-center gap-2 pt-2'><CheckIcon className='w-8 h-8 text-green-800'/>Affordable Rent Pricing</div>
              </div>
            </div>
            
            <div className='flex justify-center _md:py-10'>
              <div className='flex flex-col'>
                <div className='text-xl bg-[#6366f1] rounded-lg p-2 text-white'>We are Committed to High Standard and Quality Values</div>
                <div className='grid grid-cols-2 pt-10 _md:grid-cols-1'>
                  <div className='flex items-center justify-center'><img src="https://lerchproperties.net/wp-content/uploads/2023/06/Lerch-Properties-4.webp"></img></div>
                  <div className='flex items-center justify-center text-md'>Welcome to your new home away from home! We currently own and manage over 50 different property locations throughout the local area. With Lerch Properties, you will find that we are committed to providing our tenants with a comfortable quality of life. Everyone on our team is dedicated to providing each of our tenants with prompt and friendly service no matter when you need it.</div>
                </div>
              </div>
            </div>
            
            <div className='flex justify-center'>
              <div className='flex flex-col items-start justify-start'>
                <div className='flex flex-row items-center gap-2 text-2xl bg-[#6366f1] rounded-lg p-2 text-white'>Business Hours</div>
                  <div className='flex flex-row items-center gap-2 pt-10'><ClockIcon className='w-8 h-8 text-green-800'/>Monday-----9:00 AM~5:00 PM</div>
                  <div className='flex flex-row items-center gap-2 pt-2'><ClockIcon className='w-8 h-8 text-green-800'/>Tuesday-----9:00 AM~5:00 PM</div>
                  <div className='flex flex-row items-center gap-2 pt-2'><ClockIcon className='w-8 h-8 text-green-800'/>Wednesday-----9:00 AM~5:00 PM</div>
                  <div className='flex flex-row items-center gap-2 pt-2'><ClockIcon className='w-8 h-8 text-green-800'/>Thursday-----9:00 AM~5:00 PM</div>
                  <div className='flex flex-row items-center gap-2 pt-2'><ClockIcon className='w-8 h-8 text-green-800'/>Friday-----9:00 AM~5:00 PM</div>
                  <div className='flex flex-row items-center gap-2 pt-2'><ClockIcon className='w-8 h-8 text-green-800'/>Saturday-----Closed</div>
                  <div className='flex flex-row items-center gap-2 pt-2'><ClockIcon className='w-8 h-8 text-green-800'/>Sunday-----Closed</div>
                </div>
            </div>
          </div>

          {/* Testimonial */}
          <div className='flex flex-col py-10 bg-gray-50 fadeInLeft'>
            <div className='pb-10 text-4xl font-bold text-gray-700'>Testimonials</div>
            <div className='flex flex-row justify-center gap-60 _md:flex-col _md:gap-0'>
              <div className="card">
                <div className="cardheader">
                  <p>Have been renting (lived in 4 states) for almost 20 years now. Renting from Lerch Properties for about a year and maintenance crew is the best I have come across. They are expeditious, friendly and helpful. The ladies in the office are always friendly and helpful, too. Would recommend this company to anyone looking to rent a home.</p>
                </div>
                <div className="text-xl font-bold text-gray-500 cardcontainer">
                  <p>Catherine S.</p>
                </div>
              </div>
              <div className="card">
                <div className="cardheader" style={{paddingBottom: "40px", paddingTop: "30px"}}>
                  <p>I have lived in one of their properties for almost two years now. My townhouse is in a quiet neighborhood, the rent is affordable, and they are pet friendly. Staff and maintenance have always been helpful and timely.</p>
                </div>
                <div className="text-xl font-bold text-gray-500 cardcontainer">
                  <p>Emma D.</p>
                </div>
              </div>
            </div>
          </div>

          <div className='fixed top-0 w-full fadeInDown'>
            <Navbar />
          </div>          
        </div>
      </div>
    );
}

export default Landing;
