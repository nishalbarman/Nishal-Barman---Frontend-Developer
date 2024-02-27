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
      style={{
        animation: "text-bottom-to-top 2s ease-in-out 0s 1 normal forwards",
      }}
      id="products"
      className="max-[1366px]:custom-zoom p-[0px_5px] opacity-0 relative h-fit w-[100%] flex flex-col items-center mt-[8.5rem]">
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

      <Image
        className="absolute right-0 top-[260px]"
        src={"/assets/large-round-product-right-side.png"}
        width={1616}
        height={1616}
      />

      <div className="relative flex flex-col items-center w-fit h-fit">
        <SectionTitle title={"Our-Products"} />
        <p className="font-inter text-[20px] text-center">
          Pellentesque habitant morbi tristique senectus et netus et
          Pellentesque habitant morbi.
        </p>
        <div className="grid max-sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center items-center mt-[60px] gap-[48px] w-fit">
          {productItem?.map((item, index) => {
            return <ProductItem key={index} {...item} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default OurProduct;
