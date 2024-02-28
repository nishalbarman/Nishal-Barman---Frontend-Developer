import Image from "next/image";
import React from "react";

function ProductItem({ imageUrl, title, description }) {
  return (
    <div className="relative group/product flex flex-col items-center w-[314px] h-[398px] items-center p-1 border-[rgb(113,96,26)] border-[2px] rounded-[12px] bg-[#141411] max-[597px]:w-[100%]">
      {/* start: ring with star images */}
      <Image
        className="opacity-0 z-[3] absolute top-1 left-1 object-contain aspect-square group-hover/product:animate-to-left-top"
        src={"/assets/ring-with-star.png"}
        width={93}
        height={93}
        alt={"ring"}
      />

      <Image
        className="opacity-0 z-[3] absolute bottom-1 right-1 object-contain aspect-square group-hover/product:animate-to-right-bottom"
        src={"/assets/ring-with-star.png"}
        width={93}
        height={93}
        alt={"ring"}
      />
      {/* end: ring with star images */}

      <Image
        className="object-contain aspect-square group-hover/product:animate-send-top-rotate"
        src={imageUrl}
        width={159}
        height={159}
        alt={title}
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
