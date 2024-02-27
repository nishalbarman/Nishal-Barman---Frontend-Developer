import Image from "next/image";
import React from "react";
import CustomButton from "../CustomButton/CustomButton";
import ClientSideTopSection from "./ClientSideTopSection";
import Navbar from "../Navbar/Navbar";
import HamBurger from "../HamBurger/HamBurger";

function TopSection() {
  return (
    <div className="relative h-fit w-[100%] flex flex-col items-center bg-[url('/assets/dust.svg')] bg-no-repeat bg-center bg-fill">
      <Navbar />
      <HamBurger />

      <Image
        className="animate-up-down absolute left-0 top-0"
        src={"/assets/cube.svg"}
        width={132}
        height={154}
      />

      <Image
        className="absolute right-[-500px] top-[-70px]"
        src={"/assets/radial-rounded-light.png"}
        width={1500}
        height={1500}
      />

      <Image
        className="animate-up-down absolute right-0 bottom-[-400px]"
        src={"/assets/star-react.png"}
        width={350}
        height={350}
      />

      <div className="max-[1366px]:custom-zoom relative flex flex-col justify-center w-fit h-fit bg-[url('/assets/graph-paper.png')] p-[150px] bg-no-repeat bg-center max-[591px]:custom-zoom">
        <div
          style={{
            animation:
              "swipe-left-to-right 2s ease-in-out 0s 1 normal forwards",
          }}
          className="opacity-0 relative flex items-center">
          <p className="text-nowrap font-semibold uppercase text-[76px] font-kanit max-[827px]:text-[45px]  ">
            Your gatew
            <span className="relative before:content-gateway_star before:absolute before:top-[43%] before:left-[57%] before:translate-x-[-50%] before:translate-y-[-50%] before:z-[10] max-[827px]:before:hidden">
              a
            </span>
            y
          </p>
          <Image
            className="absolute right-[-50px] bottom-[-110px] max-[827px]:w-[80px] max-[827px]:top-[35px] max-[827px]:right-[-16px]"
            src={"/assets/ring-with-star.png"}
            width={200}
            height={200}
          />
        </div>

        <p
          style={{
            animation:
              "swipe-left-to-right 2s ease-in-out 0s 1 normal forwards",
          }}
          className="opacity-0 font-semibold uppercase text-[76px] font-kanit max-[827px]:text-[45px] ">
          to
        </p>

        <Image
          style={{
            animation: "bank-from-bottom 2s ease-in-out 0s 1 normal forwards",
          }}
          className="opacity-0 max-[827px]:w-[160px] max-[827px]:h-[160px] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-[2] select-none w-[340px] h-[340px]"
          src={"/assets/bank.png"}
          width={340}
          height={340}
        />

        <div
          style={{
            animation: "right-to-left 1.5s ease-in-out 0.3s 1 normal forwards",
          }}
          className="relative opacity-0">
          <span className="relative z-[3] font-bold before:content-star before:absolute before:left-[-semi16px] uppercase text-[76px] font-kanit max-[827px]:text-[45px] text-nowrap">
            <span className="relative before:content-defi_d_star before:absolute before:top-[40%] before:left-[1px] before:translate-x-[-50%] before:translate-y-[-50%] before:z-[10]">
              D
            </span>
            efi on{" "}
          </span>
          <span className="relative z-[1] font-kanit font-semibold uppercase text-[76px] max-[827px]:text-[45px] text-[#FECC00]">
            Bitcoin
          </span>
          <Image
            className="absolute right-[-10px] bottom-[-1px] w-[150px] select-none"
            src={"/assets/bottom-curve-line-yellow.svg"}
            width={240}
            height={240}
          />
        </div>
      </div>
      <div
        style={{
          animation: "text-bottom-to-top 2s ease-in-out 0s 1 normal forwards",
        }}
        className="max-[1366px]:scale-[0.9] flex flex-col gap-[40px] items-center w-[1000px] max-[958px]:w-[90%] mt-[-65px] opacity-0">
        <p className="text-[24px] text-center text-[#FDFFE3] font-inter max-[958px]:text-[18px]">
          Lorem ipsum dolor sit amet consectetur. Porta amet tellus suspendisse
          id velit proin eleifend id mauris. Amet sem in id eget nunc quam lacus
          tellus augue.
        </p>
        <ClientSideTopSection />
      </div>
    </div>
  );
}

export default TopSection;
