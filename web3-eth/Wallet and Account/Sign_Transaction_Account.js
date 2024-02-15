const Web3 = require("web3");
const web3 = new Web3("HTTP://127.0.0.1:7545");
const privateKey =
  "0xb86980f9f4f89c046c5fe4c76dcf6b027309e6e25b33bf362b3787b281980d15";
const account = web3.eth.accounts.privateKeyToAccount(privateKey);
async function signTransaction() {
  try {
    const transactionObject = {
      from: account.address,
      to: "0x06bd02b2845A1117fa12ceac1E1F39fcC238396a",
      value: "0x1",
      gas: "300000",
      gasPrice: await web3.eth.getGasPrice(),
    };
    const signedTransaction = await account.signTransaction(transactionObject);
    console.log(signedTransaction);
    const txReceipt = await web3.eth.sendSignedTransaction(
      signedTransaction.rawTransaction
    );
    console.log("Transaction Receipt:", txReceipt);
  } catch (error) {
    console.error("An error occurred while signing the transaction:", error);
  }
}

signTransaction();
