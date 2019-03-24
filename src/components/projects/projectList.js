import React, { Component } from 'react';
import {ExpansionPanel, ExpansionPanelSummary, 
  ExpansionPanelDetails} from '@material-ui/core';
import ArrowDropDown from '@material-ui/icons/ArrowDropDown';
// import axios from 'axios';
import urls from '../common/urls';
import Project from './project';

let BASE_URL = urls.BASE_URL;

class ProjectList extends Component {
  constructor(props) {
    super(props);
      this.state = {
        projects: [],
        // loading: false
      }
  }

  render() {
    let {projects} = this.props;
    let showProjects=[];
    console.log(projects.length);
    for(let i=0;i<projects.length;i++) {
      let project = projects[i];
      let showProject = (
        <ExpansionPanel className="project-item">
          <ExpansionPanelSummary className="project-name" expandIcon={<ArrowDropDown/>}>
            <p>{project.title}</p>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Project problem={project.problem} solution={project.solution} 
            challenges={project.challenges} techStack={project.techStack} 
            gitLink={project.github} team={project.team} futureWork={project.future} />
          </ExpansionPanelDetails>
        </ExpansionPanel>
      );
      showProjects.push(showProject);
    }
    console.log(showProjects.length);
      return (
        <div className="">
          {/* <CircularProgress className="theme-color" /> */}
          {/* {loading? <CircularProgress className="circular-loader theme-color" />: showProjects} */}
          {showProjects}
        </div>
      )
  }
}
export default ProjectList;
