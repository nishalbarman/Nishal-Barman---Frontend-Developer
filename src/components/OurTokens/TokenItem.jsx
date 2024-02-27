"use client";

import Image from "next/image";
import CustomButton from "../CustomButton/CustomButton";

function TokenItem({ img, tokenName, symbol, decimals, marketcap, chain }) {
  return (
    <div className="flex flex-col items-start w-[314px] h-fit p-[26px] border-[rgb(113,96,26)] border-[2px] rounded-[12px] bg-[#141411]">
      <Image
        className="self-center object-contain aspect-square mb-5"
        src={img}
        width={111}
        height={111}
      />
      <p className="font-inter font-bold text-[24px] text-left mb-2">
        {tokenName}
      </p>
      <table className="mb-[35px] w-[100%]">
        <tbody className="flex flex-col gap-3 w-[100%]">
          <tr className="flex gap-8 w-[100%] w-[100%]">
            <td className="text-[16px] font-semibold font-inter text-[#CFCFCF] w-[100%]">
              Symbol
            </td>
            <td className="text-[16px] text-[#CFCFCF] font-inter w-[100%]">
              {symbol}
            </td>
          </tr>
          <tr className="flex gap-8">
            <td className="text-[16px] font-semibold font-inter text-[#CFCFCF] w-[100%]">
              Decimals
            </td>
            <td className="text-[16px] text-[#CFCFCF] font-inter w-[100%]">
              {decimals}
            </td>
          </tr>
          <tr className="flex gap-8">
            <td className="text-[16px] font-semibold font-inter text-[#CFCFCF] w-[100%]">
              Market Cap
            </td>
            <td className="text-[16px] text-[#CFCFCF] font-inter w-[100%]">
              ${marketcap}
            </td>
          </tr>
          <tr className="flex gap-8">
            <td className="text-[16px] font-semibold font-inter text-[#CFCFCF] w-[100%]">
              Chain
            </td>
            <td className="text-[16px] text-[#CFCFCF] font-inter w-[100%]">
              {chain}
            </td>
          </tr>
        </tbody>
      </table>
      <div className="flex items-center justify-center w-[100%] mb-[20px]">
        <CustomButton
          w={"144px"}
          h={"60px"}
          title={"Details"}
          onClick={() => {}}
        />
      </div>
    </div>
  );
}

export default TokenItem;
