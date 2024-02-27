export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";

const demoData = [
  {
    img: "/icons/bitcoin.svg",
    img: "/icons/bitcoin.svg",
    tokenName: "AlphaToken",
    symbol: "ALP",
    decimals: 18,
    marketcap: "1000000",
    chain: "Ethereum",
  },
  {
    img: "/icons/bitcoin.svg",
    tokenName: "Bitcoin",
    symbol: "BTC",
    decimals: "18",
    marketcap: "100000",
    chain: "Bitcoin",
  },
  {
    img: "/icons/bitcoin.svg",
    tokenName: "Bitcoin",
    symbol: "BTC",
    decimals: "18",
    marketcap: "100000",
    chain: "Bitcoin",
  },
  {
    img: "/icons/bitcoin.svg",
    tokenName: "Bitcoin",
    symbol: "BTC",
    decimals: "18",
    marketcap: "100000",
    chain: "Bitcoin",
  },
  {
    img: "/icons/bitcoin.svg",
    tokenName: "Bitcoin",
    symbol: "BTC",
    decimals: "18",
    marketcap: "100000",
    chain: "Bitcoin",
  },
  {
    img: "/icons/bitcoin.svg",
    tokenName: "Bitcoin",
    symbol: "BTC",
    decimals: "18",
    marketcap: "100000",
    chain: "Bitcoin",
  },
  {
    img: "/icons/bitcoin.svg",
    tokenName: "Bitcoin",
    symbol: "BTC",
    decimals: "18",
    marketcap: "100000",
    chain: "Bitcoin",
  },
  {
    img: "/icons/bitcoin.svg",
    tokenName: "Bitcoin",
    symbol: "BTC",
    decimals: "18",
    marketcap: "100000",
    chain: "Bitcoin",
  },
];

export function GET(req) {
  try {
    const searchParams = req.nextUrl.searchParams;
    console.log(searchParams);
    let page = searchParams.get("page") || 1;
    let limit = searchParams.get("limit") || 6;

    if (limit > roadMapDemoItems.length) limit = roadMapDemoItems.length;

    const total = Math.round(demoData.length % limit);
    const tokenData = demoData.slice(page - 1, limit);

    return NextResponse.json({
      totalPages: total,
      tokenData: tokenData,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Internal server error" });
  }
}
