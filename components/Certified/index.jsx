import React from "react";
import CertCard from "./CertCard";

const cardsData = [
  {
    title: "Maximum Purity",
    icon: "/icons/purity.png",
    desc: "Exercitation ullamco laboris nisl aliquip duis aute irure dolor iny rep henderit voluptate velit.",
  },
  {
    title: "Chlorine Free",
    icon: "/icons/water1.png",
    desc: "Exercitation ullamco laboris nisl aliquip duis aute irure dolor iny rep henderit voluptate velit.",
  },
  {
    title: "Quality Certified",
    icon: "/icons/certified.png",
    desc: "Exercitation ullamco laboris nisl aliquip duis aute irure dolor iny rep henderit voluptate velit.",
  },
];

const approvedBy = [
  {
    title: "PFA",
    icon: "/images/pfa.png",
    desc: "FSD/RM/32690781",
  },
  {
    title: "PSQCA",
    icon: "/images/psqca.png",
    desc: "CM/L-2393/2022",
  },
];
export default function Certified() {
  return (
    <div className='mb-16' id="about">
      <p className='text-3xl md:text-5xl font-bold text-center text-white animate__animated animate__fadeInUp'>
        Pure Drinking Water
      </p>
      <p className='px-14 md:px-48 my-10 mx-auto text-white text-lg text-center animate__animated animate__fadeInUp'>
        Established in 2003, Best Water is a trusted name in the drinking water industry. Best Water is extracted from deep underground source and purified
        through latest reverse Osmosis technology.
      </p>
      <div className='flex flex-wrap justify-evenly mt-10 md:mb-20'>
        {cardsData.map((item, i) => {
          return <CertCard key={i} item={item} />;
        })}
      </div>
      <p className='text-3xl md:text-5xl font-bold text-center text-white border-t-2 mx-20 pt-10 animate__animated animate__fadeInUp'>
        Approved By
      </p>
      <div className='flex justify-evenly my-10 md:my-20 pb-10 md:pb-0'>
        {approvedBy.map((item, i) => {
          return <CertCard key={i} item={item} approved />;
        })}
      </div>
    </div>
  );
}
