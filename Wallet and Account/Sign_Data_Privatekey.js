const Web3 = require('web3');
const web3 = new Web3('HTTP://127.0.0.1:7545');
const privateKey = '0x4651f9c219fc6401fe0b3f82129467c717012287ccb61950d2a8ede0687857ba';
const message = 'Hello world';
const signedMessage = web3.eth.accounts.sign(message, privateKey);
console.log(signedMessage);
