import React from "react";
import DeliveryHeader from "./DeliveryHeader";
import DeliveryStep from "./DeliveryStep";

export default function DeliveryStatus(props) {
  const data = [
    {
      imageLink: "/middlesection/first.png",
      firstLine: "Livraison & Reprise",
      secondLine: "Selon vos besoins",
    },
    {
      imageLink: "/middlesection/second.png",
      firstLine: "Nettoyage",
      secondLine: "Selon vos besoins",
    },
    {
      imageLink: "/middlesection/third.png",
      firstLine: "Commande Illimitée",
      secondLine: "Tout est possible",
    },
    {
      imageLink: "/middlesection/fourth.png",
      firstLine: "Transport & Enlèvement",
      secondLine: "On s’occupe de tout.",
    },
  ];
  return (
    <>
      <div className="py-[50px] md:w-[1600px]  bg-gradient-to-b from-[#fef7fb] h-auto">
        <DeliveryHeader />
        <div className="flex py-[20px] flex-col gap-[10px] md:flex-row justify-center">
          {data.map((singeData) => (
            <DeliveryStep
              key={singeData.firstLine}
              imageSource={singeData.imageLink}
              firstLine={singeData.firstLine}
              secondLine={singeData.secondLine}
            />
          ))}
        </div>
      </div>
    </>
  );
}
