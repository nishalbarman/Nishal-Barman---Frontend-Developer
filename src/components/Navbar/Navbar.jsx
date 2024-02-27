import Image from "next/image";
import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <div className="max-[1113px]:hidden z-[99] mt-10 relative bg-[#34300E] border-[1px] border-[#706F57] shadow-[0px_0px_10px_3px_#352F0E] flex items-center justify-between h-[88px] w-[94%] rounded-[16px] p-[0_2%]">
      <div className="flex gap-1 items-center">
        <Image src={"/assets/footer-logo.svg"} width={50} height={50} />
        <div className="flex flex-col">
          <p className="text-[#FFC603] text-[16px] font-semibold tracking-[6px]">
            BITVERSE
          </p>
          <p className="text-[8px] font-semibold tracking-[6px] h-[6px]">
            FINANCE
          </p>
        </div>
      </div>

      <div className="flex items-center gap-[5rem]">
        <div className="flex gap-10">
          <Link
            className="text-[18px] font-inter hover:underline underline-offset-[5px]"
            href={"/#about"}>
            About
          </Link>
          <Link
            className="text-[18px] font-inter hover:underline underline-offset-[5px]"
            href={"/#products"}>
            Our Products
          </Link>
          <Link
            className="text-[18px] font-inter hover:underline underline-offset-[5px]"
            href={"/#tokens"}>
            Token Utility
          </Link>
          <Link
            className="text-[18px] font-inter hover:underline underline-offset-[5px]"
            href={"/#roadmap"}>
            Roadmap
          </Link>
        </div>
        <button className="bg-[#F9D326] w-[187px] h-[55px] rounded-[10px] text-black font-bold">
          Conntect wallet
        </button>
      </div>
    </div>
  );
}

export default Navbar;
