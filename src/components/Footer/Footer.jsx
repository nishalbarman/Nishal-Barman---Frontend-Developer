import Image from "next/image";
import React from "react";

function Footer() {
  return (
    <div className="w-[100%] flex flex-col items-center bg-split_div_footer p-[0_13%] max-[597px]:p-[0_1%]">
      <div className="z-[999] relative p-[0_8%] flex justify-between items-center  h-[244px] items-center p-1 border-[rgb(113,96,26)] border-[4px] rounded-[28px] bg-[#141411] w-[100%] max-[913px]:flex-col max-[913px]:gap-10 max-[913px]:h-fit max-[913px]:p-10 max-[597px]:w-[100%]">
        <div className="flex flex-col justify-start gap-2 max-[913px]:flex-row">
          <p className="text-nowrap font-inter font-semibold text-[44px] max-[913px]:text-[30px]">
            Join our
          </p>
          <p className="font-inter font-semibold text-[44px]  text-[#FECC00] max-[913px]:text-[30px]">
            Community
          </p>
        </div>
        <div className="flex gap-3 items-center justify-center">
          <Image
            className={""}
            src={"/icons/Facebook.svg"}
            width={80}
            height={80}
            alt="Facebook"
          />{" "}
          <Image
            className="object-contain aspect-square"
            src={"/icons/Behance.svg"}
            width={80}
            height={80}
            alt="Behance"
          />
          <Image
            className={""}
            src={"/icons/Instagram.png"}
            width={80}
            height={80}
            alt="Instagram"
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
  );
}

export default Footer;
