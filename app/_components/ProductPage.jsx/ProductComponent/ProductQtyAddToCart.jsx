import React from "react";

export default function ProductQtyAddToCart(props) {
  return (
    <>
      <div className="w-[370px] md:w-[550px] pt-2 md:pt-6 border-t-[0.5px] border-[#d7d7d7] flex gap-[10px]">
        <div className="md:h-[50px] flex border-[1px] border-[#dedede] items-center justify-center rounded-md px-2 md:px-3 w-[100px] justify-between md:w-[153px] ">
          <img
            className="h-[16px] w-[16px]"
            src="/productpage/decreasesign.png"
          ></img>
          <p>1</p>
          <img
            className="h-[16px] w-[16px]"
            src="/productpage/addsign.png"
          ></img>
        </div>
        <button className="md:text-[16px] text-[12px] w-full rounded-md md:h-[50px] text-white leading-[20.8px] text-center font-bold bg-[#5cd2dd] md:py-[14px]">
          Ajouter au panier
        </button>
      </div>
    </>
  );
}
