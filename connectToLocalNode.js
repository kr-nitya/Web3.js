// IPC Provider:
// Inter-Process Communication (IPC) providers are used to connect to a locally running Ethereum node on the same machine. IPC allows communication between processes.
var Web3 = require("web3");
var net = require("net");
var web3 = new Web3(
  new Web3.providers.IpcProvider(
    "/home/nitya/snap/geth/477/.ethereum/geth.ipc",
    net
  )
);
web3.eth
  .getBlockNumber()
  .then((blockNumber) => {
    console.log("Latest Block Number:", blockNumber);
  })
  .catch((error) => {
    console.error("Error fetching block number:", error);
  });
console.log("Web3 Provider = ", web3.providers);
console.log("Web3 given provider = ", web3.eth.givenProvider);
console.log("Web3 Current Provider = ", web3.eth.currentProvider);
console.log("Default Account = ",web3.eth.defaultAccount);
console.log("Default Block = ",web3.eth.defaultBlock);
console.log("Default HardFork = ",web3.eth.defaultHardfork);
console.log("Default Chain = ",web3.eth.defaultChain);
console.log("Default Comman = ",web3.eth.defaultCommon);
console.log("web3.eth.transactionBlockTimeout=",web3.eth.transactionBlockTimeout);
console.log("blockHeaderTimeout = ",web3.eth.blockHeaderTimeout);
console.log("web3.eth.handlRevert = ",web3.eth.handlRevert);
web3.eth.getProtocolVersion()
.then(console.log);
web3.eth.isSyncing()
.then(console.log);
web3.eth.getAccounts()
.then(console.log);
web3.eth.getBlockNumber()
.then(console.log);
web3.eth.getBalance("0x00000000219ab540356cBB839Cbe05303d7705Fa")
.then(console.log);
web3.eth.getBlock(3150)
.then(console.log);
