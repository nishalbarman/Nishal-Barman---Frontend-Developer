"use client";

import Image from "next/image";
import RoadMapItem from "./RoadMapItem";
import axios from "axios";
import GapFiller from "./GapFiller";
import GapStart from "./GapStart";
import GapEnd from "./GapEnd";
import { useContext, useEffect, useRef, useState } from "react";
import { animationContext } from "@/contexts/AnimationContext";
import { isElementInViewport } from "@/helper/utils";

function RoadMap() {
  const [total, setTotal] = useState(0);
  const [roadmapData, setRoadmapData] = useState([]);

  const getRoadMapData = async (page = 1, limit = 100) => {
    try {
      const { data } = await axios.get(
        `/api/roadmaps?page=${page}&limit=${limit}`
      );
      setTotal(data.totalPages);
      setRoadmapData(data.roadmapData);
    } catch (error) {
      console.log("RoadMap Componen ------>", error);
    }
  };

  useEffect(() => {
    getRoadMapData(1, 50);
  }, []);

  // animation logic
  const [isShowAnimation, setIsShowanimation] = useState(false);

  const { scrolling } = useContext(animationContext);

  const productRef = useRef(null);

  useEffect(() => {
    if (isShowAnimation === false) {
      setIsShowanimation(isElementInViewport(productRef.current));
    }
  }, [scrolling]);

  return (
    <div
      ref={productRef}
      id="roadmap"
      className={`w-[100%] bg-[#fecc00] flex flex-col items-center p-[0_13%] max-[597px]:p-[0_10px] bg-split-div ${
        isShowAnimation ? "opacity-1" : "opacity-0"
      }`}>
      <div className="max-[590px]:translate-y-[2rem] translate-y-[5rem] w-[100%]">
        <div
          style={
            isShowAnimation
              ? {
                  animation:
                    "roadmap-right-to-left 2s ease-in-out 0s 1 normal forwards",
                }
              : {}
          }
          className="flex w-fit flex-col justify-left opacity-0">
          <span className="font-kanit font-semibold text-[56px] text-[black]">
            RoadMap
          </span>
          <Image
            className="w-[150px] self-end"
            src={"/assets/bottom-curve-line-black.svg"}
            width={240}
            height={240}
            alt="curve"
          />
        </div>
      </div>

      {roadmapData?.length > 0 ? (
        <div
          className={`flex snap-x snap-mandatory overflow-x-scroll items-center w-[100%] max-[597px]:gap-10 p-[0_0_5%] overflow-y-hidden ${
            isShowAnimation ? "opacity-1" : "opacity-0"
          }`}
          style={
            isShowAnimation
              ? {
                  animation:
                    "roadmap-right-to-left 2s ease-in-out 0s 1 normal forwards",
                }
              : {}
          }>
          <GapStart />
          {roadmapData?.map((item, index, array) => {
            return (
              <>
                <RoadMapItem key={item._id} index={index + 1} {...item} />
                {index !== array.length - 1 && <GapFiller key={index} />}
              </>
            );
          })}
          <GapEnd />
        </div>
      ) : (
        <Image
          className="mt-[10rem]"
          src="/assets/loading-2.gif"
          width={50}
          height={50}
          alt="loading gif"
        />
      )}
    </div>
  );
}

export default RoadMap;
