const Web3 = require("web3");
const url = 'HTTP://127.0.0.1:7545';
const wsProvider = new Web3.providers.WebsocketProvider(url);
const web3 = new Web3(wsProvider);
web3.eth.getBlockNumber().then(console.log);

