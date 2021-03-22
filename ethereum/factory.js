import web3 from './web3';
import CampaignFactory from './build/RentalCampaignFactory.json';

// instance of deployed copy of CampaignFactory
const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0xB9c15D573D076f37C20222c0d4B67E9511b5c3aD'
);

export default instance;