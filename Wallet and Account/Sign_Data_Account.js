const Web3 = require("web3");
const Accounts = require("web3-eth-accounts"); 
const web3 = new Web3('HTTP://127.0.0.1:7545');
const accounts = new Accounts(); 
const account = accounts.create();
const signedMessage = account.sign('hello world');
console.log(signedMessage);
