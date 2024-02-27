import Image from "next/image";
import React from "react";

function Footer() {
  return (
    <div className="max-[1366px]:scale-[0.9] relative w-[100%] flex flex-col items-center mt-[8.5rem]">
      <Image
        className="absolute left-0 top-0"
        src={"/assets/round-with-star.svg"}
        width={350}
        height={300}
      />

      <div className="z-[-999] min-h-[300px] w-[100%] bg-[#0E0E0E]"></div>
      <div className="h-fit bg-[#211D0D] w-[100%] p-[0_13%]">
        <div className="mt-[-120px]  z-[999] relative p-[0_8%] flex justify-between items-center  h-[244px] items-center p-1 border-[rgb(113,96,26)] border-[4px] rounded-[28px] bg-[#141411] w-[100%] max-[913px]:flex-col max-[913px]:gap-10 max-[913px]:h-fit max-[913px]:p-10">
          <div className="flex flex-col justify-start gap-2  max-[913px]:flex-row">
            <p className="font-inter font-semibold text-[44px] max-[913px]:text-[30px]">
              Join our
            </p>
            <p className="font-inter font-semibold text-[44px]  text-[#FECC00] max-[913px]:text-[30px]">
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

        <div className="flex flex-col max-[913px]:gap-1 items-center mt-4 gap-3 h-fit pb-[5rem]">
          <Image
            className="max-[913px]:w-[120px]"
            src={"/assets/footer-logo.svg"}
            width={146}
            height={140}
          />
          <p className="text-[24px] text-[#AEAFA9] font-inter text-center max-[913px]:text-[20px] ">
            2023 All rights reserved
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
