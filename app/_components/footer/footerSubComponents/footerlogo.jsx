import React from "react";

export default function Footerlogo(props) {
  return (
    <>
      <div className="flex flex-col items-center h-[65px] justify-between">
        <img
          className="w-[64.12px] h-[37.12px]"
          //  className="w-[64.12px] h-[37.12px] mx-[32.5px] ml-[34.32px]"
          src="/logo/logo.png"
          alt="footerlogo"
        ></img>
        <div className="flex ">
          <p className="text-[#231f20]">we</p>
          <p className="text-[#57c8ce]">frame</p>
          <p className="text-[#231f20]">tech</p>
        </div>
      </div>
    </>
  );
}
