import * as React from 'react'
import '../css/project-base.css'
import '../css/animations.css';
import Navbar from './Navbar';
import Newsletter from './Newsletter';

function Listings () {
    return (
      <div className="App">
        <div className='relative w-full h-full body'>    
            <img src="https://lerchproperties.net/wp-content/uploads/2023/06/Lerch-Properties-19.webp" className='w-full h-40'></img>      
            <div className='rental'>  
                <div>Application Requirements</div>
                <div>Rental Application Information</div>
                <div>PLEASE READ THE FOLLOWING INFORMATION BEFORE APPLYING!</div>
                <div className='flex flex-row'>
                    <img src="https://lerchproperties.net/wp-content/uploads/2023/06/Lerch-Properties-18.webp"></img>
                    <div>Each person 18 years of age who will be living in the unit must submit his/her own application.  Please be sure to provide all the necessary information. Applications with incomplete fields (Ex: Social Security number, landlord name and phone number, etc.) will not be processed. Lerch Properties requires a standard 12-month lease on all rentals. The security deposit is the same as one month’s rent.</div>
                </div>
                <div>Cosigners/Guarantors: Please list who you are cosigning for on your application.

                    If you are applying for a unit and are under the age of 21, you will be required to have a cosigner.

                    Applicants and cosigners must pay a $30 (non-refundable) application fee. THE FEE MUST BE SUBMITTED TO OUR OFFICE ALONG WITH A COPY OF YOUR ID AND INCOME DOCUMENTS BEFORE APPLICATIONS ARE PROCESSED! Payment must be cash, money order, or cashier’s check only! Please bring your payment to our office located at 2921 N. Center St., Suite 6 Maryville, IL. Office hours are M-F 9am-5pm. Our office is not open to the general public. Any items or payments brought to our office may be placed in the drop box located to the left of our front office door.

                    Proof of income is also required to process an application.  Applicants must make 4 times the monthly rent amount to qualify. One month’s worth of your most recent paycheck stubs can be submitted by email (info@lerchproperties.net) or by bringing copies to our office in Maryville. If you do not meet the income requirements, you will be asked to provide a cosigner.

                    Applicants must provide a valid copy of their US issued ID or Drivers License as well as their Social Security number on the application in order to be reviewed for a unit.

                    Applicants are reviewed on the same criteria, one person or family at a time, on a first application in, first application out process. Application processing time is 24-48 hours once all items and fees are submitted.

                    We are committed to equal housing opportunity. We do not discriminate against anyone on the basis of race, color, religion, sex, handicap, family status, or national origin.

                    We will process a background, eviction and credit check. Recent charge offs or collections outside of medical and student loans typically result in denial.</div>
            </div>
            <div className='flex flex-col items-start faq'>
                <div>Frequently Asked Questions & Answers</div>

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
