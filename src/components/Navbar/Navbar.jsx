import Image from "next/image";
import Link from "next/link";
import React from "react";
import WalletConnectButton from "../WalletConnectButton/WalletConnectButton";

function Navbar() {
  return (
    <div className="max-[1113px]:hidden z-[99] mt-10 relative  border-[1px] border-[#706F57] shadow-[0px_0px_10px_3px_#352F0E] flex items-center justify-between h-[88px] w-[94%] rounded-[16px] p-[0_2%] backdrop-blur-[13px] bg-[rgba(92,79,5,0.4)]">
      {/* bg-[#34300E]  */}
      <div className="flex gap-2 items-center">
        <Image
          className="self-center"
          src={"/assets/footer-logo.svg"}
          width={55}
          height={55}
          alt="logo"
        />
        <div className="flex flex-col justify-center">
          <p className="font-inter text-[#FFC603] text-[16px] font-semibold tracking-[3px]">
            BITVERSE
          </p>
          <p className="font-inter text-[8.73px] font-bold tracking-[9px]">
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
        <WalletConnectButton />
      </div>
    </div>
  );
}

export default Navbar;
