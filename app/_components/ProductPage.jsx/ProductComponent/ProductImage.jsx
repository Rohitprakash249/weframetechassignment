import React from "react";

export default function ProductImage(props) {
  return (
    <>
      <div>
        <div className="bg-[#f8f6f4] justify-center items-center relative flex w-[370px] md:h-[552px]  lg:w-[761px] lg:h-[652px] md:w-[552px]">
          <img
            className="h-[380px] mix-blend-multiply md:h-[552px] md:w-[552px]"
            src="/productpage/Product.png"
            alt="productimage"
          ></img>
          <div className="absolute top-[10px] left-[10px] md:left-[15px] flex gap-2 flex-col">
            <img
              className="h-[40px] w-[40px]"
              src="/productpage/selector.png"
            ></img>
            <img
              className="h-[40px] w-[40px]"
              src="/productpage/selector.png"
            ></img>
            <img
              className="h-[40px] w-[40px]"
              src="/productpage/selector.png"
            ></img>
            <img
              className="h-[40px] w-[40px]"
              src="/productpage/selector.png"
            ></img>
          </div>
        </div>
      </div>
    </>
  );
}
