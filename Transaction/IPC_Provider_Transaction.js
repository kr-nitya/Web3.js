var Web3 = require("web3");
var net = require("net");

// Define the IPC provider
var ipcProvider = new Web3.providers.IpcProvider("/home/nitya/snap/geth/477/.ethereum/geth.ipc", net);

// Create a Web3 instance using the IPC provider
var web3 = new Web3(ipcProvider);

// Define the main function
async function main() {
    try {
        console.log('Does the provider support subscriptions?:', ipcProvider.supportsSubscriptions());

        // Get the list of accounts in the connected node which is in this case: geth in dev mode.
        const accounts = await web3.eth.getAccounts();
        console.log('Accounts:', accounts);

        // Send a transaction to the network
        const transactionReceipt = await web3.eth.sendTransaction({
            from: accounts[0],
            to: accounts[0], // sending a self-transaction
            value: web3.utils.toWei('0.001', 'ether'),
        });
        console.log('Transaction Receipt:', transactionReceipt);
    } catch (error) {
        console.error('An error occurred:', error);
    }
}

// Call the main function
main();
