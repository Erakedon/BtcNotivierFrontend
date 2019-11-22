import React, { Component } from 'react';
import Config from './../../Config';
import axios from 'axios';
import AdressPosting from './AdressPosting/AdressPosting';
import AdressBlock from './AdressBlock/AdressBlock';

class MainPage extends Component {
    state = { 
        adressesList: []
     }

    componentDidMount() {
        this.getUsersList();
    }

    getUsersList() {
        const url = Config.apiAdress + "/all_adresses";
        axios.get(url)
        .then(res => {
            this.setState({adressesList: res.data});
        }, err => {
            this.props.reportActivity("error");
        });
    }

    deleteAdress(id) {
        const url = Config.apiAdress + "/adress/" + id;
        axios.delete(url)
        .then(res => {
            this.props.reportActivity("addressDelete");
            this.getUsersList();
        }, err => {
            this.props.reportActivity("error");
        });
    }

    goToAdressView(adressId) {
        this.props.history.push("/adressview/" + adressId);
    }

    checkIfAdressOnList(addressToCheck) {
        let theSameAddressFound = false;
        this.state.adressesList.forEach(el => {
            if(addressToCheck === el.adress) theSameAddressFound = true;
        });
        return theSameAddressFound;
    }

    render() { 
        let adressesListToDisplay =[];

        this.state.adressesList.forEach(el => {
            adressesListToDisplay.push(
            <AdressBlock 
            adress={el.adress} 
            key={el.id} 
            onAdressClick={() => {this.goToAdressView(el.id)}}
            onDeleteClick={() => {this.deleteAdress(el.id)}} />);
        });
        return ( 
            <div className="MainPage page">
                <div className="moduleContainer">
                    <div className="title">Addresses list</div>

                    <AdressPosting 
                        refreshAdresses={() => {this.getUsersList()}}
                        checkIfAdressOnList={addressToCheck => {return this.checkIfAdressOnList(addressToCheck)}}
                        reportActivity={this.props.reportActivity} />
                    <div className="adressesList">
                        {adressesListToDisplay}
                    </div>

                </div>
            </div>
         );
    }
}
 
export default MainPage;