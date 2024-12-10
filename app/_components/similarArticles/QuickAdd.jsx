import React from "react";
export default function QuickAdd({ displayQuickAdd }) {
  return (
    <>
      <div
        className={`w-full flex gap-[10px] px-5 my-5 duration-500  ${
          displayQuickAdd === true ? `visible` : `invisible`
        }`}
      >
        <div className="w-full flex justify-between items-center px-1 md:px-2 bg-white rounded-md">
          <img
            className="h-[15px] md:h-auto"
            src="/productpage/decreasesign.png"
          ></img>
          <p>1</p>
          <img
            className="h-[15px] md:h-auto"
            src="/productpage/addsign.png"
          ></img>
        </div>
        <button
          className={`text-[12px] md:text-[14px]  text-center bg-[#EE4197] md:px-[12px] md:py-[9px] rounded-[4px] text-white leading-[21px] font-normal `}
        >
          Ajouter
        </button>
      </div>
    </>
  );
}
// export default function QuickAdd({ displayQuickAdd }) {
//   return (
//     <>
//       <div className="w-full flex gap-[10px] px-5 my-5">
//         <div className="w-full flex justify-between items-center px-1 md:px-2 bg-white rounded-md">
//           <img className="" src="/productpage/decreasesign.png"></img>
//           <p>1</p>
//           <img src="/productpage/addsign.png"></img>
//         </div>
//         <button
//           className={`text-[14px]  text-center bg-[#EE4197] px-[12px] py-[9px] rounded-[4px] text-white leading-[21px] font-normal visible `}
//         >
//           Ajouter
//         </button>
//       </div>
//     </>
//   );
// }

// export default function QuickAdd(props) {
//   return (
//     <>
//       <div className="w-full flex gap-[10px] px-5 my-5">
//         <div className="w-full flex justify-between items-center px-1 md:px-2 bg-white rounded-md">
//           <img className="" src="/productpage/decreasesign.png"></img>
//           <p>1</p>
//           <img src="/productpage/addsign.png"></img>
//         </div>
//         <button className="text-[14px]  text-center bg-[#EE4197] px-[12px] py-[9px] rounded-[4px] text-white leading-[21px] font-normal">
//           Ajouter
//         </button>
//       </div>
//     </>
//   );
// }
