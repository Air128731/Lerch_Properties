export default function Example() {
  return (
    <div className="py-24 overflow-hidden bg-white sm:py-16">
      <div className="px-6 mx-auto lg:px-8" style={{maxWidth: "1440px"}}>
        <div className="grid max-w-2xl grid-cols-1 mx-auto gap-x-20 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pt-4">
            <div className="">
              <h2 className="text-base font-semibold leading-7 text-indigo-600">PLEASE READ THE FOLLOWING INFORMATION BEFORE APPLYING!</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 pb-7 sm:text-4x">Rental Application Information</p>
              <div className="mt-6 leading-8 text-gray-600 text-md">
                Cosigners/Guarantors: Please list who you are cosigning for on your application.<br></br>

                If you are applying for a unit and are under the age of 21, you will be required to have a cosigner.<br></br>

                Applicants and cosigners must pay a $30 (non-refundable) application fee. THE FEE MUST BE SUBMITTED TO OUR OFFICE ALONG WITH A COPY OF YOUR ID AND INCOME DOCUMENTS BEFORE APPLICATIONS ARE PROCESSED! Payment must be cash, money order, or cashier’s check only! Please bring your payment to our office located at 2921 N. Center St., Suite 6 Maryville, IL. Office hours are M-F 9am-5pm. Our office is not open to the general public. Any items or payments brought to our office may be placed in the drop box located to the left of our front office door.<br></br>

                Proof of income is also required to process an application.  Applicants must make 4 times the monthly rent amount to qualify. One month’s worth of your most recent paycheck stubs can be submitted by email (info@lerchproperties.net) or by bringing copies to our office in Maryville. If you do not meet the income requirements, you will be asked to provide a cosigner.<br></br>

                Applicants must provide a valid copy of their US issued ID or Drivers License as well as their Social Security number on the application in order to be reviewed for a unit.<br></br>

                Applicants are reviewed on the same criteria, one person or family at a time, on a first application in, first application out process. Application processing time is 24-48 hours once all items and fees are submitted.

                {/*We are committed to equal housing opportunity. We do not discriminate against anyone on the basis of race, color, religion, sex, handicap, family status, or national origin.

                We will process a background, eviction and credit check. Recent charge offs or collections outside of medical and student loans typically result in denial. */}
              </div>
            </div>
          </div>
          <div className='flex flex-col justify-center'>
            <img
                src="https://lerchproperties.net/wp-content/uploads/2023/06/Lerch-Properties-18.webp"
                alt="Product screenshot"
                className="w-full shadow-xl max-w-none rounded-xl ring-1 ring-gray-400/10 sm:w-full md:-ml-4 lg:-ml-0"
                style={{boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}
            />
            <div className="w-full mt-6 text-lg leading-8 text-gray-600">
                Each person 18 years of age who will be living in the unit must submit his/her own application.  Please be sure to provide all the necessary information. Applications with incomplete fields (Ex: Social Security number, landlord name and phone number, etc.) will not be processed. Lerch Properties requires a standard 12-month lease on all rentals. The security deposit is the same as one month’s rent.
            </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}
