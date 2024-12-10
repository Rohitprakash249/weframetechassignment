import React from "react";

export default function HeaderLogo(props) {
  return (
    <>
      <div className="flex flex-col items-center h-[45px] sm:h-[65px] justify-between">
        <img
          className="w-[30px] sm:w-[64.12px] sm:h-[37.12px]"
          //  className="w-[64.12px] h-[37.12px] mx-[32.5px] ml-[34.32px]"
          src="/logo/logo.png"
          alt="footerlogo"
        ></img>
        <div className="flex text-[14px] lg:text-[22px]">
          <p className="text-[#231f20]">we</p>
          <p className="text-[#57c8ce]">frame</p>
          <p className="text-[#231f20]">tech</p>
        </div>
      </div>
    </>
  );
}
