import React, { Component } from 'react';
import {TextField, Grid, Snackbar} from '@material-ui/core';
import Topbar from '../common/topbar';
import './landing.css';
import axios from 'axios';
import urls from '../common/urls';

let BASE_URL = urls.BASE_URL;

class Landing extends Component {
  state = {
    name: '',
    statement: '',
    solution: '',
    track: '',
    challenge: '',
    techStack: '',
    futureWork: '',
    gitLink: '',
    members: '',
    projImage: '',
    openSnackbar: false,
    msgSnackbar: '',
    vertical: 'top',
    horizontal: 'center'
  }
  handleChange = name => event => {
    if(name==='projImg' && event.target.files) {
      let file = this.file.files[0];
      this.setState({projImage: file});
      document.getElementById('val').textContent = event.target.value.replace(/C:\\fakepath\\/i, '');
    }
    else {
        this.setState({[name]: event.target.value});
    }
  };

  imgBtnClicked = () => {
    let elem = document.getElementById('proj-img');
    let event = new Event('click');
    elem.dispatchEvent(event);
    this.handleChange('projImg');
    // console.log(event);
  }

  onClose = () => {
		this.setState({openSnackbar: false});
	}

  submit = (e) => {
    e.preventDefault();
    let form = new FormData();
    let {name, statement, solution, challenge, track, techStack, futureWork, gitLink, members, projImage} = this.state;
    form.append('title', name);
    form.append('problem', statement);
    form.append('track', track);
    form.append('solution', solution);
    form.append('challenges', challenge);
    form.append('techStack', techStack);
    form.append('future', futureWork);
    form.append('github', gitLink);
    form.append('team', members);
    form.append('image', projImage);
    // let config = {
    //   headers : {'Authorization':'Bearer '+cookie},
    // };
    axios.post(`${BASE_URL}/addProject`, form)
    .then(resp=> {
      let data = resp.data;
      // console.log(data);
      if(data.success===false) {
        this.setState({openSnackbar: true, msgSnackbar: data.message});
      }
      else if(data.success) {
        this.setState({openSnackbar: true, 
          msgSnackbar: 'Congratulations! You have submitted successfully!'})
      }
    })
    .catch(err=> {
      console.log(err);
      this.setState({openSnackbar: true, 
      msgSnackbar: 'Please check your internet connection and try again!'});
    })
  }

  render() {
    let {vertical, horizontal} = this.state;
    return (
      <div>
        <Topbar />
        <Grid container >
          <Grid item lg={4} md={5} xs={12}>
            <form onSubmit={this.submit}>
              <TextField
                id="standard-name"
                label="Project Name"
                multiline
                spellcheck={false}
                value={this.state.name}
                onChange={this.handleChange('name')}
                margin="normal"
              />
              <div className="single-line">
                <TextField
                  label="Problem Statement"
                  multiline
                  spellcheck={false}
                  value={this.state.statement}
                  onChange={this.handleChange('statement')}
                  className="single-line-input"
                  margin="normal"
                />
                <select className="track" onChange={this.handleChange('track')}>
                  <option value="">Select Track</option>
                  <option value="defence">Defence</option>
                  <option value="dm">Disaster Mitigation</option>
                  <option value="space">Space</option>
                  <option value="socialTransformation">Social Transformation</option>
                  <option value="visIntl">Vision Intelligence</option>
                  <option value="construction">Construction</option>
                  <option value="women">Women in Tech</option>
                  <option value="fintech">Fintech</option>
                </select>
              </div>
              <TextField
                label="Solution"
                multiline
                spellcheck={false}
                value={this.state.solution}
                onChange={this.handleChange('solution')}
                margin="normal"
              />
              <TextField
                label="Challenge Faced"
                multiline
                spellcheck={false}
                value={this.state.challenge}
                onChange={this.handleChange('challenge')}
                margin="normal"
              />
              <TextField
                label="Technical Stack"
                multiline
                spellcheck={false}
                value={this.state.techStack}
                onChange={this.handleChange('techStack')}
                margin="normal"
              />
              <TextField
                label="Future Work"
                multiline
                spellcheck={false}
                value={this.state.futureWork}
                onChange={this.handleChange('futureWork')}
                margin="normal"
              />
              <TextField
                label="Github Link"
                multiline
                spellcheck={false}
                value={this.state.gitLink}
                onChange={this.handleChange('gitLink')}
                margin="normal"
              />
              <TextField
                label="Team Members"
                multiline
                placeholder="(Member1,Member2,...)"
                spellcheck={false}
                value={this.state.members}
                onChange={this.handleChange('members')}
                margin="normal"
              />
              <div className="proj-img">
                <input type='file'
                  id="proj-img"
                  ref={c => {
                    this.file = c;
                  }}
                  multiple="false"
                  onChange={this.handleChange('projImg')}
                 />
                <span id='val'>Select Project Image</span>
                {/* <span id='file-btn' onClick={this.imgBtnClicked}>Choose Image</span> */}
              </div>
              <button type="submit" className="submit-btn">SUBMIT</button>
            </form>
          </Grid>
          <Grid item md={1} lg={1}></Grid>
          <Grid item xs={12} md={6} lg={7} className="right-text">
            <div>
              <h1 className="color-white">
                Submit & Take a look at all the<br/> other projects being developed here<br/> at Code2Create’19
              </h1>
            </div>
            <div><button className="view-btn" onClick={()=> this.props.history.push('/projects')}>VIEW</button></div>
          </Grid>
        </Grid>
        <Snackbar
          anchorOrigin={{ vertical, horizontal }}
          open={this.state.openSnackbar}
          message={this.state.msgSnackbar}
          autoHideDuration={4000}
          onClose={this.onClose}
        />
      </div>
    )
  }
}

export default Landing;
