import React from "react";
import FooterTitlesAndLinks from "./FooterTitlesAndLinks";

export default function FooterLinks(props) {
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
      <div className="flex justify-between gap-[40px] text-[#393939]">
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
      </div>
    </>
  );
}

// import React from "react";
// import FooterTitlesAndLinks from "./FooterTitlesAndLinks";

// export default function FooterLinks(props) {
//   const linkData = [
//     {
//       title: "INFOS PRATIQUES",
//       firstLink: "À propos",
//       secondLink: "Livraisons & Reprises",
//       thirdLink: "Mode d'emploi",
//       fourthLink: "F.A.Q",
//     },
//     {
//       title: "LÉGAL",
//       firstLink: "Mentions légales",
//       secondLink: "CGU",
//       thirdLink: "CGV",
//       fourthLink: "Politique de confidentialité",
//     },
//     {
//       title: "MON COMPTE",
//       firstLink: "Accéder à mon compte",
//       secondLink: "Ma liste d'envie",
//       thirdLink: "Créer un compte",
//       fourthLink: "Mot de passe oublié",
//     },
//   ];
//   return (
//     <>
//       <div className="flex justify-between gap-[40px] text-[#393939]">
//         {linkData.map((singleItem) => (
//           <FooterTitlesAndLinks
//             key={singleItem.title}
//             title={singleItem.title}
//             linkOne={singleItem.firstLink}
//             linkSecond={singleItem.secondLink}
//             linkThird={singleItem.thirdLink}
//             linkFourth={singleItem.fourthLink}
//           />
//         ))}
//       </div>
//     </>
//   );
// }
