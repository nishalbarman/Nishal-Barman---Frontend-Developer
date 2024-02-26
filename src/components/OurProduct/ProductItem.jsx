import Image from "next/image";
import React from "react";

function ProductItem({ imageUrl, title, description }) {
  return (
    <div className="flex flex-col items-center w-[314px] h-[398px] items-center p-1 border-[rgb(113,96,26)] border-[2px] rounded-[12px] ">
      <Image
        className="object-contain aspect-square"
        src={imageUrl}
        width={159}
        height={159}
      />
      <p className="font-inter font-bold text-[20px] text-center">{title}</p>
      <div className="bg-[#FECC00] h-[3px] rounded w-[169px] m-[12px_0px]"></div>
      <p className="text-[#CFCFCF] font-inter text-[16px] text-center">
        {description}
      </p>
    </div>
  );
}

export default ProductItem;
