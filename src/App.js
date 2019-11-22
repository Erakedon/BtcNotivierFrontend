import React, { Component } from 'react';
import { Route, BrowserRouter } from "react-router-dom";
import MainPage from './Pages/MainPage/MainPage';
import AdressView from './Pages/AdressView/AdressView';
import NavBar from './Shared/NavBar/NavBar';
import './style.css';
import RecentActivityBar from './Shared/RecentActivityBar/RecentActivityBar';

class App extends Component {
  state = {
    recentActivities: []
  }

  activitiesCounter = 0;

  removeActivity() {
    let updatedActivities = this.state.recentActivities;
    updatedActivities.shift();

    this.setState({recentActivities: updatedActivities});
  }

  addActivity(activity) {
    let updatedActivities = this.state.recentActivities;
    updatedActivities.push({type: activity, key: this.activitiesCounter++});
    
    this.setState({recentActivities: updatedActivities});

    setTimeout(() => {
      this.removeActivity();
    }, 5000);
  }

render() {
    return (
      <div className="App">
        <header className="App-header">
          <BrowserRouter>
            <Route render={props => <RecentActivityBar {...props} activities={this.state.recentActivities} />} />

            <Route component={NavBar} />
            <Route path="/" exact render={props => <MainPage {...props} reportActivity={activity => {this.addActivity(activity)}} />} />
            <Route path="/adressview" render={props => <AdressView {...props} reportActivity={activity => {this.addActivity(activity)}} />} />
          </BrowserRouter>
        </header>
      </div>
    );
  }
}
export default App;
