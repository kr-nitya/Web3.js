const Web3 = require('web3');
const web3 = new Web3('HTTP://127.0.0.1:7545');
const privateKey = '0x4651f9c219fc6401fe0b3f82129467c717012287ccb61950d2a8ede0687857ba';
const account = web3.eth.accounts.privateKeyToAccount(privateKey);
async function signTransaction() {
  try {
    const transactionObject = {
      from: account.address,
      to: '0x05ea0de7B461359A026E5Bd5826011B35524aF5e',
      value: '0x1',
      gas: '300000',
      gasPrice: await web3.eth.getGasPrice(),
    };
    const signedTransaction = await account.signTransaction(transactionObject);
    console.log(signedTransaction);
  } catch (error) {
    console.error('An error occurred while signing the transaction:', error);
  }
}

signTransaction();
