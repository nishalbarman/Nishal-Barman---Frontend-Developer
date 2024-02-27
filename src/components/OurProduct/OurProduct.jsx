import Image from "next/image";
import SectionTitle from "../SectionTitle/SectionTitle";
import ProductItem from "./ProductItem";

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

  return (
    <div
      id="products"
      className="max-[1440px]:custom-zoom p-[0px_2%] opacity-0 relative h-fit w-[100%] flex flex-col items-center"
      style={{
        animation: "text-bottom-to-top 2s ease-in-out 0s 1 normal forwards",
      }}>
      <div className="relative flex flex-col items-center w-fit h-fit">
        <SectionTitle title={"Our-Products"} />
        <p className="font-inter text-[20px] text-center mb-[3.5rem]">
          Pellentesque habitant morbi tristique senectus et netus et
          Pellentesque habitant morbi.
        </p>
        <div className="grid max-sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center items-center gap-[48px] w-fit">
          {productItem?.map((item, index) => {
            return <ProductItem key={index} {...item} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default OurProduct;
