const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());

const compiledFactory = require('../ethereum/build/RentalCampaignFactory.json');
const compiledRentalCampaign = require('../ethereum/build/RentalCampaign.json');

let accounts;
let factory;
let rentalCampaignAddress;
let rentalCampaign;

beforeEach(async () => {
    accounts = await web3.eth.getAccounts();

    factory = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
        .deploy({ data: compiledFactory.bytecode })
        .send({ from: accounts[0], gas: '1000000'});

    await factory.methods.createRentalCampaign().send({
        from: accounts[0],
        gas: '1000000'
    });

    // will return array of addresses
    [campaignAddress] = await factory.methods.getDeployedRentalCampaigns().call();
    campaign = await new web3.eth.Contract(
        JSON.parse(compiledRentalCampaign.interface),
        campaignAddress
    );
});

describe('Campaigns', () => {

    it('deploys a factory and a campaign', () => {
        assert.ok(factory.options.address);
        assert.ok(campaign.options.address);
    });

    it('marks caller as the campaign manager', async () => {
        const manager = await campaign.methods.manager().call();
        assert.strictEqual(accounts[0], manager);
    });

    it('allows a manger to create a parking request contract', async () => {
        await campaign.methods
            .createRequest('Garage', accounts[0], '11')
            .send({ from: accounts[0], gas: '1000000' });

        const requestCount = await campaign.methods.getRequestsCount().call();
        assert.strictEqual('1', requestCount);
    });

    it('requires the payment value to be equal to contractual price', async () => {
        await campaign.methods
            .createRequest('Garage', accounts[0], '11')
            .send({ from: accounts[0], gas: '1000000' });

        try {
            await campaign.methods
                .agreeRequest(0, 1, 2)
                .send({
                    value: '1',
                    from: accounts[1]
                });

            assert(false);
        } catch (err) {
            assert(err);
        }
    });

    it('allows a lessee to make a parking request transaction', async () => {
        await campaign.methods
            .createRequest('Garage', accounts[0], '11')
            .send({ from: accounts[0], gas: '1000000' });

        await campaign.methods
            .agreeRequest(0, 1, 2)
            .send({
                value: '11',
                from: accounts[1]
            });

        const request = await campaign.methods.rscRequests(0).call();
        assert.strictEqual(request.lessee, accounts[1]);
    });

    it('process requests', async () => {
        // create parking contract
        await campaign.methods
            .createRequest('Driveway', accounts[0], web3.utils.toWei('5', 'ether'))
            .send({ from: accounts[0], gas: '1000000' });

        // agree contract
        await campaign.methods
            .agreeRequest(0, 1, 2)
            .send({
                value: web3.utils.toWei('5', 'ether'),
                from: accounts[1]
            });

        // finalise transaction
        await campaign.methods.finaliseRequest(0)
            .send({
                from: accounts[0],
                gas: '1000000'
            });

        // check balance of recipient account
        let balance = await web3.eth.getBalance(accounts[0]);
        balance = web3.utils.fromWei(balance, 'ether');
        balance = parseFloat(balance);
        
        console.log(balance);
        assert(balance > 104);
    })

});