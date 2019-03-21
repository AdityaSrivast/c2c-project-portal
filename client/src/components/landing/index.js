import React, { Component } from 'react';
import {TextField} from '@material-ui/core';
import Topbar from '../common/topbar';

class Landing extends Component {
  // state
  state = {
    name: '',
    statement: '',
    track: '',
    solution: '',
    challenge: '',
    techstack: '',
    future: '',
    gitlink: '',
    members: '',
    projimg: ''
  }

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  render() {
    return (
      <div>
        <Topbar/>
        <form>
          <TextField
            id="standard-name"
            label="Name"
            value={this.state.name}
            onChange={this.handleChange('name')}
            margin="normal"
          />
        </form>
      </div>
    );
  }
}

export default Landing;
