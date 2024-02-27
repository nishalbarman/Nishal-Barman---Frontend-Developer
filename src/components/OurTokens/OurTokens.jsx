"use client";

import Image from "next/image";
import SectionTitle from "../SectionTitle/SectionTitle";
import TokenItem from "./TokenItem";
import { useEffect, useState } from "react";
import axios from "axios";

function OurTokens() {
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
          <button
            onClick={() => {
              setPage((prev) => prev - 1);
            }}
            disabled={page <= 1}
            className="w-[100px] h-[36px] bg-[#FFFFFF] text-black font-inter font-medium text-[14px] rounded-[8px] disabled:cursor-not-allowed">
            Previous
          </button>
          <p className="text-[14px] font-inter font-medium text-[#FFFFFF]">
            Page {page} of {totalPage}
          </p>
          <button
            onClick={() => {
              setPage((prev) => prev + 1);
            }}
            disabled={page >= totalPage}
            className="w-[100px] h-[36px] bg-[#FFFFFF] text-black font-inter font-medium text-[14px] rounded-[8px] disabled:cursor-not-allowed">
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default OurTokens;
