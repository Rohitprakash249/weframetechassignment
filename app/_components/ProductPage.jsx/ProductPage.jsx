import React from "react";
import ProducDescription from "./ProductComponent/ProducDescription";
import ProductImage from "./ProductComponent/ProductImage";
import ProductInfo from "./ProductComponent/ProductInfo";
import Questions from "./ProductComponent/Questions";
export default function ProductPage(props) {
  return (
    <>
      <div className="flex px-[10px] flex-col md:flex-row md:px-[30px] gap-[30px] w-full w-[340px] md:w-[3000px] ">
        <ProductImage />
        <ProductInfo />
      </div>
      <div className="flex flex-col md:flex-row mt-3 md:mt-10 mb-[70px]">
        <ProducDescription />
        <Questions />
      </div>
    </>
  );
}
