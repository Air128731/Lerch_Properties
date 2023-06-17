import * as React from 'react'
import '../css/project-base.css'
import '../css/animations.css';
import Navbar from './Navbar';
import Newsletter from './Newsletter';

function Listings () {
    return (
      <div className="App">
        <div className='relative w-full h-full body'>
            <img src="https://www.lpc.com/wp-content/uploads/2018/04/rooftop_banner2.jpg" style={{width: "100%", height: "200px"}}></img>       
            <div className='grid grid-cols-2 py-10 _md:grid-cols-1 fadeInDown'>
                <div className='flex flex-col'>
                    <div className='text-2xl font-bold text-gray-700'>Contact Our Property Managers</div>
                    <div className='py-3 leading-8 text-gray-600'>
                        Lerch Properties owns and manages properties in our community which means we understand the importance of providing superior tenant service, quality apartments, townhomes and duplexes, and affordable prices. All property decisions are made in Maryville, which enables us to be responsive to tenant needs in a swift and efficient manner. We aren’t an out-of-town corporate owner that is out of touch with our residents and properties.
                    </div>
                    <div className='flex justify-center py-3'>
                        <img src="https://lerchproperties.net/wp-content/uploads/2023/06/Lerch-Properties-33.webp" className='w-5/6 rounded-xl'></img>
                    </div>
                    <div className='py-3 leading-8 text-gray-500'>Lerch Properties doesn’t discriminate on the basis of disability when it comes to accepting applicants and having access, treatment, or employment in its federally assisted programs and activities. Persons with disabilities are allowed the right to request suitable accommodations.</div>
                </div>
                <div className='flex flex-col items-center justify-center'>
                    <div className='flex items-center justify-center py-7'>
                        <img src="https://lerchproperties.net/wp-content/uploads/2023/06/Lerch-Properties-34.webp" className='w-5/6 rounded-xl'></img>
                    </div>
                    <div className='grid w-full grid-cols-2'>
                        <div>
                            <div className='py-3 text-2xl font-bold text-gray-700'>Address</div>
                            <div className='leading-8 text-gray-500'>2921 N. Center St. Suite 6</div>
                            <div className='leading-8 text-gray-500'>Maryville, IL 62062</div>
                        </div>
                        <div>
                            <div className='py-3 text-2xl font-bold text-gray-700'>Call or Email</div>
                            <div className='leading-8 text-gray-500'>(618) 288-3108</div>
                            <div className='leading-8 text-gray-500'>info@lerchproperties.net</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-center fadeInUp'>
            <div className='flex flex-row justify-center gap-10 pb-10 _md:flex-col _md:w-1/4'>
                <img src="https://lerchproperties.net/wp-content/uploads/2023/06/Lerch-Properties-35.webp"></img>
                <img src="https://lerchproperties.net/wp-content/uploads/2023/06/Lerch-Properties-26.webp"></img>
                <img src="https://lerchproperties.net/wp-content/uploads/2023/06/Lerch-Properties-36.webp"></img>
                <img src="https://lerchproperties.net/wp-content/uploads/2023/06/Lerch-Properties-37.webp"></img>
                <img src="https://lerchproperties.net/wp-content/uploads/2023/06/Lerch-Properties-38.webp"></img>
            </div>
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
