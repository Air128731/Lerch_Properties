import { Fragment, useImperativeHandle } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { useNavigate } from 'react-router-dom';

const navigation = [
  { name: 'Lorwatch', href: '#', current: true },
  { name: 'Lorswap', href: '#', current: false },
  { name: 'Earn ˅', href: '#', current: false },
  { name: 'NFT ', href: '#', current: false },
  {name: 'Wallet', href: '#', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const navigate = useNavigate();

  function gotoLanding(){
    navigate('/', { replace: true });
  }

  return (
    <Disclosure as="nav" className="bg-gray-800 pt-7" style={{backgroundColor: "#0F0C1D"}}>
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden" style={{width: "60px"}}>
                <img src="img/head_logo.png"></img>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start hover:cursor-pointer" onClick={gotoLanding}>
                <div className="flex flex-shrink-0 items-center _sm:hidden">
                  <img
                    className="block h-20 w-auto lg:hidden"
                    src="img/head_logo.png"
                    alt="Your Company"
                  />
                  <img
                    className="hidden h-20 w-auto lg:block"
                    src="img/head_logo.png"
                    alt="Your Company"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block w-full pt-5">
                  <div className="flex flex-row justify-center items-center space-x-4 text-center" style={{justifyContent: "end"}}>
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        onClick={gotoLanding}
                        className={classNames(
                          item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'rounded-md px-3 py-2 text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 _md:hidden">
                {/* <a className='text-gray-500 text-xl pr-5'>|</a>
                <a href="#" className='text-white text-sm pr-5'>Login</a> */}
                <a href="#" className='text-center text-white px-0 py-2 rounded-md mx-1 text-sm' style={{backgroundColor: "#662483", width: "135px"}}>Create an account</a>                                
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden w-full">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  onClick={gotoLanding}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
