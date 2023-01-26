import React from "react";
import Fade from "react-reveal/Fade";

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
    <div className='mb-16'>
      <Fade bottom>
        <p className='text-5xl font-bold text-center text-white'>
          Pure Drinking Water
        </p>
      </Fade>
      <div className='flex justify-evenly my-20'>
        {cardsData.map((item, i) => {
          return <CertCard key={i} item={item} />;
        })}
      </div>
      <Fade bottom>
        <p className='text-5xl font-bold text-center text-white border-t-2 mx-20 pt-10'>
          Approved By
        </p>
      </Fade>
      <div className='flex justify-evenly my-20'>
        {approvedBy.map((item, i) => {
          return <CertCard key={i} item={item} approved />;
        })}
      </div>
    </div>
  );
}
