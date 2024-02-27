"use client";

import React from "react";
import { useWeb3Modal } from "@web3modal/wagmi/react";

function WalletConnectButton() {
  const { open } = useWeb3Modal();
  return (
    <button
      onClick={() => {
        open();
      }}
      className="bg-[#F9D326] w-[187px] h-[55px] rounded-[10px] text-black font-bold">
      Conntect wallet
    </button>
  );
}

export default WalletConnectButton;
