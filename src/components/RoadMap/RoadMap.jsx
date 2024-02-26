import Image from "next/image";
import SectionTitle from "../SectionTitle/SectionTitle";
import RoadMapItem from "./RoadMapItem";

function RoadMap() {
  const productItem = [
    {
      title: "Initial Design and Development",
      description:
        "Pellentesque habitant morbi tristique senectus et netus et malesuada Pellentesque habitant morbi tristique senectus et netus et malesuada",
      qYear: "Q4 2023",
    },
    {
      title: "Initial Design and Development",
      description:
        "Pellentesque habitant morbi tristique senectus et netus et malesuada Pellentesque habitant morbi tristique senectus et netus et malesuada",
      qYear: "Q4 2023",
    },
    {
      title: "Initial Design and Development",
      description:
        "Pellentesque habitant morbi tristique senectus et netus et malesuada Pellentesque habitant morbi tristique senectus et netus et malesuada",
      qYear: "Q4 2023",
    },
    {
      title: "Initial Design and Development",
      description:
        "Pellentesque habitant morbi tristique senectus et netus et malesuada Pellentesque habitant morbi tristique senectus et netus et malesuada",
      qYear: "Q4 2023",
    },
    {
      title: "Initial Design and Development",
      description:
        "Pellentesque habitant morbi tristique senectus et netus et malesuada Pellentesque habitant morbi tristique senectus et netus et malesuada",
      qYear: "Q4 2023",
    },
    {
      title: "Initial Design and Development",
      description:
        "Pellentesque habitant morbi tristique senectus et netus et malesuada Pellentesque habitant morbi tristique senectus et netus et malesuada",
      qYear: "Q4 2023",
    },
  ];

  return (
    <div className="w-[100%] flex flex-col items-center mt-[8.5rem]">
      <div className="bg-[#fecc00] min-h-[500px] w-[100%] p-[4%_13%]">
        <div className={`flex justify-left} mb-8`}>
          <p className="relative font-kanit font-semibold text-[56px] font-kanit">
            <span
              className={`z-[1] font-kanit font-semibold text-[56px] text-[black]`}>
              {" "}
              RoadMap
            </span>
            <Image
              className="inline-block absolute right-[-10px] bottom-[-5px] w-[186px] select-none"
              src={"/assets/bottom-curve-line-black.svg"}
              width={240}
              height={240}
            />
          </p>
        </div>
      </div>

      <div className="z-[999] mt-[-345px] flex flex-col items-center w-[100%] p-[0_13%]">
        <div
          style={{
            display: "flex",
            overflowX: "auto",
            scrollSnapType: "x mandatory",
            webkitOverflowScrolling: "touch",
          }}
          className="z-[999] flex gap-4 overflow-x-auto  items-center w-[100%] p-[2rem_0px]">
          {productItem?.map((item, index) => {
            return <RoadMapItem key={index} index={index + 1} {...item} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default RoadMap;
