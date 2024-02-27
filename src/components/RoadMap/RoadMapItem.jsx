import React from "react";

const parseItem = (number) => {
  if (number.toString().length === 1) {
    return `0${number}`;
  }
};

function RoadMapItem({ title, description, year, index }) {
  return (
    <div className="snap-start h-fit max-[597px]:w-[100%] w-[399px] flex flex-col items-center">
      <span
        style={{
          WebkitTextStroke: "6px #FEE167",
        }}
        className="text-[200px] transfrom translate-y-[6.8rem] font-kanit font-bold text-[#FECC00] h-fit">
        {parseItem(index)}
      </span>

      <div className="relative flex flex-col items-center w-[399px] p-[24px] bg-[#151821] rounded-[20px]">
        <div className="absolute top-[-20px] bg-[url('/assets/sticker.svg')] min-w-[196px] min-h-[61px] bg-no-repeat flex justify-center items-center">
          <p className="text-[20px] text-black font-bold font-kanit">
            PHASE-{index}
          </p>
        </div>

        <div className="bg-[#0D0E11] shadow-[0px_0px_30px_-13px__#9E9FA0] w-[100%] rounded-[16px] border-[3px] border-[#6A5D18] p-[30px_24px_24px]">
          <p className="font-inter font-bold text-[24px] text-center">
            {title}
          </p>
          <p className="font-inter font-semibold text-[24px] text-center text-[#9E9FA0] mt-[0.2rem]">
            {year}
          </p>
          <p className="font-inter text-[16px] text-center text-[#CFCFCF] mt-[1rem]">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default RoadMapItem;
