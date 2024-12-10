import React from "react";

export default function Socialicon(props) {
  return (
    <>
      <div className="flex flex-col gap-[12px] justify-start  items-center sm:items-end  ">
        <div className="flex ">
          <p className="text-[#393939] font-bold text-[18px]">NOUS SUIVRE</p>
        </div>
        <div className="flex gap-[10px]">
          <img
            className="px-[10px] py-[10px] border-[0.5px] rounded-[6px]"
            src="/socialicons/twitter.png"
          ></img>
          <img
            className="px-[10px] py-[10px] border-[0.5px] rounded-[6px]"
            src="/socialicons/insta.png"
          ></img>
          <img
            className="px-[10px] py-[10px] border-[0.5px] rounded-[6px]"
            src="/socialicons/linkedin.png"
          ></img>
        </div>
      </div>
    </>
  );
}
