import React from "react";

export default function DeliveryStep({ imageSource, firstLine, secondLine }) {
  return (
    <>
      <div className="flex flex-col items-center justify-center sm:gap-[10px]">
        <img
          className="mix-blend-multiply h-[40px] sm:h-[55px] my-5"
          src={imageSource}
        ></img>
        <p className="font-medium text-[13px] sm:text-[20px] leading-[22px] text-center text-[#393939]">
          {firstLine}
        </p>
        <p className="font-normal text-center text-[11px] sm:text-[14px] text-[#9C9C9C]">
          {secondLine}
        </p>
      </div>
    </>
  );
}
