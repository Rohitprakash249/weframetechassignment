import React from "react";

export default function Questions(props) {
  return (
    <>
      <div className="flex flex-col md:w-[740px] md:h-[62px] mt-4 md:mt-0 px-[10px] ">
        <div className="flex bg-[#fcfaf9] justify-between px-5 py-2 md:py-5">
          <p className="font-medium text-[12px]  md:text-[16px] leading-[20.8px] text-[#393939]">
            LIVRAISONS
          </p>
          <img
            className="md:h-[24px] md:h-[24px] h-[20px] w-[20px] mix-blend-multiply"
            src="productpage/addsign.png"
          ></img>
        </div>
        <div className="flex bg-[#fcfaf9] justify-between px-5  py-2 md:py-5 rounded-md">
          <p className="font-medium text-[12px] md:text-[16px] leading-[20.8px] text-[#393939]">
            QUESTIONS
          </p>
          <img
            className="h-[24px] h-[24px]  h-[20px] w-[20px] mix-blend-multiply"
            src="productpage/addsign.png"
          ></img>
        </div>
      </div>
    </>
  );
}
