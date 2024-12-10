import React from "react";

export default function SubscribeInputAndButton(props) {
  return (
    <>
      <div className="bg-[#FFF3F9] md:h-auto lg:h-auto  rounded-[20px] px-4 sm:px-[34px] sm:py-4 lg:w-[800px] flex flex-col w-[350px] sm:w-[700px] ">
        <div>
          <div className="flex">
            <p className="text-[#414141] font-medium text-[15px] sm:text-[43px] leading-[53.32px]">
              S’inscrire & économiser
            </p>
            <p className="pl-1 text-[#62d4de] font-medium text-[15px] sm:text-[43px] leading-[53.32px]">
              10%
            </p>
            {/* <p className=""></p> */}
          </div>

          <p className="text-[#BDA2B0] font-medium text-[14px]  sm:pt-[12px] leading-[22px]">
            Office ipsum you must be muted. Synergize helicopter prioritize
            anyway job due harvest most opportunity . Yet busy any meeting shark
            light marginalised 4-blocker message. Productize corporate nail
            caught synergy highlights lunch. Company another pushback items dear
            or any.
          </p>
          <div className=" sm:flex gap-[8px] py-4 sm:py-[34px] flex flex-col sm:flex-row items-center justify-center">
            <input
              className="rounded-[8px] border-[1px] px-3 text-center py-2 mb-2 sm:mb-0 sm:px-[16px] sm:py-[19px] w-full border-[#F5E1EB] sm:text-[18px] text-[15px] text-[#A68A98] placeholder-[#A68A98] font-light"
              placeholder="john@doe.com"
            ></input>
            <button className="px-12 sm:px-[16px]  py-2 sm:py-[19px] sm:gap-[8px] flex items-center bg-[#5CD2DD] text-white rounded-md text-[15px]  sm:text-[18px] sm:leading-[18px] font-bold">
              <p>S’inscrire</p>

              <svg
                className="sm:h-[22px] sm:w-[22px]"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
