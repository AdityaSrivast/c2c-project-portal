import React, { Component } from 'react';
import {Grid, CircularProgress} from '@material-ui/core';
import Topbar from '../common/topbar';
import ProjectsList from './projectList';
import axios from 'axios';
import urls from '../common/urls';
import './project.css';

let BASE_URL = urls.BASE_URL;

class Projects extends Component {
  constructor() {
    super();
    this.state = {
      track: 'construction',
      projects: '',
      loading: true
    }
    this.getProjects('construction');
  }

  getProjects = (track) => {
    // console.log(this.props);
    // let {track} = this.state;
    this.setState({loading: true});
    axios.post(`${BASE_URL}/getProject`, {track: track})
    .then(resp=> {
      // console.log('hi');
      let data = resp.data;
      // console.log(data);
      this.setState({projects: data.data, loading: false});
    }).
    catch(err=> {
      console.log(err);
    });
  }

  handleTrack = name => event => {
    this.getProjects(name);
    this.setState({track: name});
    // console.log(event.target.classList);
  }
  render() {
    let {track, projects, loading} = this.state;
    return (
      <div style={{padding: '2rem'}}>
        <Topbar/>
        <Grid container>
          <Grid item lg={3} md={3} xs={12}>
            <div className="tracks">
              <ul>
                <li onClick={this.handleTrack('construction')} 
                className={track==='construction'?'active':''}>Construction</li>
                <li onClick={this.handleTrack('defence')}
                className={track==='defence'?'active':''}>Defence</li>
                <li onClick={this.handleTrack('devops')}
                className={track==='devops'?'active':''}>DevOps</li>
                <li onClick={this.handleTrack('health')}
                className={track==='health'?'active':''}>Health & Fitness</li>
                <li onClick={this.handleTrack('data')}
                className={track==='data'?'active':''}>Data Integrity</li>
                <li onClick={this.handleTrack('education')}
                className={track==='education'?'active':''}>Education</li>
                <li onClick={this.handleTrack('travel')}
                className={track==='travel'?'active':''}>Recreation & Travel</li>
                <li onClick={this.handleTrack('disability')}
                className={track==='disability'?'active':''}>People with Disabilities</li>
              </ul>
            </div>
          </Grid>
          {/* <Grid item lg={1} md={1} xs={12}></Grid> */}
          <Grid item lg={8} md={8} xs={12} className="project-content">
            {loading && <div style={{textAlign: 'center'}} className="loader-div"><CircularProgress className="theme-color" /></div>}
            {!loading && projects && projects.length>0 ? <ProjectsList track={track} projects={projects} />: 
            !loading && <p className="no-submissions-p">No Submissions on this track yet!!</p>}
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Projects;
