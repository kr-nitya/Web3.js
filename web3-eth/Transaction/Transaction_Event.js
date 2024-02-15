const Web3 = require("web3");

// 1st - initialize the provider0x88cC529B8629cB36CF686E78411C06Db35819751
const web3 = new Web3('http://localhost:7545');

// 2nd - add an account to wallet
const privateKey = '0xb86980f9f4f89c046c5fe4c76dcf6b027309e6e25b33bf362b3787b281980d15';
const account = web3.eth.accounts.wallet.add(privateKey); // Remove `.get(0)` as it's unnecessary

// Make sure the account has enough eth on balance to send the transaction

// 3rd - sign and send the transaction
// Magic happens behind sendTransaction. If a transaction is sent from an account that exists in a wallet, it will be automatically signed.
const transaction = web3.eth.sendTransaction({
  from: account.address, // Use `account.address` instead of `account?.address`
  to: '0x06bd02b2845A1117fa12ceac1E1F39fcC238396a',
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
