import React from "react";

export default function TopBar(props) {
  return (
    <>
      <div className="flex justify-between px-2 md:px-[30px] py-[10px] md:py-[30px] items-center bg-[#fdfbfb]">
        <p className="h-[43px] text-[18px] flex items-center md:text-[35px] font-medium text-[#393939]">
          Articles similaires
        </p>
        <p className="font-medium h-[20px] text-[#393939] text-[15px] md:text-[16px] underline decoration-solid leading-[19.84px]">
          Voir toute la collection
        </p>
      </div>
    </>
  );
}
