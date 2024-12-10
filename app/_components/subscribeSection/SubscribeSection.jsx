import React from "react";
import SubscribeInputAndButton from "./SubscribeComponents/SubscribeInputAndButton";
import SubscribeImage from "./SubscribeComponents/subscribeImage";

export default function SubscribeSection(props) {
  return (
    <>
      <div className="px-5 lg:py-[70px] py-7 md:flex flex flex-col lg:flex-row gap-8 md:gap-8 md:w-[1600px]  ">
        <SubscribeImage />
        <SubscribeInputAndButton />
      </div>
    </>
  );
}
// export default function SubscribeSection(props) {
//     return ( w-[650px]
//       <>
//         <div className="bg-white px-4 sm:px-[20px] flex py-[50px]">
//           <div className="justify-between items-center  ">
//             <div className="flex flex-shrink-0 py-5 sm:w-[818px] ">
//               {/* subscribe section image  */}
//               <SubscribeImage />
//             </div>
//             {/* <div className="w-[818px] py-[10px] flex"></div> */}
//             <SubscribeInputAndButton />

//             {/* subscribe section starts */}
//           </div>
//         </div>
//       </>
//     );
//   }
