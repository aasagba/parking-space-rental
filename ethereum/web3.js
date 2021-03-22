import Web3 from 'web3';

let web3;

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
    // we are in browser and metamask running
    web3 = new Web3(window.web3.currentProvider);
} else {
    // we are on the server OR user not running metamask
    // setup own provider that works through Infura
    const provider = new Web3.providers.HttpProvider(
        'https://ropsten.infura.io/v3/49718db073eb4fa4bf9e76e9e4308b6e'
    );
    web3 = new Web3(provider);
}

export default web3;

