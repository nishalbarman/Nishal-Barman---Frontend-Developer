"use client";

import SectionTitle from "../SectionTitle/SectionTitle";
import ProductItem from "./ProductItem";
import { useContext, useEffect, useRef, useState } from "react";
import { animationContext } from "@/contexts/AnimationContext";
import { isElementInViewport } from "@/helper/utils";
import Image from "next/image";

function OurProduct() {
  const productItem = [
    {
      imageUrl: "/products/cart.png",
      title: "Bita Marketplace",
      description:
        "Pellentesque habitant morbi tristique senectus et netus et malesuada Pellentesque habitant morbi tristique senectus et netus et malesuada ",
    },
    {
      imageUrl: "/products/bitadex.png",
      title: "Bitadex",
      description:
        "Pellentesque habitant morbi tristique senectus et netus et malesuada Pellentesque habitant morbi tristique senectus et netus et malesuada ",
    },
    {
      imageUrl: "/products/bitabridge.png",
      title: "Bitabridge",
      description:
        "Pellentesque habitant morbi tristique senectus et netus et malesuada Pellentesque habitant morbi tristique senectus et netus et malesuada ",
    },
    {
      imageUrl: "/products/bitapad.png",
      title: "Bitapad",
      description:
        "Pellentesque habitant morbi tristique senectus et netus et malesuada Pellentesque habitant morbi tristique senectus et netus et malesuada ",
    },
    {
      imageUrl: "/products/bitalend.png",
      title: "BitaLend",
      description:
        "Pellentesque habitant morbi tristique senectus et netus et malesuada Pellentesque habitant morbi tristique senectus et netus et malesuada ",
    },
  ];

  const [isShowAnimation, setIsShowanimation] = useState(false);

  const { scrolling } = useContext(animationContext);

  console.log(scrolling);

  const productRef = useRef(null);

  useEffect(() => {
    console.log(productRef?.current);
    if (isShowAnimation === false) {
      console.log("I am checking");
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
        {!!productItem && productItem?.length > 0 ? (
          <div className="grid max-[500px]:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center items-center gap-[48px] w-fit">
            {productItem?.map((item, index) => {
              return <ProductItem key={index} {...item} />;
            })}
          </div>
        ) : (
          <Image
            className="mt-[3.4rem]"
            src="/assets/loading.gif"
            width={100}
            height={100}
          />
        )}
      </div>
    </div>
  );
}

export default OurProduct;
