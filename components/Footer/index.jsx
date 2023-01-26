import React from "react";

export default function Footer() {
  return (
    <footer className='p-4 bg-backGroundColor shadow md:flex md:items-center justify-center md:p-4'>
      <div className="flex justify-center items-center">
        <img src='/images/logo.png' className='w-20' />
        <span className='text-sm text-gray-800 sm:text-center ml-6'>
          © 2023{" "}
          <a href='' className='hover:underline'>
            Best Water™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
