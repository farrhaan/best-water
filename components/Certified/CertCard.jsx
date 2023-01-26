import React from "react";

export default function CertCard({ item, approved }) {
  return (
    <div
      className={
        approved
          ? "flex flex-col items-center justify-center w-36 md:w-48 text-primaryColor rounded-full py-6 md:py-8 text-center bg-backGroundColor"
          : "mb-10 md:mb-4 flex flex-col items-center justify-center w-48 text-white text-center"
      }>
      <img src={item.icon} alt='' className='w-12 md:w-16' />
      <p
        className={
          approved ? "text-xl font-bold my-1 md:my-2" : "text-xl font-bold my-4"
        }>
        {item.title}
      </p>
      <p className={approved && "text-sm md:text-base"}>{item.desc}</p>
    </div>
  );
}
