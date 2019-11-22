import React, { Component } from 'react';

class NavBar extends Component {
    state = {  }

    getPageLocation() {
        return this.props.location.pathname.split("/")[1];
    }

    render() { 
        return ( 
            <div className="NavBar">
            <div className={"back " + (
                    this.getPageLocation() === "" ? "hidden" : "")}
                    onClick={() => {this.props.history.goBack()}}>
                    <i className="far fa-arrow-alt-circle-left"></i>
                </div>
            </div>
         );
    }
}
 
export default NavBar;