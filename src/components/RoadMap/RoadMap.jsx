import Image from "next/image";
import RoadMapItem from "./RoadMapItem";
import axios from "axios";
import GapFiller from "./GapFiller";
import GapStart from "./GapStart";
import GapEnd from "./GapEnd";

const getRoadMapData = async (page = 1, limit = 100) => {
  try {
    // server component, thats why we need to give the proper domain name
    const { data } = await axios.get(
      `http://localhost:3000/api/roadmaps?page=${page}&limit=${limit}`
    );
    console.log(data);
    return data;
  } catch (error) {
    console.log("RoadMap Component Error----------------->", error);
    return { total: 0, roadmapData: [] };
  }
};

async function RoadMap() {
  const { total, roadmapData } = await getRoadMapData(1, 50);
  return (
    <div
      id="roadmap"
      className="w-[100%] flex flex-col items-center mt-[8.5rem] overflow-x-hidden">
      <div className="bg-[#fecc00] min-h-[500px] w-[100%] p-[4%_13%]">
        <div className={`flex justify-left} mb-8`}>
          <p
            style={{
              animation:
                "roadmap-right-to-left 3s ease-in-out 1s 1 normal forwards",
            }}
            className="relative font-kanit font-semibold text-[56px] font-kanit">
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

      <div
        style={{
          animation:
            "roadmap-right-to-left 2s ease-in-out 0s 1 normal forwards",
        }}
        className="z-[999] mt-[-373px] flex flex-col items-center w-[100%] p-[0_13%] max-[597px]:p-[0_1%] overflow-x-auto">
        <div className="z-[999] flex snap-x snap-mandatory overflow-x-auto  items-center w-[100%] p-[2rem_0px] max-[597px]:gap-10">
          <GapStart />
          {roadmapData?.map((item, index, array) => {
            return (
              <>
                <RoadMapItem key={index} index={index + 1} {...item} />
                {index !== array.length - 1 && (
                  <GapFiller key={index + index} />
                )}
              </>
            );
          })}
          <GapEnd />
        </div>
      </div>
    </div>
  );
}

export default RoadMap;
