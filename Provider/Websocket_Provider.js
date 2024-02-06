import { Web3, WebSocketProvider } from 'web3';
require('dotenv').config();
const ALCHEMY_API = process.env.ALCHEMY_API;
const web3 = new Web3(`https://eth-mainnet.alchemyapi.io/v2/${ALCHEMY_API}`);
await web3.eth.getBlockNumber();	

