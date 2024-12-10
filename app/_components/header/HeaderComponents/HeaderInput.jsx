import React from "react";

export default function HeaderInput(props) {
  return (
    <>
      <div className="flex items-center bg-[#f9fafb] w-full rounded-lg h-[40px] sm:h-[50px] mx-2 ">
        <input
          className="Geist placeholder-[#667482] md:w-[500px] lg:w-[750px] HeaderPlaceholder px-1 text-[14px] text-[#667482] bg-[#f9fafb]"
          placeholder="Rechercher un produit"
        ></input>
        <img
          className="sm:h-[24px] sm:w-[24px] h-[18px] mx-6 w-[18px] mix-blend-multiply "
          src="/header/SearchIcon.png"
        ></img>
      </div>
    </>
  );
}
