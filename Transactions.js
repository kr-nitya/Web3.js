// const Web3 = require('web3');

// const web3 = new Web3('HTTP://127.0.0.1:7545');

// const account1 = '0x9a3F99c0efB494472fa15D4ebc75A854a4367B5e'; // Your account address 1
// const account2 = '0xD788A0b53bbd5c319deAe5a0B2aA553D399035A6'; // Your account address 2
// //console.log(web3.eth.accounts.create());

// //Check Balance
// // web3.eth.getBalance(account2,(err,result)=>{
// //     console.log("Balance = ",result);
    
// // });
// //Send Ether
// web3.eth.sendTransaction({from:account1,to:account2,value:web3.utils.toWei("1",'ether')})
// .then(()=>{
//     console.log("Money Send");
    
// })
// web3.eth.getBalance(account1,(err,result)=>{
//     console.log("Account 1 Balance = ",web3.utils.fromWei(result,'ether'));
// });
// web3.eth.getBalance(account2,(err,result)=>{
//     console.log("Account 2 Balance = ",web3.utils.fromWei(result,'ether'));
// });


// // const privateKey1 = 0x203618437a56e5ab56b490990b7e03c631d3d34fea0bcf11b3ed6635317fa0eb;
// // const privateKey2 = 0xd08241aa558f1b9f937ab83be9bb6185be86c946616e7f0fa5bdbcbe9af7d2bc

// // var Tx = require('ethereumjs-tx').Transaction
// // const Web3 = require('web3')
// // const web3 = new Web3('https://eth-mainnet.alchemyapi.io/v2/MSNZLs5d-FRkHur6uHS8ljH03aGFVSNY')

// // const account1 = '0x9a3F99c0efB494472fa15D4ebc75A854a4367B5e'; // Your account address 1
// // const account2 = '0xD788A0b53bbd5c319deAe5a0B2aA553D399035A6'; // Your account address 2

// // const privateKey1 = Buffer.from('203618437a56e5ab56b490990b7e03c631d3d34fea0bcf11b3ed6635317fa0eb', 'hex')
// // const privateKey2 = Buffer.from('d08241aa558f1b9f937ab83be9bb6185be86c946616e7f0fa5bdbcbe9af7d2bc', 'hex')

// // web3.eth.getTransactionCount(account1, (err, txCount) => {
// //     const txObject = {
// //       nonce:    web3.utils.toHex(txCount),
// //       to:       account2,
// //       value:    web3.utils.toHex(web3.utils.toWei('0.1', 'ether')),
// //       gasLimit: web3.utils.toHex(21000),
// //       gasPrice: web3.utils.toHex(web3.utils.toWei('0', 'gwei')) // Increase the gas price
// //     };
  
// //     const tx = new Tx(txObject, { 'chain': 'mainnet' });
// //     tx.sign(privateKey1);
  
// //     const serializedTx = tx.serialize();
// //     const raw = '0x' + serializedTx.toString('hex');
  
// //     web3.eth.sendSignedTransaction(raw)
// //       .on('transactionHash', function(txHash){
// //         console.log('Transaction Hash:', txHash);
// //       })
// //       .on('error', function(error){
// //         console.error('Transaction Error:', error);
// //       });
// //   });
  

const Web3 = require('web3');

const web3 = new Web3('HTTP://127.0.0.1:7545');

const account1 = '0x3A44C613C22ef48c596688BE84FA26463484FCb5';
const account2 = '0xE1DAaEdA12e3734A545295a41e6715FecB51ddeD';

web3.eth.sendTransaction({
    from: account1,
    to: account2,
    value: web3.utils.toWei("1", 'ether') // Ensure value is passed as a string
})
    .then(() => {
        console.log("Money Sent");
    })
    .catch((error) => {
        console.error("Error sending money:", error);
    });

web3.eth.getBalance(account1)
    .then((result) => {
        console.log("Account 1 Balance = ", web3.utils.fromWei(result, 'ether'));
    })
    .catch((error) => {
        console.error("Error fetching balance for account 1:", error);
    });

web3.eth.getBalance(account2)
    .then((result) => {
        console.log("Account 2 Balance = ", web3.utils.fromWei(result, 'ether'));
    })
    .catch((error) => {
        console.error("Error fetching balance for account 2:", error);
    });
