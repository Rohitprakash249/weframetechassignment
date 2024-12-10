import React from "react";

export default function ProductTitleAndPrice(props) {
  return (
    <>
      <div className="flex justify-between w-[700px]">
        <div className="flex flex-col">
          <p className=" text-[20px] md:text-[30px] font-normal leading-[37.5px]  text-[#111928]">
            Cheese – appareil à raclette 1/2 roue
          </p>
          <p className="font-normal flex items-center md:mt-[5px] gap-[7px] text-[15px] md:text-[24px] leading-[30px]">
            39,50€
            <span className="md:text-[14px] leading-[17.5px] font-normal text-[#9C9C9C]">
              /pièce
            </span>
          </p>
        </div>
        <div>
          <img
            className="md:h-[25.37px] md:w-[27.64px] "
            src="/productpage/heartIcon.png"
          ></img>
        </div>
      </div>
    </>
  );
}
