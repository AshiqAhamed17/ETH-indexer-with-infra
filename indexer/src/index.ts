// Creating a ETH indexer
import { JsonRpcProvider } from "ethers";

let CURRENT_BLOCK_NUMBER = 21695414;

const provider = new JsonRpcProvider("https://eth-mainnet.g.alchemy.com/v2/K-dyWLoE75nGD_Z3Cv2Bg0tvUY67mYUw");

async function main() {


  const interestedAddress = [
    "0xb73664d81129150964b07c6447b2949cf5f11619",
    "0x1835eeAf0Ae80d879dCba77A5240D9EB8524B003",
    "0x33068Aae727976363d20eF7880a954e55e01C4Fe",
  ];

  const block = await provider.getBlock(CURRENT_BLOCK_NUMBER, true);
  console.log(block);

}

main();
