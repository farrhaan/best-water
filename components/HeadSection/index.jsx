import React from "react";

import NavBar from "../NavBar";

export default function HeadSection() {
  return (
    <div className='bg-backGroundColor min-h-screen'>
      <NavBar />
      <div>
        <div className='h-[590px] flex flex-col-reverse md:flex-row justify-evenly items-center md:mb-[-50px]'>
          <p className='text-3xl md:text-5xl font-bold max-w-[80%] md:max-w-[45%] leading-tight animate__animated animate__fadeInUp'>
            Always want safe and good water for{" "}
            <span className='text-secondaryColor'>Healthy Life.</span>
          </p>
          <img className='animatedImage max-h-96 md:max-h-[500px]' src='/images/waterGlass.png'></img>
        </div>
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
          <path
            fill='#379eff'
            fill-opacity='1'
            d='M0,192L48,176C96,160,192,128,288,101.3C384,75,480,53,576,90.7C672,128,768,224,864,245.3C960,267,1056,213,1152,170.7C1248,128,1344,96,1392,80L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'></path>
        </svg>
      </div>
    </div>
  );
}
