import React from "react";

export default function ProfileCard(data) {
  return (
    <div className='w-full mx-auto py-4 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
      <div className='flex flex-col items-center py-4 '>
        <img
          className='w-24 h-24 mb-3 rounded-full shadow-lg invert'
          src='/images/person.png'
          alt='Zahid Islam'
        />
        <h5 className='mb-1 text-xl font-medium text-gray-900 dark:text-white'>
          {data.name}
        </h5>
        <span className='text-sm text-gray-500 dark:text-gray-400'>
          {data.title}
        </span>
        <div className='flex mt-4 space-x-3 md:mt-6'>
          <a
            href={`tel:${data.phone}`}
            className='inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
            Call Now
          </a>
        </div>
      </div>
    </div>
  );
}
