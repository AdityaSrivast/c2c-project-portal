import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Landing from './components/landing';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Landing} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
