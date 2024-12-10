"use client";
import React from "react";

export default function NavigationLink({
  pageName,
  setActivePage,
  activePage,
}) {
  return (
    <>
      <div
        onClick={() => setActivePage(pageName)}
        className={`flex ${
          activePage === pageName
            ? "font-bold text-[#0093D0]"
            : "font-medium text-[#6b7280]"
        } `}
      >
        <p
          className={`inline-block text-[12px] duration-400 pb-[8px] sm:text-[14px] text-center leading-[21px] flex-shrink-0 ${
            activePage === pageName &&
            "border-b-[2px] border-[#0093d0]  pb-[8px]"
          } `}
        >
          {pageName}
        </p>
      </div>
    </>
  );
}
