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
      `https://nishal-barman-frontend-developer.vercel.app/api/roadmaps?page=${page}&limit=${limit}`
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
      className="w-[100%] bg-[#fecc00] flex flex-col items-center p-[0_13%] max-[597px]:p-[0_10px] bg-split-div">
      <div className="translate-y-[10rem] w-[100%] mt-[-5rem]">
        <div
          style={{
            animation:
              "roadmap-right-to-left 3s ease-in-out 1s 1 normal forwards",
          }}
          className="flex w-fit flex-col justify-left">
          <span className="font-kanit font-semibold text-[56px] text-[black]">
            RoadMap
          </span>
          <Image
            className="w-[150px] self-end"
            src={"/assets/bottom-curve-line-black.svg"}
            width={240}
            height={240}
          />
        </div>
      </div>

      <div
        className="flex snap-x snap-mandatory overflow-x-scroll items-center w-[100%] max-[597px]:gap-10 p-[5%_0]"
        style={{
          animation:
            "roadmap-right-to-left 2s ease-in-out 0s 1 normal forwards",
        }}>
        <GapStart />
        {roadmapData?.map((item, index, array) => {
          return (
            <>
              <RoadMapItem key={index} index={index + 1} {...item} />
              {index !== array.length - 1 && <GapFiller key={index + index} />}
            </>
          );
        })}
        <GapEnd />
      </div>
    </div>
  );
}

export default RoadMap;
