// use path to make sure it works cross OS
const path = require('path');
const fs = require('fs-extra');
const solc = require('solc');

// delete entire 'build' folder to remove redundant contracts
const buildPath = path.resolve(__dirname, 'build');
fs.removeSync(buildPath);

// read 'RentalCampaign.sol' from the contracts folder
const campaignPath = path.resolve(__dirname, 'contracts', 'RentalCampaign.sol');
// read raw source code from contract
const source = fs.readFileSync(campaignPath, 'utf-8');

// Compile both contracts with solidity compiler
const output = solc.compile(source, 1).contracts;

// write output to the 'build' dirctory
// creates build folder if needed
fs.ensureDirSync(buildPath); 

for (let contract in output) {
    fs.outputJSONSync(
        path.resolve(buildPath, `${contract.replace(':', '')}.json`),
        output[contract]
    );
}