import React from "react";

export default function NavBar() {
  return (
    <nav className='px-2 sm:px-4 py-2.5 md:py-6'>
      <div className='container flex flex-wrap items-center justify-center md:justify-between mx-auto'>
        <a href='#' className='flex items-center'>
          <img
            src='/images/logo.png'
            className='h-20 mt-10 md:mr-3 md:mt-0'
            alt='Best Water'
          />
        </a>
        <div className='hidden w-full md:block md:w-auto' id='navbar-default'>
          <ul className='flex flex-col p-4 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0'>
            <li>
              <a
                href='#'
                className='block py-2 pl-3 pr-4 text-white bg-secondaryColor rounded md:bg-transparent md:text-secondaryColor md:p-0 '
                aria-current='page'>
                Home
              </a>
            </li>
            <li>
              <a
                href='#'
                className='block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-500 md:hover:bg-transparent md:border-0 md:hover:text-secondaryColor md:p-0'>
                About
              </a>
            </li>
            <li>
              <a
                href='#'
                className='block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-500 md:hover:bg-transparent md:border-0 md:hover:text-secondaryColor md:p-0'>
                Services
              </a>
            </li>
            <li>
              <a
                href='#'
                className='block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-500 md:hover:bg-transparent md:border-0 md:hover:text-secondaryColor md:p-0'>
                Pricing
              </a>
            </li>
            <li>
              <a
                href='#'
                className='block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-500 md:hover:bg-transparent md:border-0 md:hover:text-secondaryColor md:p-0'>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
