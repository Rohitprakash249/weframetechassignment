import Image from "next/image";
import React from "react";
import Logo from "../../../public/logo/logo.png";
import Footerlogo from "./footerSubComponents/footerlogo";
import Socialicon from "./footerSubComponents/Socialicon";
import FooterLinks from "./footerSubComponents/FooterLinks";
import FooterTitlesAndLinks from "./footerSubComponents/FooterTitlesAndLinks";
export default function Footer(props) {
  const linkData = [
    {
      title: "INFOS PRATIQUES",
      firstLink: "À propos",
      secondLink: "Livraisons & Reprises",
      thirdLink: "Mode d'emploi",
      fourthLink: "F.A.Q",
    },
    {
      title: "LÉGAL",
      firstLink: "Mentions légales",
      secondLink: "CGU",
      thirdLink: "CGV",
      fourthLink: "Politique de confidentialité",
    },
    {
      title: "MON COMPTE",
      firstLink: "Accéder à mon compte",
      secondLink: "Ma liste d'envie",
      thirdLink: "Créer un compte",
      fourthLink: "Mot de passe oublié",
    },
  ];
  return (
    <>
      <div className="flex pb-9 justify-between px-[30px] w-[300px] md:w-[1600px]  pt-[40px] w-full border-t-[0.5px] border-[#d9d9d9]">
        {/* this is main Footer div Container  */}
        <div className="md:h-[171] flex gap-[40px] flex-shrink-0 ">
          <div className="flex gap-[40px] flex-wrap items-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 duration-700">
            {/* footer logo and links will be here  */}
            <Footerlogo />
            {linkData.map((singleItem) => (
              <FooterTitlesAndLinks
                key={singleItem.title}
                title={singleItem.title}
                linkOne={singleItem.firstLink}
                linkSecond={singleItem.secondLink}
                linkThird={singleItem.thirdLink}
                linkFourth={singleItem.fourthLink}
              />
            ))}
            {/* <FooterLinks /> */}
          </div>
        </div>
        <div className=" flex justify-start scale-50 sm:scale-75 md:scale-[80%] xl:scale-100  duration-700 ">
          {/* social icons will be here */}
          <Socialicon />
        </div>
      </div>
      {/* 
      <div className="sm:scale-75 flex duration-700 justify-center  items-center scale-50 md:scale-100">
        <Socialicon />
      </div> */}
    </>
  );
}

// import Image from "next/image";
// import React from "react";
// import Logo from "../../../public/logo/logo.png";
// import Footerlogo from "./footerSubComponents/footerlogo";
// import Socialicon from "./footerSubComponents/Socialicon";
// import FooterLinks from "./footerSubComponents/FooterLinks";
// export default function Footer(props) {
//   return (
//     <>
//       <footer>
//         <div className="flex justify-between px-[30px]">
//           <div className="md:h-[171] flex gap-[40px]  pt-[40px]">
//             {/* this is main Footer div Container  */}

//             <div className="flex gap-[40px] flex-wrap">
//               {/* footer logo and links will be here  */}
//               <Footerlogo />
//               <FooterLinks />
//             </div>
//           </div>
//           <div>
//             {/* social icons will be here  */}
//             <Socialicon />
//           </div>
//         </div>
//       </footer>
//     </>
//   );
// }
