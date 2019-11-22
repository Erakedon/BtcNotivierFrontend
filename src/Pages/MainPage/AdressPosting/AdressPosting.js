import React, { Component } from 'react';
import Config from './../../../Config';
import axios from 'axios';

class AdressPosting extends Component {
    state = { 
        inputValue: "",
        inputValid: false
     }

    postAdress() {
        if(this.props.checkIfAdressOnList(this.state.inputValue)) {
            this.props.reportActivity("alreadyAdded");
            return;
        }

        const url = Config.apiAdress + "/add_adress";
        axios({
            method: 'post',
            url: url,
            'Content-Type': 'application/json',
            dataType: 'json',
            data: {adress: this.state.inputValue},
            headers: {
                'Access-Control-Allow-Origin': "*"
            }
        }).then(res => {
            this.props.reportActivity("addressAdd");
            this.props.refreshAdresses();

        },err => {
            this.props.reportActivity("error");
        });
    }

    inputChange(value) {
        this.setState({
            inputValue: value,
            inputValid: this.validateInput(value)
        });
    }

    validateInput(value) {
        return value.length === 34;
    }

    render() { 
        return ( 
            <div className="AdressPosting">
                <input  type="text" 
                        value={this.state.inputValue} 
                        onChange={({target: {value}}) => {this.inputChange(value)}} />
                <button className={this.state.inputValid ? "active" : ""} 
                        onClick={() => {if(this.state.inputValid) this.postAdress()}}>Add</button>                
            </div>
         );
    }
}
 
export default AdressPosting;