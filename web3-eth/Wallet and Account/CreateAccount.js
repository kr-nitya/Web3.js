const Web3 = require("web3");
const web3 = new Web3('HTTP://127.0.0.1:7545');
const account = web3.eth.accounts.create();
console.log(account);
