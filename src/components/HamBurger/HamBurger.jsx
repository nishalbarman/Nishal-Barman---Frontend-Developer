import Image from "next/image";
import Link from "next/link";
import React from "react";
import WalletConnectButton from "../WalletConnectButton/WalletConnectButton";

function HamBurger() {
  return (
    <div className="hidden max-[1113px]:flex z-[99] mt-10 relative bg-[#34300E] border-[1px] border-[#706F57] shadow-[0px_0px_10px_3px_#352F0E] items-center justify-between h-[88px] w-[94%] rounded-[16px] p-[0_2%]">
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

      <div className="group/menu ">
        <div className="flex gap-1 items-center pt-3 pb-3">
          <Image
            className="invert group-hover/menu:drop-shadow-[0px_0px_10px_#FFFFFF]"
            src={"/icons/menu.svg"}
            width={40}
            height={40}
          />
        </div>

        <div className="hidden shadow-[0px_-10px_40px_-10px_#34300E] group-hover/menu:flex flex-col items-start gap-[1rem] bg-[#141411] absolute top-[70px] right-[20px] rounded-lg">
          <div className="flex flex-col gap-4 p-[20px_20px] rounded-lg">
            <div className="flex gap-3 flex-col h-fit ">
              <Link
                className="text-[18px] p-[5px_10px] font-inter p-[5px_10px] hover:underline rounded-md"
                href={"/#about"}>
                About
              </Link>
              <Link
                className="text-[18px] hover:underline p-[5px_10px] font-inter"
                href={"/#products"}>
                Our Products
              </Link>
              <Link
                className="text-[18px] hover:underline p-[5px_10px] font-inter"
                href={"/#tokens"}>
                Token Utility
              </Link>
              <Link
                className="text-[18px] hover:underline p-[5px_10px] font-inter"
                href={"/#roadmap"}>
                Roadmap
              </Link>
            </div>
            <WalletConnectButton />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HamBurger;
