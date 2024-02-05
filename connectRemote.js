//Remote Node Provider
var Web3 = require("web3");
var web3 = new Web3(
  "https://eth-mainnet.alchemyapi.io/v2/MSNZLs5d-FRkHur6uHS8ljH03aGFVSNY"
);
web3.eth.net.isListening()
  .then(() => console.log('Connected to Ethereum node'))
  .catch(error => console.error('Error connecting to Ethereum node:', error));
console.log("Web3 Provider = ", web3.providers);
console.log("Web3 given provider = ", web3.eth.givenProvider);
console.log("Web3 Current Provider = ", web3.eth.currentProvider);
const address = "0x00000000219ab540356cBB839Cbe05303d7705Fa";
web3.eth.getBalance(address, (err, wei) => {
    balance = web3.utils.fromWei(wei, 'ether');
    console.log("Balance = ",balance);
  });

//---------Infura-----------
// const Web3 = require('web3');
// const rpcURL = "https://mainnet.infura.io/035d3dcfa0d94a3c9a1f9f44e4bb8fef";
// const web3 = new Web3(rpcURL);
