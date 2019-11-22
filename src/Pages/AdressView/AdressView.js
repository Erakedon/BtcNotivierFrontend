import React, { Component } from 'react';
import Config from './../../Config';
import axios from 'axios';
import TransactionBlock from './TransactionBlock/TransactionBlock';

class AdressView extends Component {
    state = { 
        transactionsList: [],
        address: ""
    }

    componentDidMount() {
        this.getTransactionsList();
        setInterval(() => {
            this.getTransactionsList();
        }, 60000);
    }

    getTransactionsList() {
        const url = Config.apiAdress + "/all_transactions_of_address/" + this.getAddressId();
        axios.get(url)
        .then(res => {
            this.setState({
                transactionsList: res.data.transactions,
                address: res.data.address
            });
        }, err => {
            this.props.reportActivity("error");
        });
    }

    getAddressId() {
        return this.props.location.pathname.split("/")[2];
    }

    render() { 
        let transactionsToDisplay = [];

        this.state.transactionsList.forEach(tx => {
            transactionsToDisplay.push(
                <TransactionBlock 
                key={tx.txIndex}
                txIndex={tx.txIndex}
                confirmationsNumber={tx.confirmationsNumber}
                btcOut={tx.btcOut}
                additionalClassName={tx.confirmationsNumber >= 4 ? "green" : "grey"} />
            );
        });

        if(this.state.transactionsList.length === 0) 
            transactionsToDisplay.push(<div key="noData">-- No data --</div>)

        return ( 
            <div className="AdressView page">
                <div className="moduleContainer">
                <div className="title">Transaction list of</div>
                <div className="subTitle">{this.state.address}</div>

                <div className="transactionsList">
                    {transactionsToDisplay}
                </div>
                </div>
            </div>
         );
    }
}
 
export default AdressView;