import React, { Component } from 'react';
import {Route, BrowserRouter, Switch} from 'react-router-dom';
import Landing from './components/landing';
import Projects from './components/projects';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Landing} exact />
          <Route path="/projects" component={Projects} exact />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
