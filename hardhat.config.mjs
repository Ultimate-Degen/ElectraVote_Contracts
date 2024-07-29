// hardhat.config.mjs
import { config as dotenvConfig } from "dotenv";
import "@nomicfoundation/hardhat-toolbox";

dotenvConfig();

export default {
  solidity: "0.8.26",
  networks: {
    scroll: {
      url: `https://rpc.scroll.io`, 
      accounts: [process.env.PRIVATE_KEY]
    }
  }
};

