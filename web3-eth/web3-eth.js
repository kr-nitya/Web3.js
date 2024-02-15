// const Web3 = require("web3");
// const web3 = new Web3(new Web3.providers.HttpProvider("HTTP://127.0.0.1:7545"));
// web3.eth.getBlockNumber().then(console.log);


const Web3 = require('web3');
const fs = require('fs');
const path = require('path');

// Set up a connection to the Ethereum network
const web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:7545'));
web3.eth.Contract.handleRevert = true;

async function interact() {
  // Fetch all the available accounts
  const accounts = await web3.eth.getAccounts();
  console.log("All Accounts  = ");
  
  console.log(accounts);

  let balance1, balance2;
  // The initial balances of the accounts should be 100 Eth (10^18 wei)
  balance1 = await web3.eth.getBalance(accounts[0]);
  balance2 = await web3.eth.getBalance(accounts[1]);
    console.log("Balacnce of two accounts ");
    
  console.log(balance1, balance2);

  // Create a transaction sending 1 Ether from account 0 to account 1
  const transaction = {
    from: accounts[0],
    to: accounts[1],
    // Value should be passed in wei. For easier use and to avoid mistakes,
    // we utilize the auxiliary `toWei` function:
    value: web3.utils.toWei('1', 'ether'),
  };

  // Send the actual transaction
  const transactionHash = await web3.eth.sendTransaction(transaction);
  console.log('transactionHash', transactionHash);

  balance1 = await web3.eth.getBalance(accounts[0]);
  balance2 = await web3.eth.getBalance(accounts[1]);
  console.log("After Transaction Account balance = ");
  
  // See the updated balances
  console.log(balance1, balance2);

  // Irrelevant with the actual transaction, just to know the gasPrice
  const gasPrice = await web3.eth.getGasPrice();
  console.log("Gas Price = ");
  
  console.log(gasPrice);
}

(async () => {
  await interact();
})();
