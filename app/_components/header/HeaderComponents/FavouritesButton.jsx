import React from "react";

export default function FavouritesButton(props) {
  return (
    <>
      <div className=" flex px-[10px] rounded-[6px] py-[16px] gap-[8px] bg-white items-center flex-shrink-0 ">
        <img className="h-[20px] w-[20px]" src="/header/heartIcon.png"></img>
        <p className="text-[#3B4347]">Mes favoris</p>
        <p className="w-[28px] h-[18px] rounded-[30px] bg-[#eaedee] font-medium text-[10px] leading-[15px] flex justify-center items-center text-center">
          24
        </p>
      </div>
    </>
  );
}
