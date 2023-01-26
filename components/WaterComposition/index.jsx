import React from "react";
import CompositionBlock from "./CompositionBlock";

const compositionMinerals = [
  {
    name: "Magnesium",
    quantity: "4-15",
  },
  {
    name: "Sodium",
    quantity: "7-30",
  },
  {
    name: "Potassium",
    quantity: "0.02-7",
  },
  {
    name: "Chloride",
    quantity: "40-150",
  },
];
const compositionMinerals2 = [
  {
    name: "Sulphate",
    quantity: "12-60",
  },
  {
    name: "Calcium",
    quantity: "20-70",
  },
  {
    name: "pH",
    quantity: "6.5-8.5",
  },
  {
    name: "Total Minerals",
    quantity: "130-300",
  },
];

export default function WaterComposition() {
  return (
    <div className='mt-[-100px]'>
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
        <path
          fill='#EEF9FF'
          fill-opacity='1'
          d='M0,192L40,202.7C80,213,160,235,240,208C320,181,400,107,480,106.7C560,107,640,181,720,224C800,267,880,277,960,277.3C1040,277,1120,267,1200,266.7C1280,267,1360,277,1400,282.7L1440,288L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z'></path>
      </svg>
      <div className='bg-backGroundColor pt-10'>
        <p className='text-5xl font-bold text-center text-primaryColor'>
          Water Composition
        </p>
        <div className='flex px-20 items-center py-20 justify-around'>
          <div className='flex flex-wrap justify-between items-center z-10 max-w-[35%] w-48 gap-y-10'>
            {compositionMinerals?.map((item, key) => {
              return (
                <div key={key}>
                  <CompositionBlock item={item} />
                </div>
              );
            })}
          </div>
          <div className='hidden md:block'>
            <img src='/images/minerals.png' className='animatedMinerals' />
          </div>
          <div className='flex flex-wrap justify-between items-center z-10 max-w-[35%] w-48 gap-y-10'>
            {compositionMinerals2?.map((item, key) => {
              return (
                <div key={key}>
                  <CompositionBlock item={item} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
