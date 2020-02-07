import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';


class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {

    if(this.state.activeTab === 0){
      return(
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://altaclean.net/wp-content/uploads/2017/01/Commercial-Cleaning-Company-Dallas-300x200.jpg) center / cover'}} >CleanNow</CardTitle>
            <CardText>
              A site designed completely using HTML & CSS. I used combination of CSS grid and flex to make it responsive.
            </CardText>
            <CardActions className="card-action" border>
              <Button colored>GitHub</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >Entertainment Portal</CardTitle>
            <CardText>
            Entertainment portal website designed completely using HTML & CSS. Later to be converted to React.
            </CardText>
            <CardActions className="card-action" border>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>


      )
    } else if(this.state.activeTab === 1) {
      return (
        <div>
              {/* Project 2 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >Massage Clinic</CardTitle>
            <CardText>
            A responsive single page website for a massage clinic in Helsinki.
            </CardText>
            <CardActions className="card-action" border>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >Web Design Agency</CardTitle>
            <CardText>
            This is a website project for a landing page of web design company.
            </CardText>
            <CardActions className="card-action" border>
              <Button colored>GitHub</Button>
              <Button colored>CodePen</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>



        </div>
      )
    } else if(this.state.activeTab === 2) {
      return (
        <div><h1>JavaScript</h1></div>
      )
    } else if(this.state.activeTab === 3) {
      return (
        <div><h1>React</h1></div>
      )
    }
    else if(this.state.activeTab === 4) {
        return (
          <div><h1>PhpMysql</h1></div>
        )
      }

  }



  render() {
    return(
      <div>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>HTML/CSS</Tab>
          <Tab>Bootstrap</Tab>
          <Tab>JavaScript</Tab>
          <Tab>React</Tab>
          <Tab>PHP/MySQL</Tab>
        </Tabs>


          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>


      </div>
    )
  }
}

export default Projects;