import React from "react";

export default function FooterTitlesAndLinks({
  title,
  linkOne,
  linkSecond,
  linkThird,
  linkFourth,
}) {
  return (
    <>
      <div className="flex flex-col gap-[10px] justify-start ">
        <p className="text-[18px] leading-[22.32px ] font-bold">{title}</p>
        <p className="font-normal text-[14px] leading-[17.36px]">{linkOne}</p>
        <p className="font-normal text-[14px] leading-[17.36px]">
          {linkSecond}
        </p>
        <p className="font-normal text-[14px] leading-[17.36px]">{linkThird}</p>
        <p className="font-normal text-[14px] leading-[17.36px]">
          {linkFourth}
        </p>
      </div>
    </>
  );
}
