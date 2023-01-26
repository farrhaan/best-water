import React from "react";
import ProductCard from "./ProductCard";

const products = [
  {
    title: "19L",
    img: "/images/product.png",
    price:"999"
  },
  {
    title: "6L",
    img: "/images/product.png",
    price:"999"
  },
  {
    title: "1500ml",
    img: "/images/product.png",
    price:"999"
  },
  {
    title: "600ml",
    img: "/images/product.png",
    price:"999"
  },
];

export default function Products() {
  return (
    <div className="bg-primaryColor">
      <p className='text-5xl font-bold text-center text-white py-20'>
        Products
      </p>
      <div className=" flex flex-wrap gap-14 mx-auto justify-center pb-32">
        {products?.map((item, i) => {
          return (
            <div key={i}>
              <ProductCard item={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
