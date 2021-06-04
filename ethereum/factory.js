import web3 from './web3';
import CampaignFactory from './build/RentalCampaignFactory.json';

// instance of deployed copy of CampaignFactory
const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0x73BC921B424f55277a680D20b99B88fbF2A20CB6'
);

export default instance;