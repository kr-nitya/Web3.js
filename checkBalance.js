const Web3 = require("web3");
const rpcURL = "https://eth-mainnet.alchemyapi.io/v2/MSNZLs5d-FRkHur6uHS8ljH03aGFVSNY";
const web3 = new Web3(rpcURL);
const address = "0x6e6e15A67380c8360FCC688428BEd357A9f0f702";

// Check Connection to Ethereum Node
web3.eth.net
  .isListening()
  .then(() => console.log("Connected to Ethereum node"))
  .catch((error) => console.error("Error connecting to Ethereum node:", error));

// Get Balance of Ethereum Address
web3.eth.getBalance(address, (err, wei) => {
  if (err) {
    console.error("Error getting balance:", err);
    return;
  }

  // Convert balance from wei to ether
  const balanceInEther = web3.utils.fromWei(wei.toString(), "ether");

  console.log("Balance in Wei =", wei.toString());
  console.log("Balance in Ether =", balanceInEther);
});
