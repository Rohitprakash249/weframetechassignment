"use client";
import React, { useState } from "react";
import NavigationLink from "./NavigationLink";

export default function Navigation(props) {
  const [activePage, setActivePage] = useState("ART DE LA TABLE");

  const data = [
    { pageName: "ART DE LA TABLE", link: "" },
    { pageName: "MOBILIER", link: "" },
    { pageName: "NAPPAGE", link: "" },
    { pageName: "MATÉRIEL DE SALLE", link: "" },
    { pageName: "CUISINE", link: "" },
    { pageName: "BARBECUE", link: "" },
    { pageName: "TENTE", link: "" },
    { pageName: "CHAUFFAGE", link: "" },
    { pageName: "PODIUM-PISTE DE DANSE", link: "" },
    { pageName: "SON ET LUMIÈRE", link: "" },
    { pageName: "PACKS", link: "" },
    { pageName: "CONSOMMABLES", link: "" },
  ];
  return (
    <>
      <div className="flex px-[23px] w-auto gap-[15px] sm:gap-[38px] overflow-auto whitespace-nowrap lg:justify-center md:w-[1600px] ">
        {data.map((singleItem) => (
          <NavigationLink
            key={singleItem.pageName}
            pageName={singleItem.pageName}
            setActivePage={setActivePage}
            activePage={activePage}
          />
        ))}
      </div>
    </>
  );
}
{
  /* <div className="font-bold text-[#0093D0]">
          <p className="text-[12px] border-b-[2px] border-[#0093d0]  pb-[8px]  sm:text-[14px] text-center leading-[21px]">
            ART DE LA TABLE
          </p>
        </div> */
}
