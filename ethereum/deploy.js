const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledFactory = require('./build/RentalCampaignFactory.json');

// connect to target network via infura and unlock account for use on it
const provider = new HDWalletProvider(

);

// feed provider to web3 instance
const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();

    console.log('Attempting to deploy from account', accounts[0]);

    const result = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
        .deploy({ data: '0x' + compiledFactory.bytecode })
        .send({ from: accounts[0] })
        .catch(e => {
            // console.error(e);
            throw new Error(e);
        });
    
    console.log('Contract deployed to', result.options.address);
};
deploy();
