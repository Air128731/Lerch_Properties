import { CheckIcon } from '@heroicons/react/20/solid'

const includedFeatures = [
  'Open Floor Plan – $950 – 2 Story, 1.5 bath, W/D hookup, stove, refrigerator, dishwasher, breakfast bar, carpet, and vinyl.',
  'Traditional Floor Plan – $950 – 2 Story, 1.5 bath, W/D hookup, eat-in kitchen, stove, refrigerator, dishwasher, carpet, and vinyl.',
  'Traditional Floor Plan w/ Garage – $975 – same as above, but w/ one car garage.',
  '2 Bedroom Garden Style (all one level) – $900 – 12 units',
]

export default function Example() {
  return (
    <div className="pb-8 bg-white fadeInLeft">
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        <div className="max-w-2xl mx-auto mt-16 rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
          <div className="p-8 sm:p-10 lg:flex-auto">
            <h3 className="text-2xl font-bold tracking-tight text-gray-900">Edwardsville, Illinois</h3>
            <div className="mt-6 text-base leading-7 text-gray-600">
            dwardsville (2 miles to campus)<br></br>
            Parkview Ct.
            Homestead Ct.
            Esic Dr.<br></br>

            NO PETS ALLOWED. NO SATELLITE DISHES ALLOWED.<br></br>

            Tenants pay all utilities (water, sewer, trash, electric, internet, and cable).<br></br>

            2 Bedroom Town homes – 2 Styles – 29 Traditional Units, 7 Traditional w/ Garages, 70 Open Units<br></br>
            </div>
            <div className="flex items-center mt-10 gap-x-4">
              <h4 className="flex-none text-sm font-semibold leading-6 text-indigo-600">What’s included</h4>
              <div className="flex-auto h-px bg-gray-100" />
            </div>
            <ul
              role="list"
              className="grid grid-cols-1 gap-4 mt-8 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
            >
              {includedFeatures.map((feature) => (
                <li key={feature} className="flex gap-x-3">
                  <CheckIcon className="flex-none w-5 h-6 text-indigo-600" aria-hidden="true" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex items-center justify-center p-2 -mt-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
            <div className="text-center h-4/5 rounded-2xl bg-gray-50 ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center">
                <img src="https://lerchproperties.net/wp-content/uploads/2023/06/Lerch-Properties-8.webp" className='w-full h-full rounded-xl'></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
