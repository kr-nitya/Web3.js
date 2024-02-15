const Web3 = require('web3');

const web3 = new Web3('HTTP://127.0.0.1:7545');

// Create a wallet with 1 account inside
const wallet = web3.eth.accounts.wallet.create(1);

// Convert the message to a hex string (required for signing)
const message = web3.utils.utf8ToHex('Hello world');

// Sign the message using the first account in the wallet
const signedMessage = wallet[0].sign(message);

console.log(signedMessage);
