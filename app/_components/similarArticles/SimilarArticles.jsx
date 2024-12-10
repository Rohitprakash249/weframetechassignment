import React from "react";
import TopBar from "./TopBar";
import SimilarSingleProduct from "./SimilarSingleProduct";

export default function SimilarArticles(props) {
  return (
    <>
      <div className="bg-[#fdfbfb] relative w-auto md:w-[1600px] ">
        <TopBar />
        <div className="absolute h-[46px] flex top-[50%] justify-between w-[390px] md:w-[1600px]">
          <button className="h-[46px] w-[46px] flex items-center justify-center opacity-150 bg-[#5CD2DD]">
            <img
              className=" h-[24px] w-[24px]"
              src="/productpage/arrow-left.svg"
            ></img>
          </button>
          <button className="h-[46px] flex items-center justify-center w-[46px] bg-[#5CD2DD]">
            <img
              className="rotate-180 h-[24px] w-[24px]"
              src="/productpage/arrow-left.svg "
            ></img>
          </button>
        </div>
        <div className="flex gap-[10px] px-3 md:px-[30px] overflow-auto whitespace-nowrap py-6 mb-[70px] flex-shrink-0">
          <SimilarSingleProduct />
          <SimilarSingleProduct />
          <SimilarSingleProduct />
          <SimilarSingleProduct />
          <SimilarSingleProduct />
          <SimilarSingleProduct />
          <SimilarSingleProduct />
        </div>
      </div>
    </>
  );
}
