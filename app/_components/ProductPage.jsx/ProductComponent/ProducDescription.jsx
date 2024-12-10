import React from "react";

export default function ProducDescription(props) {
  const description = `Festi vous propose à la location un/une "Jewel – grand couteau/10pc" pour votre évenement et ce dès 0,35 € / pièce (HTVA). Que ce soit pour votre mariage, une fête d'anniversaire ou du personnel, ce produit a fait l'objet d'une sélection rigoureuse par notre équipe. Il est en location chez nous sous la référence "VAJGC". Nous sommes à votre disposition pour que les événements de nos clients, même en last-minute, soient toujours une réussite. Vous pourrez trouver tout une série d'autre produit à louer de ce type dans la catégorie`;

  return (
    <>
      <div className="flex flex-col md:w-[790px] px-3 md:px-[30px] ">
        <p className="text-[15px] md:text-[20px] text-[#111928]">
          Description produit
        </p>
        <p className="text-[12px] text-[#9C9C9C] md:text-[14px] leading-[18.2px] font-normal">
          {description}
        </p>
      </div>
    </>
  );
}
