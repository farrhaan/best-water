import React from "react";

export default function CertCard({ item, approved }) {
  return (
    <div
      className={
        approved
          ? "flex flex-col items-center justify-center w-48 text-primaryColor rounded-full py-8 text-center bg-backGroundColor"
          : "flex flex-col items-center justify-center w-48 text-white text-center"
      }>
      <img src={item.icon} alt='' className='w-16' />
      <p
        className={
          approved ? "text-xl font-bold my-2" : "text-xl font-bold my-4"
        }>
        {item.title}
      </p>
      <p>{item.desc}</p>
    </div>
  );
}
