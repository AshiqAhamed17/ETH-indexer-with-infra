"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
// Creating a ETH indexer
const ethers_1 = require("ethers");
let CURRENT_BLOCK_NUMBER = 21695414;
const provider = new ethers_1.JsonRpcProvider("https://eth-mainnet.g.alchemy.com/v2/K-dyWLoE75nGD_Z3Cv2Bg0tvUY67mYUw");
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const interestedAddress = [
            "0xb73664d81129150964b07c6447b2949cf5f11619",
            "0x1835eeAf0Ae80d879dCba77A5240D9EB8524B003",
            "0x33068Aae727976363d20eF7880a954e55e01C4Fe",
        ];
        const block = yield provider.getBlock(CURRENT_BLOCK_NUMBER, true);
        console.log(block === null || block === void 0 ? void 0 : block.number);
    });
}
main();
