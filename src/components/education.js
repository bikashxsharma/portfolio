import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Education extends Component {
  render() {
    return (
      <Grid>
        <Cell col={4}>
          <p>{this.props.startYear} - {this.props.endYear}</p>
        </Cell>
        <Cell col={8}>
          <h4 style={{ marginTop: '0px' }}>{this.props.schoolName}</h4>
          <h6 style={{ marginTop: '0px' }}>{this.props.degreeName}</h6>
          <p>{this.props.schoolDescription}</p>
          <p style={{ color: '#b3b3b3', fontSize: '1rem' }}>{this.props.mainHihlights}</p>
        </Cell>
      </Grid>
    )
  }
}

export default Education;