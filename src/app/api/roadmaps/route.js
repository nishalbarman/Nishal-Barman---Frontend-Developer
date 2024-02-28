export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";
import { connect } from "@/dbConfig/dbConfig";
import { RoadmapModel } from "@/model/mongooseModels";

// const roadMapDemoItems = [
//   {
//     title: "Initial Design and Development",
//     description:
//       "Pellentesque habitant morbi tristique senectus et netus et malesuada Pellentesque habitant morbi tristique senectus et netus et malesuada",
//     qYear: "Q4 2023",
//   },
//   {
//     title: "Initial Design and Development",
//     description:
//       "Pellentesque habitant morbi tristique senectus et netus et malesuada Pellentesque habitant morbi tristique senectus et netus et malesuada",
//     qYear: "Q4 2023",
//   },
//   {
//     title: "Initial Design and Development",
//     description:
//       "Pellentesque habitant morbi tristique senectus et netus et malesuada Pellentesque habitant morbi tristique senectus et netus et malesuada",
//     qYear: "Q4 2023",
//   },
//   {
//     title: "Initial Design and Development",
//     description:
//       "Pellentesque habitant morbi tristique senectus et netus et malesuada Pellentesque habitant morbi tristique senectus et netus et malesuada",
//     qYear: "Q4 2023",
//   },
//   {
//     title: "Initial Design and Development",
//     description:
//       "Pellentesque habitant morbi tristique senectus et netus et malesuada Pellentesque habitant morbi tristique senectus et netus et malesuada",
//     qYear: "Q4 2023",
//   },
//   {
//     title: "Initial Design and Development",
//     description:
//       "Pellentesque habitant morbi tristique senectus et netus et malesuada Pellentesque habitant morbi tristique senectus et netus et malesuada",
//     qYear: "Q4 2023",
//   },
// ];

connect();

export async function GET(req) {
  try {
    const searchParams = req.nextUrl.searchParams;
    console.log(searchParams);
    let page = searchParams.get("page") || 1;
    let limit = searchParams.get("limit") || 6;

    const skip = (page - 1) * limit;
    const total =
      Math.ceil((await RoadmapModel.countDocuments({})) / limit) || 0;
    const roadmapData =
      (await RoadmapModel.find({}).skip(skip).limit(limit)) || [];

    return NextResponse.json({
      totalPages: total,
      roadmapData: roadmapData,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Internal server error" });
  }
}
