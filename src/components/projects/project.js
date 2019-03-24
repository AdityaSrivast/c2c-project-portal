import React from 'react';
import {Grid} from '@material-ui/core';

const Project = (props) => {
  return (
    <div style={{width: '100%'}}>
      <Grid container>
        <Grid item md={6} xs={12}>
          <h4>Problem Statement</h4>
          <p>{props.problem}</p>
          <h4>Solution</h4>
          <p>{props.solution}</p>
          <h4>Challenge Faced</h4>
          <p>{props.challenges}</p>
        </Grid>
        <Grid item md={6} xs={12}>
          <h4>Technical Stack</h4>
          <p>{props.techStack}</p>
          <h4>Future Work</h4>
          <p>{props.futureWork}</p>
          <h4>Github Link</h4>
          <p>{props.github}</p>
          <h4>Team</h4>
          <p>{props.team}</p>
        </Grid>
      </Grid>
    </div>
  );
}

export default Project;

