const Web3 = require("web3");
const web3 = new Web3(
  "https://eth-mainnet.alchemyapi.io/v2/MSNZLs5d-FRkHur6uHS8ljH03aGFVSNY"
);
web3.eth.getBlockNumber().then(console.log);
//web3.eth.getBlock('latest').then(console.log);
web3.eth.getBlock("latest").then((block) => {
  console.log("Block Hash Value = ", block.hash);
  console.log("Block Number = ", block.number);
});
web3.eth.getBlockTransactionCount("latest").then(console.log);
