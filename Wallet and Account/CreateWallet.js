const Web3 = require("web3");
const web3 = new Web3('HTTP://127.0.0.1:7545');
// 1st - creating a new empty wallet (0 accounts inside)
const wallet = web3.eth.accounts.wallet.create();
console.log("Wallet = ",wallet);
// 2nd - create an account
const account = web3.eth.accounts.create();
console.log("Account = ",account);
// 3rd - add the account to the wallet
web3.eth.accounts.wallet.add(account);
console.log("Wallet with one account = ",wallet);
