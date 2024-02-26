"use client";

import Image from "next/image";
import SectionTitle from "../SectionTitle/SectionTitle";
import TokenItem from "./TokenItem";
import { useEffect, useState } from "react";

const demoTokenData = [
  {
    title: "Bitcoun",
    symbol: "BTC",
    decimals: "18",
    marketCap: "$100000",
    chain: "Bitcoin",
  },
  {
    title: "Bitcoun",
    symbol: "BTC",
    decimals: "18",
    marketCap: "$100000",
    chain: "Bitcoin",
  },
  {
    title: "Bitcoun",
    symbol: "BTC",
    decimals: "18",
    marketCap: "$100000",
    chain: "Bitcoin",
  },
  {
    title: "Bitcoun",
    symbol: "BTC",
    decimals: "18",
    marketCap: "$100000",
    chain: "Bitcoin",
  },
  {
    title: "Bitcoun",
    symbol: "BTC",
    decimals: "18",
    marketCap: "$100000",
    chain: "Bitcoin",
  },
  {
    title: "Bitcoun",
    symbol: "BTC",
    decimals: "18",
    marketCap: "$100000",
    chain: "Bitcoin",
  },
  {
    title: "Bitcoun",
    symbol: "BTC",
    decimals: "18",
    marketCap: "$100000",
    chain: "Bitcoin",
  },
  {
    title: "Bitcoun",
    symbol: "BTC",
    decimals: "18",
    marketCap: "$100000",
    chain: "Bitcoin",
  },
];

function OurTokens() {
  const [tokenData, setTokenData] = useState(demoTokenData);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);

  const getTokenData = async () => {
    try {
      const response = await axios.get(`/api/v1/tokens?page=${page}&limit=6`);
      setTokenData(response.data.tokenData);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getTokenData();
  }, []);

  return (
    <div className="relative h-fit w-[100%] flex flex-col items-center mt-[8.5rem]">
      <Image
        className="absolute left-[-500px] top-[-70px]"
        src={"/assets/large-round-circle.svg"}
        width={1570}
        height={1570}
      />

      <Image
        className="absolute left-[-50px] bottom-[0]"
        src={"/assets/piramid.svg"}
        width={220}
        height={220}
      />

      <div className="relative flex flex-col items-center w-fit h-fit">
        <SectionTitle title={"Our-Tokens"} />
        <p className="font-inter text-[20px] text-center">
          Pellentesque habitant morbi tristique senectus et netus et
          Pellentesque habitant morbi.
        </p>
        <div className="grid max-sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center items-center mt-[60px] gap-[48px] w-fit">
          {tokenData?.map((item, index) => {
            return <TokenItem key={index} {...item} />;
          })}
        </div>
        <div className="flex justify-evenly items-center gap-10 mt-[60px]">
          <button className="w-[100px] h-[36px] bg-[#FFFFFF] text-black font-inter font-medium text-[14px] rounded-[8px]">
            Previous
          </button>
          <p className="text-[14px] font-inter font-medium text-[#FFFFFF]">
            Page 1 of 10
          </p>
          <button className="w-[100px] h-[36px] bg-[#FFFFFF] text-black font-inter font-medium text-[14px] rounded-[8px]">
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default OurTokens;
