import { defaultWagmiConfig } from "@web3modal/wagmi/react/config";

import { cookieStorage, createStorage } from "wagmi";
import { mainnet, sepolia } from "wagmi/chains";

// Get projectId at https://cloud.walletconnect.com
export const projectId = "1c94c3fe3352bd6a28bb1ac0f70078e9";

if (!projectId) throw new Error("Project ID is not defined");

const metadata = {
  name: "Web3Modal",
  description: "Web3Modal Example",
  url: "https://web3modal.com", // origin must match your domain & subdomain
  icons: ["https://avatars.githubusercontent.com/u/37784886"],
};

// Create wagmiConfig
export const config = defaultWagmiConfig({
  chains: [mainnet, sepolia], // required
  projectId, // required
  metadata, // required
  ssr: true,
  storage: createStorage({
    storage: cookieStorage,
  }),
  enableWalletConnect: true, // Optional - true by default
  enableInjected: false, // Optional - true by default
  enableEIP6963: true, // Optional - true by default
  enableCoinbase: true, // Optional - true by default
});
