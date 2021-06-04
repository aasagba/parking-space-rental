import React, { Component } from 'react';
import { Table, Button } from 'semantic-ui-react';
import web3 from '../ethereum/web3';
import Campaign from '../ethereum/rentalcampaign';
import { Link } from '../routes';

class RequestRow extends Component {
    onApprove = async () => {
        // const campaign = Campaign(this.props.address);
        // const accounts = await web3.eth.getAccounts();
        // await campaign.methods.approveRequest(this.props.id).send({
        //     from: accounts[0]
        // });
    };

    onFinalise = async () => {
        // const campaign = Campaign(this.props.address);
        // const accounts = await web3.eth.getAccounts();
        // await campaign.methods.finaliseRequest(this.props.id).send({
        //     from: accounts[0]
        // });
    };

    render() {
        const { Row, Cell } = Table;
        const { id, request, address, approversCount } = this.props;
        // const readyToFinalise = request.approvalCount > approversCount / 2;

        return (
            <Row disabled={request.complete} positive={!request.complete}>
                <Cell>{id}</Cell>
                <Cell>{request.description}</Cell>
                <Cell>{request.price ? web3.utils.fromWei(request.price, 'ether') : '-'}</Cell>
                <Cell>{request.recipient}</Cell>
                {/* <Cell>{request.approvalCount}/{approversCount}</Cell> */}
                <Cell>
                    { request.complete ? null : (
                        <Link route={`/campaigns/${address}/requests/agree/${id}`}>
                            <Button color="green" basic onClick={this.onApprove}>
                                Rent
                            </Button>
                        </Link>
                    )}
                </Cell>
                <Cell>
                    { request.complete ? null : (
                        <Button color="teal" basic onClick={this.onFinalise}>
                            Finalise
                        </Button>
                    )}
                </Cell>
            </Row>
        );
    }
}

export default RequestRow;