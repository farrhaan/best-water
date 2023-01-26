import React from "react";
import ProfileCard from "./ProfileCard";

export default function Contact() {
  return (
    <div className='mt-[-180px] mb-10'>
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
        <path
          fill='#379eff'
          fill-opacity='1'
          d='M0,128L48,133.3C96,139,192,149,288,154.7C384,160,480,160,576,138.7C672,117,768,75,864,90.7C960,107,1056,181,1152,202.7C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'></path>
      </svg>
      <p className='text-5xl font-bold text-center text-white mt-[-50px] mb-10'>
        Contact Us
      </p>
      <div className='flex flex-wrap my-10 border-b-2 mx-24 pb-10'>
        <ProfileCard name='Zahid Islam' title='CEO' phone='+923348606600' />
        <ProfileCard name='Best Water' title='Office' phone='+92412551516' />
      </div>
      <div className="py-10">
        <p className='text-5xl font-bold text-center text-white mt-[-50px] mb-10'>
          Location
        </p>
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27243.323906305148!2d73.0040027791016!3d31.40267680000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x392243d7b950ef11%3A0x27d5eef5f895172d!2sBest%20Water!5e0!3m2!1sen!2s!4v1674768625833!5m2!1sen!2s'
          width='400'
          height='300'
          // style='border:0;'
          className="mx-auto w-full px-20"
          allowfullscreen=''
          loading='lazy'
          referrerpolicy='no-referrer-when-downgrade'></iframe>
      </div>
    </div>
  );
}
