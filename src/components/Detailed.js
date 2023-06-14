import * as React from 'react';
import '../css/react-base.css';
import '../css/animations.css';
import '../css/dropdown.css';
import { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Pagination from './Pagination';
import { UsersIcon } from '@heroicons/react/24/outline';
import Chart from './Chart';
import { YouTube } from '@mui/icons-material';

function Landing () {
    const [tableContent, setTableContent] = useState([]);
    const [footerContent, setFooterContent] = useState([]);

    const openTab = (evt, tabName) => {
        // Declare all variables
        var i, tabcontent, tablinks;
      
        // Get all elements with class="tabcontent" and hide them
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
          tabcontent[i].style.display = "none";
        }
      
        // Get all elements with class="tablinks" and remove the class "active"
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
          tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
      
        // Show the current tab, and add an "active" class to the button that opened the tab
        document.getElementById(tabName).style.display = "flex";
        evt.currentTarget.className += " active";
    }

    const myFunction = (filterParam) => {
        console.log(filterParam);
        if(filterParam == 'LCB')
            document.getElementById("myDropdown").classList.toggle("show");
        else if(filterParam == 'USDC')
            document.getElementById("myDropdown1").classList.toggle("show");
      }

    useEffect(() => {
      var content = [];

      for(var i = 0; i < 6 ; i ++){
        content = [...content, (
          <div className='tableRow flex flex-row text-left pl-10 py-5'>
            <div className='text-gray-300 w-1/5 py-2 flex flex-row'>
              <div className='pr-2'><img src="img/table_icon.png"></img></div>
              <div className='flex flex-col'>
                <div className='pb-2'>DNaira DNR</div>
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

      var footerContent = [];

      for(var j = 0; j < 3; j ++){
        footerContent = [...footerContent, (
          <div className='footerLink py-5'  style={{width: "15%"}}>
            <p className='text-sm text-gray-300 font-bold py-2'>Company</p>
            <p className='text-sm text-gray-400 py-1'>About</p>
            <p className='text-sm text-gray-400 py-1'>Leadership</p>
            <p className='text-sm text-gray-400 py-1'>Blog</p>
            <p className='text-sm text-gray-400 py-1'>Careers</p>
            <p className='text-sm text-gray-400 py-1'>Referral Program</p>
            <p className='text-sm text-gray-400 py-1'>Community</p>
          </div>
        )];
      }

      setTableContent(content);
      setFooterContent(footerContent);
    }, []);

    return (
      <div className="App">
        <Navbar />

        <div className='detail-body flex justify-center items-center py-10'>
            <div className='flex flex-col'>
                {/* Dnaira Logo */}
                <div className='Dnaria'>
                    <div className='inline-block float-left'>
                        <div className='flex flex-row Dnaria-logo'>
                            <img className='pr-2' src="img/detail_logo.png"></img>
                            <p className='text-white text-3xl pr-2'>Dnaira</p>
                            <div className='flex items-center'><p className='text-gray-400 text-base'>DNR</p></div>
                        </div>
                    </div>
                    <div className='inline-block float-right'>
                        <div className='flex flex-row items-center'>
                            <div className='mr-2'>
                                <a href="#" className='vote_btn px-3 py-2 font-bold _md:px-0' style={{color: "#662483"}}>Vote 100k</a>
                            </div>
                            <div className='bg-white flex flex-row items-center px-3 py-1 rounded-lg _md:px-0'>
                                <img src="img/agree.png"></img>
                                <p>10</p>
                                <img src="img/disagree.png"></img>
                                <p>2</p>
                            </div>
                        </div>
                    </div>
                </div>    

                {/* Wallet Connect */}
                <div className='flex flex-row py-10'>
                    <a href="#" className='trade_btn px-10 py-2 mr-2 text-sm font-bold _md:px-0'>Trade on CeDeFi</a>
                    <a href="#" className='wallet_btn px-10 py-2 text-sm font-bold _md:px-0'>Connect Wallet</a>
                </div>

                {/* Trading period */}
                <div>
                    <div className='inline-block float-left'>
                        <div className='flex flex-row items-center _md:flex-col _md:items-start'>
                            <p className='text-white text-xl font-bold pr-5 _md:pb-2'>$27,019.52</p>
                            <p className='text-green-600 text-base font-bold flex flex-row' style={{color: "#49C18F"}}><img src="img/arrow-up.png"></img>&nbsp;2.60%</p>
                        </div>
                    </div>
                    <div className='inline-block float-right _md:pt-2'>
                        <div className='timelinePeriod flex flex-row items-center'>
                            <a className='text-white active px-2 py-2 mr-2 rounded-lg text-sm'>Day</a>
                            <a className='text-gray-400 px-2 py-2 mr-2 rounded-lg text-sm'>Month</a>
                            <a className='text-gray-400 px-2 py-2 mr-2 rounded-lg text-sm'>Year</a>
                            <a className='text-gray-400 px-2 py-2 mr-2 rounded-lg text-sm'>All</a>
                        </div>
                    </div>
                </div>
                
                <Chart />

                <div className='flex flex-col pt-7 _md:px-2'>
                    <div className='text-white flex justify-start py-4'>About Dnaria</div>
                    <div className='blockchain-com flex flex-row justify-start'>
                        <a href="#" className='text-sm text-center text-white px-3 py-2 rounded-md mx-1'>Blockchain.com</a>
                        <a href="#" className='text-sm text-center text-white px-3 py-2 rounded-md mx-1'>BTC.com</a>
                    </div>
                    <div className='text-gray-400 text-sm text-left pt-7'>
                        Lorem ipsum dolor sit amet consectetur. Nulla mi at eu sit tristique neque. Volutpat pellentesque sed justo ultrices auctor vitae arcu. Non sapien nunc ipsum porttitor scelerisque nibh amet malesuada. Et ac cursus eget sit phasellus faucibus cras a. Consequat porta amet vitae semper. 
                    </div>
                </div>

                {/* Detailed Information */}
                <div className='detailedInfo mt-10 grid grid-cols-4 _md:grid-cols-2 _sm:grid-cols-2 border-t-2 border-gray-900 border-b-2 border-gray-900'>
                    <div className='flex flex-col items-center py-5'>
                        <div className='flex flex-row pb-3'>
                            <p className='text-sm text-gray-300'>Marekt Cap</p>
                            <img src="img/info_icon.png" className='pl-1 h-1/2'></img>
                        </div>
                        <div className='text-gray-200 text-base font-bold font-bold'>$2.53141</div>
                    </div>
                    <div className='flex flex-col items-center py-5'>
                        <div className='flex flex-row pb-3'>
                            <p className='text-sm text-gray-300'>24Hr Volume</p>
                            <img src="img/info_icon.png" className='pl-1 h-1/2'></img>
                        </div>
                        <div className='text-gray-200 text-base font-bold'>$2.53141</div>
                    </div><div className='flex flex-col items-center py-5'>
                        <div className='flex flex-row pb-3'>
                            <p className='text-sm text-gray-300'>Marekt Cap</p>
                            <img src="img/info_icon.png" className='pl-1 h-1/2'></img>
                        </div>
                        <div className='text-gray-200 text-base font-bold'>$2.53141</div>
                    </div><div className='flex flex-col items-center py-5'>
                        <div className='flex flex-row pb-3'>
                            <p className='text-sm text-gray-300'>Price Change (24H)</p>
                            <img src="img/info_icon.png" className='pl-1 h-1/2'></img>
                        </div>
                        <div className='text-green-500 text-base font-bold'>+0.09%</div>
                    </div><div className='flex flex-col items-center py-5'>
                        <div className='flex flex-row pb-3'>
                            <p className='text-sm text-gray-300'>Vote count</p>
                            <img src="img/info_icon.png" className='pl-1 h-1/2'></img>
                        </div>
                        <div className='text-gray-200 text-base font-bold'>$2.53141</div>
                    </div><div className='flex flex-col items-center py-5'>
                        <div className='flex flex-row pb-3'>
                            <p className='text-sm text-gray-300'>Locked currency</p>
                            <img src="img/info_icon.png" className='pl-1 h-1/2'></img>
                        </div>
                        <div className='text-gray-200 text-base font-bold'>$2.53141</div>
                    </div>
                    <div className='flex flex-col items-center py-5'>
                        <div className='flex flex-row pb-3'>
                            <p className='text-sm text-gray-300'>Unlocked Reward</p>
                            <img src="img/info_icon.png" className='pl-1 h-1/2'></img>
                        </div>
                        <div className='text-gray-200 text-base font-bold'>$2.53141</div>
                    </div>
                </div>

                {/* Action Tag */}
                <div className='mainActionTag flex flex-row items-center py-10 w-full _md:overflow-x-scroll _md:whitespace-nowrap'>
                    <a className='text-gray-400 active px-2 py-2 mr-2 rounded-lg text-base tablinks' onClick={(event) => openTab(event, 'lorswap')}>Lorswap</a>
                    <a className='text-gray-400 px-2 py-2 mr-2 rounded-lg text-base tablinks' onClick={(event) => openTab(event, 'vote')}>Vote</a>
                    <a className='text-gray-400 px-2 py-2 mr-2 rounded-lg text-base tablinks' onClick={(event) => openTab(event, 'devote')}>De Vote</a>
                    <a className='text-gray-400 px-2 py-2 mr-2 rounded-lg text-base tablinks _md:px-0' onClick={(event) => openTab(event, 'profit')}>Profit Calculator</a>
                    <a className='text-gray-400 px-2 py-2 mr-2 rounded-lg text-base tablinks' onClick={(event) => openTab(event, 'asset')}>Asset Converter</a>
                </div>

                {/* Input Form */}
                {/* Lorswap */}
                <div id='lorswap' className='flex justify-center tabcontent'>
                    <div className='flex flex-col border border-gray-700 p-4 rounded-xl' style={{backgroundColor: "#1A1530"}}>
                        <div className='lorswap_tab' style={{width:"600px"}}>
                            <div className='grid grid-cols-2'>
                                <div className='flex flex-row'>
                                    <p className='text-sm text-white pr-1'>Chain</p>
                                    <img src="img/PolygonBadge.png" className='w-5 h-5'></img>
                                    <img src="img/Right.png" className='w-5 h-5'></img>
                                </div>
                                <div className='flex flex-row'>
                                    <p className='text-sm text-white pr-1'>Destination Chain</p>
                                    <img src="img/vote_locked_amount.png" className='w-5 h-5'></img>
                                    <img src="img/Right.png" className='w-5 h-5'></img>
                                </div>
                            </div>
                            <div className='grid grid-cols-2 pt-5 _md:grid-cols-1'>
                                <div className='flex flex-col mr-1'>
                                    <div className='flex flex-row justify-between pb-3'>
                                        <p className='text-white text-sm'>From</p>
                                        <p className='text-white text-sm'>Available: 10.90 USDC</p>
                                    </div>
                                    <div className='flex flex-row'>
                                        <input className='bg-white text-gray-700 w-full rounded-l-md text-sm px-3 py-1 border border-gray-700' type='text' placeholder='20000' style={{backgroundColor: "transparent", width: "220px", height:"40px"}}></input>      
                                        <div className='flex flex-row border border-gray-700 rounded-r-lg items-center' style={{width:"100px"}}>
                                            <img src="img/usdc.png" className='w-5 h-5 ml-3'></img>
                                            <p className='text-sm text-white'>UDSC</p>
                                            <img src="img/Right.png" className='w-5 h-5'></img>
                                        </div>
                                    </div>     
                                </div>

                                <div className='flex flex-col ml-1'>
                                    <div className='flex flex-row justify-between pb-3 _md:pt-3'>
                                        <p className='text-white text-sm pl-3 _md:pl-0'>To</p>
                                        <p className='text-white text-sm'></p>
                                    </div>
                                    <div className='flex flex-row'>
                                        <input className='bg-white text-gray-700 w-full rounded-l-md text-sm px-3 py-1 border border-gray-700' type='text' placeholder='0' style={{backgroundColor: "transparent", width: "220px", height:"40px"}}></input>      
                                        <div className='flex flex-row border border-gray-700 rounded-r-lg items-center' style={{width:"100px"}}>
                                            <img src="img/vote_locked_amount.png" className='w-5 h-5 ml-3'></img>
                                            <p className='text-sm text-white'>LCB</p>
                                            <img src="img/Right.png" className='w-5 h-5'></img>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='flex flex-col pt-3'>
                                <div className='flex flex-row justify-end'>
                                    <p className='text-white text-sm pr-2'>Interchain swap</p>
                                    <label className="switch" style={{height: "20px", width: "50px"}}>
                                        <input type="checkbox"></input>
                                        <span className="slider round"></span>
                                    </label>
                                </div>
                                <div className='flex flex-row justify-end pt-2'>
                                    <p className='text-sm text-gray-400 pr-1'>powered by</p>
                                    <p className='text-sm text-green-600'>zetaswap</p>
                                </div>
                            </div>\
                            <div className='grid grid-cols-2 _md:grid-cols-1 pt-3'>
                                <a href="#" className='vote_btn px-3 py-2 font-bold mr-1 _md:mr-0' style={{backgroundColor: "white", color: "#662483"}}>Connect Wallet</a>
                                <a href="#" className='vote_btn px-3 py-2 font-bold ml-1 _md:mt-3 _md:ml-09' style={{color: "white", backgroundColor: "#662483"}}>Swap</a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Vote */}
                <div id='vote' className='flex justify-center hidden tabcontent'>
                    <div className='border border-gray-700 p-4 rounded-xl'  style={{backgroundColor: "#1A1530"}}>
                        <div className='flex flex-row justify-between'>
                            <div className='text-gray-400 flex flex-row items-center text-sm'>
                                <p className='pr-2'>Locked Amount</p>
                                <img className='' src="img/vote_locked_amount.png"></img>
                            </div>
                            <div className='text-gray-400 text-sm'>
                                MIN
                            </div>
                        </div>
                        <div className='py-2'>
                            <input className='bg-white text-gray-700 rounded-md w-full text-sm px-3 py-3' type='text' placeholder='20000'></input>
                        </div>
                        <div className='py-3 flex flex-row'>
                            <div className='flex flex-col w-1/2 mr-2'>
                                <p className='text-gray-400 text-sm pb-2 text-left'>Lock date</p>
                                <input className='bg-white text-gray-700 rounded-md w-full text-sm px-3 py-3' type='text' placeholder='2/02/2022'></input>
                            </div>
                            <div className='flex flex-col w-1/2'>
                                <p className='text-gray-400 text-sm pb-2 text-left'>Unlock date</p>
                                <input className='bg-white text-gray-700 rounded-md w-full text-sm px-3 py-3' type='text' placeholder='2/02/2022'></input>
                            </div>
                        </div>
                        <div className='flex flex-row items-center py-3'>
                            <p className='text-gray-400 text-sm pr-1'>Reward</p>
                            <img className='h-1/2 pr-2 pt-3' src="img/vote_reward.png"></img>
                            <input className='bg-white text-gray-700 rounded-md w-full text-sm px-3 py-3' type='text' placeholder='3,000,000'></input>
                        </div>
                        <div className='w-full my-2 py-3 rounded-md text-white lorswap_vote'>
                            Vote
                        </div>
                    </div>
                </div>

                {/* Devote */}
                <div id='devote' className='flex justify-center hidden tabcontent'>
                    <div className='border border-gray-700 p-4 rounded-xl' style={{backgroundColor: "#1A1530"}}>
                        <div className='flex flex-row justify-between'>
                            <div className='text-gray-400 flex flex-row items-center text-sm'>
                                <p className='pr-1'>Locked Amount</p>
                                <img className='pt-2' src="img/vote_reward.png"></img>
                            </div>
                            <div className='text-gray-400 text-sm'>
                                MIN
                            </div>
                        </div>
                        <div className='py-2'>
                            <input className='bg-white text-gray-700 rounded-md w-full text-sm px-3 py-3' type='text' placeholder='20000'></input>
                        </div>
                        <div className='py-3 flex flex-row'>
                            <div className='flex flex-col w-1/2 mr-2'>
                                <p className='text-gray-400 text-sm pb-2 text-left'>Lock date</p>
                                <input className='bg-white text-gray-700 rounded-md w-full text-sm px-3 py-3' type='text' placeholder='2/02/2022'></input>
                            </div>
                            <div className='flex flex-col w-1/2'>
                                <p className='text-gray-400 text-sm pb-2 text-left'>Unlock date</p>
                                <input className='bg-white text-gray-700 rounded-md w-full text-sm px-3 py-3' type='text' placeholder='2/02/2022'></input>
                            </div>
                        </div>
                        <div className='flex flex-row items-center py-3'>
                            <p className='text-gray-400 text-sm pr-1'>Claim</p>
                            <img className='h-1/2 pr-2' src="img/vote_locked_amount.png"></img>
                            <input className='bg-white text-gray-700 rounded-md w-full text-sm px-3 py-3' type='text' placeholder='3,000,000'></input>
                        </div>
                        <div className='w-full my-2 py-3 rounded-md text-white lorswap_vote'>
                            De-vote
                        </div>
                    </div>
                </div>
S
                {/* Profit Calculator */}
                <div id='profit' className='flex justify-center hidden tabcontent'>
                    <div className='flex flex-col border border-gray-700 p-4 rounded-xl' style={{backgroundColor: "#1A1530"}}>
                        <div className='text-sm text-gray-300 text-left pb-5'>Invest</div>
                        <div className='flex flex-col profit_calc' style={{width: "512px"}}>
                            <div className='flex flex-row pb-5'>    
                                <div className='flex flex-row border border-gray-700 rounded-l-lg items-center' style={{width:"100px"}}>
                                    <p className='pl-3 text-sm text-white'>USD</p>
                                    <img src="img/Right.png" className='w-5 h-5'></img>
                                </div>
                                <input className='bg-white text-gray-700 rounded-r-md w-full text-sm px-3 py-2' type='text' placeholder='1000'></input>                        
                            </div>
                            <div className='flex flex-row pb-5'>
                                <div className='flex flex-row border border-gray-700 rounded-l-lg items-center' style={{width:"100px"}}>
                                    <img className='pl-3' src="img/table_icon.png"></img>
                                    <img src="img/Right.png" className='w-5 h-5'></img>
                                </div>
                                <input className='bg-white text-gray-700 rounded-r-md w-full text-sm px-3 py-2' type='text' placeholder='20,000'></input>                        
                            </div>
                            <div className='flex flex-row items-center pb-4'>
                                <p className='text-gray-400 text-sm pr-8'>Expected Price</p>
                                <input className='bg-white text-gray-700 rounded-md w-full text-sm px-3 py-3' type='text' placeholder='0'></input>
                            </div>
                            <div className='flex flex-row items-center'>
                                <p className='text-gray-400 text-sm pr-8'>Profit</p>
                                <input className='bg-white text-gray-700 rounded-md w-full text-sm px-3 py-3' type='text' placeholder='0'></input>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Asset Converter */}
                <div id='asset' className='flex justify-center hidden tabcontent'>
                    <div className='flex flex-col border border-gray-700 p-4 rounded-xl' style={{backgroundColor: "#1A1530"}}>
                        <div className='flex flex-row pb-5'>    
                            <div className='flex flex-row border border-gray-700 rounded-l-lg items-center' style={{width:"100px"}}>
                                <p className='pl-3 text-sm text-white'>LCB</p>
                                <img src="img/Right.png" className='w-5 h-5'></img>
                            </div>
                            <input className='bg-white text-gray-700 rounded-r-md w-full text-sm px-3 py-2' type='text' placeholder='0'></input>                        
                        </div>
                        <div className='flex flex-row'>
                            <div className='flex flex-row border border-gray-700 rounded-l-lg items-center' style={{width:"100px"}}>
                                <p className='pl-3 text-sm text-white'>USDC</p>
                                <img src="img/Right.png" className='w-5 h-5'></img>
                            </div>
                            <input className='bg-white text-gray-700 rounded-r-md w-full text-sm px-3 py-2' type='text' placeholder='0'></input>                        
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className='footer py-12 flex justify-center border border-gray-800'>
          <div className='text-left grid grid-cols-3 _lg:grid-cols-1 _md:grid-cols-1 _sm:grid-cols-1'>
            <div className='footer_email flex justify-center items-center _md:m-auto'>
              <div className='footerLogo flex flex-col pb-5 py-5'>
                <img className='items-start' src="img/head_logo.png" style={{width: "94px", height:"94px"}}></img>
                <div className='flex flex-row footer_email pt-5'>
                  <input type="text" placeholder='Enter email' className='mr-2' style={{width: "261px"}}></input>
                  <a href="#" className='subscribe text-center text-white px-3 py-2 rounded-md mx-1' style={{backgroundColor: "#662483", width: "100px"}}>Subscribe</a>
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

            <div className='flex justify-center flex-col items-center pt-5'>
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
