import Image from "next/image";
import React from "react";

function SectionTitle({ title, textColor, align, animation = undefined }) {
  const splitedTitle = title.split("-");
  console.log(textColor ? "true" : "false", align);
  return (
    <div
      style={
        !!animation
          ? {
              animation: animation,
            }
          : {}
      }
      className={`${!!animation && "opacity-0"} flex justify-${
        align || "center"
      } mb-8`}>
      <p className="relative font-kanit font-semibold text-[56px] font-kanit">
        {splitedTitle[0] || ""}
        <span
          className={`z-[1] font-kanit font-semibold text-[56px] text-[${
            textColor || "#FECC00"
          }]`}>
          {" "}
          {splitedTitle[1]}
        </span>
        <Image
          style={{
            animation: "width-fill 2s ease-in-out 0s 1 normal forwards",
          }}
          className="inline-block absolute right-[-10px] bottom-[-5px] w-[186px] select-none"
          src={`${
            textColor === "black"
              ? "/assets/bottom-curve-line-black.svg"
              : "/assets/bottom-curve-line-yellow.svg"
          }`}
          width={240}
          height={240}
        />
      </p>
    </div>
  );
}

export default SectionTitle;
