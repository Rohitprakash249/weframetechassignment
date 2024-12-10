import React from "react";

export default function TitlePriceQtyPrice(props) {
  return (
    <>
      <div className="px-[10px] flex flex-col gap-[10px]">
        <div className="md:h-[30px] flex justify-between text-[17px] md:text-[24px] font-normal leading-[30px]">
          <p>Title</p>
          <p>
            0<sup>€</sup>
          </p>
        </div>
        <div className="h-[26px] flex justify-between items-center">
          <p className="text-[12px] md:text-14px text-[#9C9C9C] font-normal leading-[17.5px] h-[18px]">
            0,35€/Pièce
            <span className="font-normal text-[10px] leading-[12.5px]"></span>
          </p>
          <p className="font-medium bg-[#f1f4f6] text-[#546A7D] py-[2px] md:py-[6px] px-[8px] rounded-[20px] h-[26px] w-[68px] text-[11px] text-center leading-[13.75px]">
            20 pièces
          </p>
        </div>
      </div>
    </>
  );
}
