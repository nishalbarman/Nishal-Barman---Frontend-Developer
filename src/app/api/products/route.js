export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";
import { connect } from "@/dbConfig/dbConfig";
import { ProductModel } from "@/model/mongooseModels";

connect();

export async function GET(req) {
  try {
    const searchParams = req.nextUrl.searchParams;
    let page = searchParams.get("page") || 1;
    let limit = searchParams.get("limit") || 6;

    const skip = (page - 1) * limit;
    const total =
      Math.ceil((await ProductModel.countDocuments({})) / limit) || 0;
    const productData =
      (await ProductModel.find({}).skip(skip).limit(limit)) || [];
    return NextResponse.json({
      totalPages: total,
      productData: productData,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Internal server error" });
  }
}
