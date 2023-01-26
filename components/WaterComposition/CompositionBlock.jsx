import React from "react";

export default function CompositionBlock({ item }) {
  return (
    <div className='w-full flex items-center'>
      <img src='/icons/drop.png' className='w-20 md:w-28 opacity-75 ' />
      <div className='ml-[-40px] z-20'>
        <p className='text-xl font-bold'>{item.name}</p>
        <p className='text-base font-bold'>{item.quantity} mg/L</p>
      </div>
    </div>
  );
}
