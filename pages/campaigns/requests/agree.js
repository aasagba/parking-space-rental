import React, { Component } from 'react';
import { Form, Button, Message, Input } from 'semantic-ui-react';
import Campaign from '../../../ethereum/rentalcampaign';
import web3 from '../../../ethereum/web3';
import { Link, Router } from '../../../routes';
import Layout from '../../../components/layout';
import SemanticDatepicker from 'react-semantic-ui-datepickers';
// import 'react-semantic-ui-datepickers/dist/react-semantic-ui-datepickers.css';

class RequestAgree extends Component { // index, startdate, enddate
    state = {
        startDate: 0,
        endDate: 0,
        loading: false,
        errorMessage: ''
    };

    static async getInitialProps(props) {
        console.log(`props.query.address: ${props.query.address}`);
        const campaign = Campaign(`${props.query.address.toString()}`);
        // console.log(`props: ${JSON.stringify(props)}`);
        const id = props.query.id;
        const { address } = props.query;

        const request = await campaign.methods.rscRequests(id.toString()).call();
        console.log(`request description: ${request.description}`)

        return { address, request, id };
    }

    onSubmit = async event => {
        event.preventDefault();

        const campaign = Campaign(this.props.address);
        const { startDate, endDate } = this.state;
        const index = this.props.id;
        console.log(`index is: ${index}`);

        this.setState({ loading: true, errorMessage: '' });
        // console.log(`startDate: ${startDate}`);
        // console.log(`endDate: ${endDate}`);
        // console.log(`request: ${JSON.stringify(this.props.request)}`);
        console.log(`this.props.request.price: ${this.props.request.price}`);
        
        try {
            const accounts = await web3.eth.getAccounts();
            await campaign.methods.agreeRequest(
                parseInt(index, 10), 
                parseInt(startDate, 10),
                parseInt(endDate, 10)
            ).send({ 
                from: accounts[0],
                value: web3.utils.toWei(this.props.request.price, 'ether')
            });

            Router.pushRoute(`/campaigns/${this.props.address}/requests`);
        } catch (err) {
            this.setState({ errorMessage: err.message });
        } 

        this.setState({ loading: false });
    }

    render () {
        return (
            <Layout>
                <Link route={`/campaigns/${this.props.address}/requests`}>
                    <a>
                        Back
                    </a>
                </Link> 
                <h3>Agree a Request</h3>
                <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
                <Form.Field>
                        <label>Description</label>
                        {this.props.request.description}
                    </Form.Field>

                    <Form.Field>
                        <label>Start Date</label>
                        <Input 
                            value={this.state.startDate}
                            onChange={event => 
                                this.setState({ startDate: event.target.value })}
                        />
                        <SemanticDatepicker onChange={(event, data) => 
                                this.setState({ startDate: data.value.toString() })} />
                    </Form.Field>

                    <Form.Field>
                        <label>End Date</label>
                        <Input 
                            value={this.state.endDate}
                            onChange={event => 
                                this.setState({ endDate: event.target.value })}
                        />
                        <SemanticDatepicker onChange={(event, data) => 
                                this.setState({ endDate: data.value.toString() })} />
                    </Form.Field>

                    <Message 
                        error 
                        header="Ooops!"
                        content={this.state.errorMessage}
                    />

                    <Button primary loading={this.state.loading}>Confirm!</Button>
                </Form>
            </Layout>
        );
    }

}

export default RequestAgree;