export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";
import { connect } from "@/dbConfig/dbConfig";
import { TokenModel } from "@/model/mongooseModels";

// const demoData = [
//   {
//     img: "/icons/bitcoin.svg",
//     img: "/icons/bitcoin.svg",
//     tokenName: "AlphaToken",
//     symbol: "ALP",
//     decimals: 18,
//     marketcap: "1000000",
//     chain: "Ethereum",
//   },
//   {
//     img: "/icons/bitcoin.svg",
//     tokenName: "Bitcoin1",
//     symbol: "BTC",
//     decimals: "18",
//     marketcap: "100000",
//     chain: "Bitcoin",
//   },
//   {
//     img: "/icons/bitcoin.svg",
//     tokenName: "Bitcoin2",
//     symbol: "BTC",
//     decimals: "18",
//     marketcap: "100000",
//     chain: "Bitcoin",
//   },
//   {
//     img: "/icons/bitcoin.svg",
//     tokenName: "Bitcoin3",
//     symbol: "BTC",
//     decimals: "18",
//     marketcap: "100000",
//     chain: "Bitcoin",
//   },
//   {
//     img: "/icons/bitcoin.svg",
//     tokenName: "Bitcoin4",
//     symbol: "BTC",
//     decimals: "18",
//     marketcap: "100000",
//     chain: "Bitcoin",
//   },
//   {
//     img: "/icons/bitcoin.svg",
//     tokenName: "Bitcoin5",
//     symbol: "BTC",
//     decimals: "18",
//     marketcap: "100000",
//     chain: "Bitcoin",
//   },
//   {
//     img: "/icons/bitcoin.svg",
//     tokenName: "Bitcoin6",
//     symbol: "BTC",
//     decimals: "18",
//     marketcap: "100000",
//     chain: "Bitcoin",
//   },
//   {
//     img: "/icons/bitcoin.svg",
//     tokenName: "Bitcoin7",
//     symbol: "BTC",
//     decimals: "18",
//     marketcap: "100000",
//     chain: "Bitcoin",
//   },
// ];

connect();

export async function GET(req) {
  try {
    const searchParams = req.nextUrl.searchParams;
    let page = searchParams.get("page") || 1;
    let limit = searchParams.get("limit") || 6;

    /***                FOR HARDCODED TEST DATA             ****/
    /***/ // if (limit > demoData.length) limit = demoData.length; /***/
    /***/ // const total = Math.ceil(demoData.length / limit); /***/
    /***/ // const tokenData = demoData.slice(page - 1, limit); /***/
    /***               FOR HARDCODED TEST DATA              ****/

    const skip = (page - 1) * limit;
    const total = Math.ceil((await TokenModel.countDocuments({})) / limit) || 0;
    const tokenData = (await TokenModel.find({}).skip(skip).limit(limit)) || [];

    return NextResponse.json({
      totalPages: total,
      tokenData: tokenData,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Internal server error" });
  }
}
