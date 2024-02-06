const Web3 = require("web3");

// 1st - initialize the provider
const web3 = new Web3('http://localhost:7545');

// 2nd - add an account to wallet
const privateKey = '0x4651f9c219fc6401fe0b3f82129467c717012287ccb61950d2a8ede0687857ba';
const account = web3.eth.accounts.wallet.add(privateKey); // Remove `.get(0)` as it's unnecessary

// Make sure the account has enough eth on balance to send the transaction

// 3rd - sign and send the transaction
// Magic happens behind sendTransaction. If a transaction is sent from an account that exists in a wallet, it will be automatically signed.
const transaction = web3.eth.sendTransaction({
  from: account.address, // Use `account.address` instead of `account?.address`
  to: '0x3d78a05BaE516Cc4b1E03570AEAFA1f9b6B9C3c5',
  value: '0x1',
  gas: '21000',
  // other transaction's params
});

// 4th - listen to the transaction events
transaction
  .on('sending', (sending) => {
    // Sending example
    console.log('Sending:', sending);
  })
  .on('sent', (sent) => {
    // Sent example
    console.log('Sent:', sent);
  })
  .on('transactionHash', (transactionHash) => {
    // Transaction hash example
    console.log('Transaction Hash:', transactionHash);
  })
  .on('confirmation', (confirmation) => {
    // Confirmation example
    console.log('Confirmation:', confirmation);
  })
  .on('error', (error) => {
    // Error example
    console.error('Error:', error);
  });
