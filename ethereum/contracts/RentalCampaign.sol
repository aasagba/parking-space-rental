pragma solidity ^0.4.17;

contract RentalCampaignFactory {
    address[] deployedRentalCampaigns;

    function createRentalCampaign() public {
        // creates new contract that gets deployed
        // to the blockchain returns and stores
        // address of newly created Campaign
        address newRentalCampaign = new RentalCampaign(msg.sender);
        deployedRentalCampaigns.push(newRentalCampaign);
    }

    function getDeployedRentalCampaigns() public view returns (address[]) {
        return deployedRentalCampaigns;
    }
}

contract RentalCampaign {
    struct Request {
        string description;
        address recipient;
        address lessee;
        uint256 startDate;
        uint256 endDate;
        uint price;
        bool complete;
    }

    address public manager;
    // All rental smart contract requests
    Request[] public rscRequests;

    // manager restricted modifier
    modifier restricted {
        require(msg.sender == manager);
        _;
    }

    function RentalCampaign(address creator) public {
        // RSC rental campaign creator
        manager = creator;
    }

    function createRequest(string description, address recipient, uint price)
        public restricted {

        Request memory newRequest = Request({
            description: description,
            recipient: recipient,
            lessee: address(0),
            startDate: 0,
            endDate: 0,
            price: price,
            complete: false
        });

        rscRequests.push(newRequest);
    }

    function agreeRequest(uint index, uint256 startDate, uint256 endDate) public payable {
        // get request
        Request storage request =  rscRequests[index];

        // must not already be a complete contract request
        require(!request.complete);

        // populate contractual agreement terms
        request.startDate = startDate;
        request.endDate = endDate;
        request.lessee = msg.sender;

    
        require(msg.value >= request.price);
        request.price = msg.value;
    }

    function finaliseRequest(uint index) public restricted {
        // get request
        Request storage request =  rscRequests[index];
        
        // request must not already be finalised
        require(!request.complete);

        // send money to recipient
        request.recipient.transfer(request.price);

        // mark request as complete
        request.complete = true;
    }

    function getSummary() public view returns (
        uint, address
    ) {
        return (
            rscRequests.length,
            manager
        );
    }

    function getRequestsCount() public view returns (uint) {
        return rscRequests.length;
    }

}