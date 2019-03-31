import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


import SerachField from './component/SerachField';
import Groups from './component/Groups';
import Error from './component/Error';
import Chart from './component/Charts';

import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';

class App extends Component {



  render() {
    return (
      <div className="App">
          <header className="App-header">
          <h1>Flickr App</h1>
          <img src={logo} className="App-logo" alt="logo" />
          {/* <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a> */}
          
          <h4>You can Search For Flickr Images and Groups</h4>
          <br/><hr/><br/>
          <BrowserRouter>
            <div className="Nav-link">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/Groups">Groups</NavLink>
              <NavLink to="/Charts">Charts</NavLink>
            </div>        
            <Switch>
              <Route path="/" component={SerachField} exact />
              <Route path="/Groups" component={Groups} />
              <Route path="/Charts" component={Chart} />
              <Route component={Error} />
            </Switch>        
          </BrowserRouter>
          <br/><hr/><br/>
        </header>
      </div>
    );
  }
}

export default App;
