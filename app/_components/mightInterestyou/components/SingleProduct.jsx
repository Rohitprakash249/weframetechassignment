"use client";
import React, { useState } from "react";
import TopBarIcons from "./TopBarIcons";
import QuickAdd from "./QuickAdd";
import TitlePriceQtyPrice from "./TitlePriceQtyPrice";

export default function SingleProduct(props) {
  const [displayQuickAdd, setDisplayQuickAdd] = useState(false);

  function setDisplayTrueMouseOver() {
    setDisplayQuickAdd(true);
  }

  function setDisplayFalseMouseOver() {
    setDisplayQuickAdd(false);
  }
  return (
    <>
      <div
        onMouseOver={setDisplayTrueMouseOver}
        onMouseOut={setDisplayFalseMouseOver}
        className="w-[505px] gap-[12px] flex flex-col"
      >
        <div className="h-[280px] md:w-[506px] px-2 md:h-[362px]  flex flex-col justify-between items-center bg-[#f9f7f5] rounded-md  ">
          <TopBarIcons />
          <img
            className={`h-[224px] w-[224px] mix-blend-multiply duration-300 ${
              displayQuickAdd === true ? `scale-110` : `scale-100`
            }`}
            src="/productpage/ProductInterest.png"
          ></img>
          {/* {displayQuickAdd === true ? <QuickAdd /> : ""} */}
          <QuickAdd displayQuickAdd={displayQuickAdd} />
        </div>
        <TitlePriceQtyPrice />
      </div>
    </>
  );
}

// "use client";
// import React, { useState } from "react";
// import TopBarIcons from "./TopBarIcons";
// import QuickAdd from "./QuickAdd";
// import TitlePriceQtyPrice from "./TitlePriceQtyPrice";

// export default function SingleProduct(props) {
//   const [displayQuickAdd, setDisplayQuickAdd] = useState(false);

//   function setDisplayTrueMouseOver() {
//     setDisplayQuickAdd(true);
//   }

//   function setDisplayFalseMouseOver() {
//     setDisplayQuickAdd(false);
//   }
//   return (
//     <>
//       <div
//         onMouseOver={setDisplayTrueMouseOver}
//         onMouseOut={setDisplayFalseMouseOver}
//         className="w-[505px] gap-[12px] flex flex-col"
//       >
//         <div className="md:w-[506px] px-2 md:h-[362px]  flex flex-col justify-between items-center bg-[#f9f7f5] rounded-md  ">
//           <TopBarIcons />
//           <img
//             className="h-[224px] w-[224px] mix-blend-multiply"
//             src="/productpage/ProductInterest.png"
//           ></img>
//           {/* {displayQuickAdd === true ? <QuickAdd /> : ""} */}
//           <QuickAdd displayQuickAdd={displayQuickAdd} />
//         </div>
//         <TitlePriceQtyPrice />
//       </div>
//     </>
//   );
// }
