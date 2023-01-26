import React from "react";

export default function ProductCard({ item }) {
  return (
    <div className="w-60 bg-secondaryColor rounded-lg">
      <img src={item.img} className="rounded-lg"/>
      <div className="font-bold text-center text-white py-2">
        <p className="text-2xl ">{item.title}</p>
        <p className="text-lg">Rs. {item.price}</p>
      </div>
    </div>
  );
}
