import React from "react";

export default function ProductInfoDescription(props) {
  return (
    <>
      <div className="py-5 my-3 border-y-[0.5px] border-[#d7d7d7] w-[370px] md:w-[700px]">
        <div className="flex justify-between">
          <div className="flex">
            <div className="text-[#111928] flex items-center justify-center ">
              <img
                className="h-[24px] w-[24px]"
                src="/productpage/rulericon.png"
              ></img>
              <p className="text-[12px] px-2 md:text-[16px] leading-[20px] font-normal">
                20<sup>cm</sup>
              </p>

              {/* <p className=" text-[10px]">cm</p> */}
            </div>
            <div className="text-[#111928] flex">
              <img
                className="h-[24px] w-[24px] ml-2"
                src="/productpage/anothericon.png"
              ></img>
              <p className="text-[12px] px-2 md:text-[16px] leading-[20px] font-normal">
                50<sup>cm</sup>
              </p>
            </div>
          </div>
          <div>
            <p className="h-[16px] text-[#9C9C9C] text-medium text-[12px] text-right">
              RÉF : VABGN5
            </p>
          </div>
        </div>
      </div>
      {/* for description only and its diff div  */}
      <div className="text-12px text-[#5D5D5D] leading-[18.2px] md:text-[14px] font-normal">
        <p className="w-[380px] text-[12px] md:text-[14px] md:w-[400px] ">
          Location appareil à raclette - Raclette traditionnelle 1/2 roue
          Réglable en hauteur Appareil à raclette professionnel Boîtier de
          chauffe horizontal réglable en hauteur
        </p>
        <p className="text-[12px]">220V </p>
        <p className="text-[12px]">900W</p>
      </div>
    </>
  );
}
