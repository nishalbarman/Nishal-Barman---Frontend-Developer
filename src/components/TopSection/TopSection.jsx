import Image from "next/image";
import React from "react";

function TopSection() {
  return (
    <div className="relative h-fit w-[100%] flex flex-col items-center bg-[url('/assets/dust.svg')] bg-no-repeat bg-center bg-fill">
      <Image
        className="absolute left-0 top-0"
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

      {/* <Image
        className="absolute right-[-270px] top-[20px]"
        src={"/assets/radial-rounded-light.png"}
        width={1125}
        height={1125}
      /> */}

      <Image
        className="absolute right-0 bottom-[-400px]"
        src={"/assets/star-react.png"}
        width={350}
        height={350}
      />

      <div className="relative flex flex-col justify-center w-fit h-fit bg-[url('/assets/graph-paper.png')] p-[150px] bg-no-repeat bg-center">
        <div className="relative flex items-center">
          <p className="font-semibold uppercase text-[76px] font-kanit">
            Your gatew
            <span className="relative before:content-gateway_star before:absolute before:top-[43%] before:left-[57%] before:translate-x-[-50%] before:translate-y-[-50%] before:z-[10]">
              a
            </span>
            y
          </p>
          <Image
            className="absolute right-[-50px] bottom-[-110px]"
            src={"/assets/ring-with-star.png"}
            width={200}
            height={200}
          />
        </div>

        <p className="font-semibold uppercase text-[76px] font-kanit">to</p>

        <Image
          className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-[2] select-none"
          src={"/assets/bank.png"}
          width={340}
          height={340}
        />

        <div className="relative">
          <span className="relative z-[2] font-bold before:content-star before:absolute before:left-[-semi16px] uppercase text-[76px] font-kanit">
            <span className="relative before:content-defi_d_star before:absolute before:top-[40%] before:left-[1px] before:translate-x-[-50%] before:translate-y-[-50%] before:z-[10]">
              D
            </span>
            efi on{" "}
          </span>
          <span className="relative z-[1] font-kanit font-semibold uppercase text-[76px] text-[#FECC00]">
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
      <div className="flex flex-col gap-[40px] items-center w-[1000px] mt-[-65px]">
        <p className="text-[24px] text-center text-[#FDFFE3] font-inter">
          Lorem ipsum dolor sit amet consectetur. Porta amet tellus suspendisse
          id velit proin eleifend id mauris. Amet sem in id eget nunc quam lacus
          tellus augue.
        </p>
        <button className="flex justify-center items-center gap-4 rounded-[90px] text-black bg-gradient-to-r from-[#ffc900] to-[#feab00] h-[51px] w-[171px] text-[16px] font-bold border-[3px] border-[white] shadow-[0_0_0_4px_#ffc900,_0_0_0_4px_#feab00;]">
          Get Details{" "}
          <Image
            src={"/icons/right-arrow-tailless.svg"}
            width={10}
            height={10}
          />
        </button>
      </div>
    </div>
  );
}

export default TopSection;
