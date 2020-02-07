import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';
import { Link } from 'react-router-dom';


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
            <CardTitle style={{color: '#fff', height: '200px', background: 'url(http://bikashxsharma.com/projects/thumbnails/clean_now_thumbnail.png) center / cover'}} >CleanNow</CardTitle>
            <CardText>
              A site designed completely using HTML & CSS. I used combination of CSS grid and flex to make it responsive.
            </CardText>
            <CardActions className="card-action" border>
              <Button colored onClick={()=> window.open("https://github.com/bikashxsharma/cleaning-company", "_blank")}>GitHub</Button>
              <Button colored onClick={()=> window.open("http://bikashxsharma.com/projects/cleaning-company/", "_blank")}>Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://bikashxsharma.com/projects/thumbnails/canadanepal_thumbnail.png) center / cover'}} >Entertainment Portal</CardTitle>
            <CardText>
            Entertainment portal website designed completely using HTML & CSS. Later to be converted to React.
            </CardText>
            <CardActions className="card-action" border>
             
             <Button colored onClick={()=> window.open("https://github.com/bikashxsharma/canadanepal", "_blank")}>GitHub</Button>
            
              
              <Button colored onClick={()=> window.open("http://bikashxsharma.com/projects/canadanepal/", "_blank")}>Demo</Button>
             
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
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://bikashxsharma.com/projects/thumbnails/massage_thumbnail.png) center / cover'}} >Massage Clinic</CardTitle>
            <CardText>
            A responsive single page website for a massage clinic in Helsinki.
            </CardText>
            <CardActions className="card-action" border>
             
              <Button colored onClick={()=> window.open("https://hiraethhieronta.fi/", "_blank")}>Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://bikashxsharma.com/projects/thumbnails/velkko_thumbnail.png) center / cover'}} >Web Design Agency</CardTitle>
            <CardText>
            This is a website project for a landing page of web design company.
            </CardText>
            <CardActions className="card-action" border>
             
              <Button colored onClick={()=> window.open("https://velkko.fi", "_blank")}>Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>



        </div>
      )
    } else if(this.state.activeTab === 2) {
      return (
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://bikashxsharma.com/projects/thumbnails/drawing_thumbnail.png) center / cover'}} >Drawing App</CardTitle>
            <CardText className="dark-title">
              A site designed completely using HTML & CSS. I used combination of CSS grid and flex to make it responsive.
            </CardText>
            <CardActions className="card-action" border>
              <Button colored onClick={()=> window.open("https://github.com/bikashxsharma/canvasDrawApp", "_blank")}>GitHub</Button>
              <Button colored onClick={()=> window.open("http://bikashxsharma.com/projects/canvasDrawApp/", "_blank")}>Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://bikashxsharma.com/projects/thumbnails/issue_tracker_thumbnail.png) center / cover'}} >Ticket Issue Tracker</CardTitle>
            <CardText>
            Entertainment portal website designed completely using HTML & CSS. Later to be converted to React.
            </CardText>
            <CardActions className="card-action" border>
             
             <Button colored onClick={()=> window.open("https://github.com/bikashxsharma/ticket-issue-tracker", "_blank")}>GitHub</Button>
            
              
              <Button colored onClick={()=> window.open("http://bikashxsharma.com/projects/ticket-issue-tracker/", "_blank")}>Demo</Button>
             
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        {/* Project 3 */}
        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://bikashxsharma.com/projects/thumbnails/guess_thumbnail.png) center / cover'}} >Number Guessing Game</CardTitle>
                    <CardText>
                    Entertainment portal website designed completely using HTML & CSS. Later to be converted to React.
                    </CardText>
                    <CardActions className="card-action" border>
                    
                    <Button colored onClick={()=> window.open("https://github.com/bikashxsharma/guess-number", "_blank")}>GitHub</Button>
                    
                      
                      <Button colored onClick={()=> window.open("https://bikashxsharma.com/projects/guess-number/", "_blank")}>Demo</Button>
                    
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                      <IconButton name="share" />
                    </CardMenu>
                  </Card>

        </div>
      )
    } else if(this.state.activeTab === 3) {
      return (
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://bikashxsharma.com/projects/thumbnails/birdwatch_thumbnail.png) center / cover'}} >Bird Watch App</CardTitle>
            <CardText>
            This is an App to track/report bird's information. Whenever people see a bird they can report about the bird.
            </CardText>
            <CardActions className="card-action" border>
              <Button colored onClick={()=> window.open("https://github.com/bikashxsharma/bird-watch-app", "_blank")}>GitHub</Button>
              <Button colored >Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://bikashxsharma.com/projects/thumbnails/guess_thumbnail.png) center / cover'}} >Portfolio App</CardTitle>
            <CardText>
            This is a portfolio site done in React. Idea is to keep the project grow utilizing the benefits of Component.
            </CardText>
            <CardActions className="card-action" border>
             
             <Button colored onClick={()=> window.open("https://github.com/bikashxsharma/ticket-issue-tracker", "_blank")}>GitHub</Button>
            
              
              <Button colored >Demo</Button>
             
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          </div>
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