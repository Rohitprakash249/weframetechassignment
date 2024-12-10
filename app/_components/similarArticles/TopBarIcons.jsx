import React from "react";

export default function TopBarIcons(props) {
  return (
    <>
      <div className="flex w-full px-4 my-5 justify-between items-center h-[25.34px]">
        <img
          className="h-[20px] md:h-[32px] md:w-[32px] mix-blend-multiply"
          src="/productpage/heartMightInterestYou.png"
        ></img>
        <div className="px-[2.5px] py-[0.5px] bg-white">
          <p className="text-[9px] md:text-[10px] text-[#111928] leading-[15px] text-center font-medium">
            ART DE LA TABLE
          </p>
        </div>
      </div>
    </>
  );
}
