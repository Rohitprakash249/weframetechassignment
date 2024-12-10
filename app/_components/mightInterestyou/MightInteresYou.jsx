import React from "react";
import SingleProduct from "./components/SingleProduct";

export default function MightInteresYou(props) {
  return (
    <>
      <div className="flex justify-between px-2  py-[10px]  md:px-[30px] md:py-[30px] items-start bg-[#fffff] md:w-[1600px] ">
        <p className="h-[43px] text-[18px]  flex items-center  md:text-[35px] font-medium text-[#393939]">
          Ces produits pourraient vous intéresser
        </p>
        <p className="font-medium h-[20px] text-[#393939] text-[15px] md:text-[16px] underline decoration-solid leading-[19.84px]">
          Voir toute la collection
        </p>
      </div>
      <div className="flex gap-[10px] px-3 md:px-[30px] mb-[70px] w-[390px]">
        <SingleProduct />
        <SingleProduct />
        <SingleProduct />
      </div>
    </>
  );
}
{
  /* <div className=" ">
  <p className="h-[43px] ">
    Articles similaires
  </p>
  <p className="underline decoration-solid leading-[19.84px]">
    Voir toute la collection
  </p>
</div>; */
}
