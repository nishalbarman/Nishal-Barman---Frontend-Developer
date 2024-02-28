"use client";

import SectionTitle from "../SectionTitle/SectionTitle";
import ProductItem from "./ProductItem";
import { useContext, useEffect, useRef, useState } from "react";
import { animationContext } from "@/contexts/AnimationContext";
import { isElementInViewport } from "@/helper/utils";
import Image from "next/image";
import axios from "axios";

function OurProduct() {
  const [isShowAnimation, setIsShowanimation] = useState(false);

  const [productItem, setProductItem] = useState([]);
  // const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);

  const getProductData = async (page) => {
    try {
      const response = await axios.get(`/api/products?page=${page}&limit=6`);
      setTotalPage(response.data.totalPages);
      setProductItem(response.data.productData);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getProductData(1);
  }, []);

  // animation logic

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
      id="products"
      className={`max-[1440px]:custom-zoom p-[0px_2%] relative h-fit w-[100%] flex flex-col items-center opacity-0`}
      style={
        isShowAnimation
          ? {
              animation:
                "text-bottom-to-top 2s ease-in-out 0s 1 normal forwards",
            }
          : {}
      }>
      <div className="relative flex flex-col items-center w-fit h-fit">
        <SectionTitle title={"Our-Products"} />
        <p className="font-inter text-[20px] text-center mb-[3.5rem]">
          Pellentesque habitant morbi tristique senectus et netus et
          Pellentesque habitant morbi.
        </p>
        {productItem?.length > 0 ? (
          <div className="grid max-[500px]:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center items-center gap-[48px] w-fit">
            {productItem?.map((item, index) => {
              return <ProductItem key={index} {...item} />;
            })}
          </div>
        ) : (
          <Image
            className="mt-[3.4rem]"
            src="/assets/loading-2.gif"
            width={50}
            height={50}
            alt="loading gif"
          />
        )}
      </div>
    </div>
  );
}

export default OurProduct;
