//Remote Node Provider
var Web3 = require("web3");
require('dotenv').config();
const ALCHEMY_API = process.env.ALCHEMY_API;

var web3 = new Web3(
  `https://eth-mainnet.alchemyapi.io/v2/${ALCHEMY_API}`
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

