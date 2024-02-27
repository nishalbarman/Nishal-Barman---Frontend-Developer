"use client";

import Image from "next/image";
import React from "react";

function CustomButton({ h, w, onClick, title }) {
  return (
    <button
      onClick={onClick}
      className={`${w ? "w-" + "[" + w + "]" : "w-[171px]"} ${
        h ? "h-" + "[" + h + "]" : "h-[51px]"
      } ${
        (h || w) && "p-[8px_15px]"
      } flex justify-center items-center gap-4 rounded-[90px] text-black bg-gradient-to-r from-[#ffc900] to-[#feab00] text-[16px] font-bold border-[3px] border-[white] shadow-[0_0_0_4px_#ffc900,_0_0_0_4px_#feab00;]`}>
      {title}{" "}
      <Image
        src={"/icons/right-arrow-tailless.svg"}
        width={10}
        height={10}
        alt="right arrow"
      />
    </button>
  );
}

export default CustomButton;
