/* https://lorwatch.vercel.app/ */

import * as React from 'react'
import '../css/react-base.css'
import '../css/animations.css';
import { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Pagination from './Pagination';
import { useNavigate } from 'react-router-dom';

function Landing () {
    const [tableContent, setTableContent] = useState([]);
    const navigate = useNavigate();

    function goToDetailed(){
      navigate('/detailed', { replace: true });
    }

    useEffect(() => {
      var content = [];

      for(var i = 0; i < 5 ; i ++){
        content = [...content, (
          <div className='tableRow flex flex-row text-left pl-10 _md:pl-0 py-5'>
            <div className='text-gray-300 w-1/5 py-2 flex flex-row'>
              <div className='pr-2 flex justify-center items-center'><img src="img/table_icon.png"></img></div>
              <div className='flex flex-col hover:cursor-pointer' onClick={goToDetailed}>
                <div className='pb-2 flex justify-center items-center'>DNaira DNR</div>
                <div><img src="img/table_vote.png"></img></div>
              </div>
            </div>
            <div className='text-gray-300 w-1/5 py-2 smHidden'>$ 27,019.52</div>
            <div className='text-green-600 w-1/5 py-2 smShow'>+2.61%</div>
            <div className='text-gray-300 w-1/5 py-2 smHidden'>$462.14M</div>
            <div className='text-gray-300 w-1/5 py-2 smHidden'>Detail</div>
          </div>
        )];  
      }

      setTableContent(content);
    }, []);

    return (
      <div className="App">
        <Navbar />

        <div className='body flex flex-col justify-center items-center'>
          <div className=''>
            <div className='lorWatch text-left py-10'>
              <p className='text-white text-3xl font-bold'>LorWatch</p>
            </div>

            <div className='tableSortList flex flex-row justify-between py-5'>
              <div className='tableHrefs text-sm flex items-center'>
                <a href="#" className='active text-center text-gray-500 px-3 py-3 rounded-md mx-1'>All tokens</a>
                <a href="#" className='text-center text-gray-500 px-3 py-3 rounded-md mx-1'>Available</a>
                <a href="#" className='text-center text-gray-500 px-3 py-3 rounded-md mx-1'>Gainers</a>
                <a href="#" className='text-center text-gray-500 px-3 py-3 rounded-md mx-1'>Losers</a>
              </div>
              <div className='searchInput flex items-center justify-center'>
                <input type="text" placeholder='Search' className=''></input>
              </div>
            </div>

            <div className='tableContent pt-7'>
              
              <div className='tableHeader flex flex-row text-left pl-10 _md:pl-0 py-2 border-b border-gray-600 rounded-t-md'>
                <div className='text-gray-300 w-1/5 py-2 smShow'>Name</div>
                <div className='text-gray-300 w-1/5 py-2 smHidden'>Price</div>
                <div className='text-gray-300 w-1/5 py-2 smShow'>24hr Change</div>
                <div className='text-gray-300 w-1/5 py-2 smHidden'>Market Cap</div>
                <div className='text-gray-300 w-1/5 py-2 smHidden'>Votes</div>
              </div>

              <div className='tableRow flex flex-row text-left pl-10 _md:pl-0 py-5'>
                <div className='text-gray-300 w-1/5 py-2 flex flex-row'>
                  <div className='pr-2 flex justify-center items-center'><img src="img/table_icon_1.png"></img></div>
                  <div className='flex flex-col hover:cursor-pointer' onClick={goToDetailed}>
                    <div className='pb-2'>Lorcoin LCB</div>
                    <div><img src="img/table_vote.png"></img></div>
                  </div>
                </div>
                <div className='text-gray-300 w-1/5 py-2 smHidden'>$ 27,019.52</div>
                <div className='text-green-600 w-1/5 py-2 smShow'>+2.61%</div>
                <div className='text-gray-300 w-1/5 py-2 smHidden'>$462.14M</div>
                <div className='text-gray-300 w-1/5 py-2 smHidden'>Detail</div>
              </div>
              {tableContent}
            </div>

            <div className='flex justify-center'>
              <Pagination />
            </div>
            <div className='pb-14'></div>
          </div>
        </div>
        

        <div className='footer py-12 flex justify-center border border-gray-800'>
          <div className='text-left grid grid-cols-3 _lg:grid-cols-1 _md:grid-cols-1 _sm:grid-cols-1'>
            <div className='footer_email flex justify-center items-center _md:m-auto'>
              <div className='footerLogo flex flex-col pb-5 py-5'>
                <img className='items-start' src="img/head_logo.png" style={{width: "94px", height:"94px"}}></img>
                <div className='flex flex-row footer_email pt-5'>
                  <input type="text" placeholder='Enter email' className='mr-2' style={{width: "261px"}}></input>
                  <a href="#" className='text-center text-white px-3 py-2 rounded-md mx-1' style={{backgroundColor: "#662483", width: "100px"}}>Subscribe</a>
                </div>
                <a href="#" className='text-center text-gray-300 px-1 py-1 mt-4 rounded-md mx-1 border border-gray-600 text-sm' style={{backgroundColor: "#1B1630", width: "117px"}}>English (US)˅</a>
              </div>
            </div>
            
            <div className='flex flex-row justify-center _md:text-center'>
              <div className='footerLink pr-24 py-5'>
                <p className='text-sm text-gray-300 font-bold py-2'>General</p>
                <p className='text-sm text-gray-400 py-1'>About</p>
                <p className='text-sm text-gray-400 py-1'>Blog</p>
                <p className='text-sm text-gray-400 py-1'>Contact us</p>
                <p className='text-sm text-gray-400 py-1'>Support</p>
                <p className='text-sm text-gray-400 py-1'>Community</p>
              </div>

              <div className='footerLink py-5'>
                <p className='text-sm text-gray-300 font-bold py-2'>Legal</p>
                <p className='text-sm text-gray-400 py-1'>Terms & conditions</p>
                <p className='text-sm text-gray-400 py-1'>Privacy policy</p>
                <p className='text-sm text-gray-400 py-1'>Cookie policy</p>
              </div>
            </div>

            <div className='flex justify-start flex-col items-center pt-5'>
              <p className='text-sm text-gray-300 font-bold py-2'>Follow us</p>
              <div className='flex flex-row py-1 justify-start'>
                  <img className='pr-5' src="img/github.png"></img>
                  <img src="img/twitter.png"></img>
              </div>
              <div className='text-sm text-gray-400 py-3'>
                  Copyright 2023 Lorchain All rights reserved
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Landing;
