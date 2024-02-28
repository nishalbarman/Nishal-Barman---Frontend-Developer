export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";

const roadMapDemoItems = [
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

export function GET(req) {
  try {
    const searchParams = req.nextUrl.searchParams;
    console.log(searchParams);
    let page = searchParams.get("page") || 1;
    let limit = searchParams.get("limit") || 6;

    if (limit > roadMapDemoItems.length) limit = roadMapDemoItems.length;

    const total = Math.ceil(roadMapDemoItems.length / limit);
    const roadmapData = roadMapDemoItems.slice(page - 1, limit);

    return NextResponse.json({
      totalPages: total,
      roadmapData: roadmapData,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Internal server error" });
  }
}
