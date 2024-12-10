import React from "react";
import ProductTitleAndPrice from "./ProductTitleAndPrice";
import ProductInfoDescription from "./ProductInfoDescription";
import ProductQtyAddToCart from "./ProductQtyAddToCart";

export default function ProductInfo(props) {
  return (
    <>
      <div className="flex flex-col justify-between">
        <div>
          <ProductTitleAndPrice />
          <ProductInfoDescription />
        </div>
        <ProductQtyAddToCart />
      </div>
    </>
  );
}
