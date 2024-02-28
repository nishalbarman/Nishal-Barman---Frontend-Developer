"use client";

import SectionTitle from "../SectionTitle/SectionTitle";
import TokenItem from "./TokenItem";
import { useContext, useEffect, useRef, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { animationContext } from "@/contexts/AnimationContext";
import { isElementInViewport } from "@/helper/utils";

function OurTokens() {
  const navigation = useRouter();

  const [tokenData, setTokenData] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);

  const getTokenData = async () => {
    try {
      const response = await axios.get(`/api/tokens?page=${page}&limit=6`);
      setTotalPage(response.data.totalPages);
      setTokenData(response.data.tokenData);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getTokenData();
  }, [page]);

  // animation logic
  const [isShowAnimation, setIsShowanimation] = useState(false);

  const { scrolling } = useContext(animationContext);

  console.log(scrolling);

  const productRef = useRef(null);

  useEffect(() => {
    console.log(productRef?.current);
    if (isShowAnimation === false) {
      setIsShowanimation(isElementInViewport(productRef.current));
    }
  }, [scrolling]);

  return (
    <div
      ref={productRef}
      id="tokens"
      className={`max-[1440px]:custom-zoom p-[0px_2%] relative h-fit w-[100%] flex flex-col items-center overflow-hidden ${
        isShowAnimation ? "opacity-1" : "opacity-0"
      }`}>
      <div className="relative flex flex-col items-center w-fit h-fit">
        <SectionTitle
          title={"Our-Tokens"}
          animation={
            isShowAnimation
              ? "zoom-in 3s ease-in-out 0s 1 normal forwards"
              : undefined
          }
        />
        <p className="font-inter text-[20px] text-center">
          Pellentesque habitant morbi tristique senectus et netus et
          Pellentesque habitant morbi.
        </p>
        <div
          className="grid max-[500px]:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center items-center mt-[60px] gap-[48px] w-[100%] opacity-0"
          style={
            isShowAnimation
              ? {
                  animation:
                    "text-bottom-to-top 2s ease-in-out 0s 1 normal forwards",
                }
              : {}
          }>
          {tokenData?.map((item, index) => {
            return <TokenItem key={index} {...item} />;
          })}
        </div>
        <div className="flex justify-evenly items-center gap-10 mt-[9%]">
          <button
            onClick={() => {
              setPage((prev) => prev - 1);
              navigation.push("/#tokens");
            }}
            disabled={page <= 1}
            className="w-[100px] h-[36px] bg-[#FFFFFF] text-black font-inter font-medium text-[14px] rounded-[8px] disabled:cursor-not-allowed disabled:bg-[gray]">
            Previous
          </button>
          <p className="text-[14px] font-inter font-medium text-[#FFFFFF]">
            Page {page} of {totalPage}
          </p>
          <button
            onClick={() => {
              setPage((prev) => prev + 1);
              navigation.push("/#tokens");
            }}
            disabled={page >= totalPage}
            className="w-[100px] h-[36px] bg-[#FFFFFF] text-black font-inter font-medium text-[14px] rounded-[8px] disabled:cursor-not-allowed disabled:bg-[gray]">
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default OurTokens;
