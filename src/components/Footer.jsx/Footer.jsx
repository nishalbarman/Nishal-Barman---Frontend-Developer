import Image from "next/image";
import React from "react";

function Footer() {
  return (
    <div className="relative h-[100%] w-[100%] flex flex-col items-center mt-[8.5rem]">
      <Image
        className="absolute left-0 top-0"
        src={"/assets/round-with-star.svg"}
        width={350}
        height={300}
      />

      <div className="min-h-[300px] w-[100%] bg-[#0E0E0E]"></div>
      <div className="min-h-[500px] bg-[#211D0D] h-[100%] w-[100%] p-[0_13%]">
        <div className="mt-[-120px]  z-[999] relative p-[0_8%] flex justify-between items-center  h-[244px] items-center p-1 border-[rgb(113,96,26)] border-[4px] rounded-[28px] bg-[#141411] w-[100%]">
          <div className="flex flex-col justify-start gap-2 ">
            <p className="font-inter font-semibold text-[44px] ">Join our</p>
            <p className="font-inter font-semibold text-[44px]  text-[#FECC00]">
              Community
            </p>
          </div>
          <div className="flex gap-3 items-center justify-center">
            <Image
              className={""}
              src={"/icons/mail.svg"}
              width={80}
              height={80}
            />{" "}
            <Image
              className="object-contain aspect-square"
              src={"/icons/twitter.svg"}
              width={80}
              height={80}
            />
            <Image
              className={""}
              src={"/icons/instagram.svg"}
              width={80}
              height={80}
            />
          </div>
        </div>

        <div className="flex flex-col items-center mt-4">
          <Image src={"/assets/footer-logo.svg"} width={146} height={140} />
          <p className="text-[24px] text-[#AEAFA9] font-inter text-center  mt-3">
            2023 All rights reserved
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
