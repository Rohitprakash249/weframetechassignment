import React from "react";

import HeaderLogo from "./HeaderComponents/HeaderLogo";
import HeaderInput from "./HeaderComponents/HeaderInput";
import Drawer from "./HeaderComponents/Drawer";
import CartButton from "./HeaderComponents/CartButton";
import FavouritesButton from "./HeaderComponents/FavouritesButton";
import Inspirations from "./HeaderComponents/Inspirations";
export default function Header(props) {
  return (
    <>
      <div className="py-3 px-3 md:w-[1600px] md:px-[29px] md:py-[33px] flex items-center justify-between">
        {/* main div container */}
        <div className="flex">
          <HeaderLogo />
          <HeaderInput />
        </div>
        <div className="flex gap-[18px] flex-row-reverse items-center lg:flex-row">
          <div className="flex invisible gap-[15px] sm:visible">
            <Inspirations />
            <FavouritesButton />

            <CartButton />
          </div>

          <Drawer />
        </div>
      </div>
    </>
  );
}
