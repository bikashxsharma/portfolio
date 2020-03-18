import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';
import { Link } from 'react-router-dom';


class Projects extends Component {


  render() {
    return (
      <div>


        <Grid>
          <Cell col={12}>
            <div className="content">

              <div className="projects-grid">
                {/* Project 1 */}


                <Card shadow={6} style={{ margin: 'auto' }} className="mdl-cell--4-col grid-each-card">
                  <CardTitle style={{ color: '#fff', height: '250px', background: 'url(http://bikashxsharma.com/projects/thumbnails/hammerIt_thumbnail.png) center / cover' }} ></CardTitle>
                  <CardText>
                    Social Media concept where users can make posts, browse through others' post and react by giving a hammer ( identical to like reaction)
                      </CardText>
                  <CardText className="card-tags">
                    HTML | CSS | React
                      </CardText>
                  <CardActions className="card-action" border>

                    <Button colored onClick={() => window.open("https://hammerit.netlify.com/", "_blank")}>View site</Button>
                    <Button colored onClick={() => window.open("https://github.com/bikashxsharma/hammer-app", "_blank")}>Github</Button>
                  </CardActions>


                </Card>

                {/* Project 2 */}
                <Card shadow={6} style={{ margin: 'auto' }} className="mdl-cell--4-col grid-each-card">
                  <CardTitle style={{ color: '#fff', height: '250px', background: 'url(http://bikashxsharma.com/projects/thumbnails/recipe_thumbnail.png) center / cover' }} ></CardTitle>
                  <CardText>
                    This is a web app that shows recipes based on the item you searched for. I used API from api.edamam.com to fetch Recipe data.
                      </CardText>
                  <CardText className="card-tags">
                    HTML | CSS | React
                      </CardText>
                  <CardActions className="card-action" border>

                    <Button colored onClick={() => window.open("https://my-recipe.netlify.com/", "_blank")}>View site</Button>
                    <Button colored onClick={() => window.open("https://github.com/bikashxsharma/my-recipe", "_blank")}>Github</Button>
                  </CardActions>


                </Card>
                {/* Project 3 */}

                <Card shadow={6} style={{ margin: 'auto' }} className="mdl-cell--4-col grid-each-card">
                  <CardTitle style={{ color: '#fff', height: '250px', background: 'url(http://bikashxsharma.com/projects/thumbnails/gitTrending_thumbnail.png) center / cover' }} ></CardTitle>
                  <CardText>
                    A page that shows weekly trending at Github. Post are fetched from Github API.
                      </CardText>
                  <CardText className="card-tags">
                    HTML | CSS | React
                      </CardText>
                  <CardActions className="card-action" border>

                    <Button colored onClick={() => window.open("https://git-weekly-trending.netlify.com/", "_blank")}>View site</Button>
                    <Button colored onClick={() => window.open("https://github.com/bikashxsharma/weekly-trending", "_blank")}>Github</Button>
                  </CardActions>


                </Card>
              </div>
            </div>

          </Cell>
          <Cell col={12}>
            <div className="content">

              <div className="projects-grid">
                {/* Project 1 */}
                <Card shadow={6} style={{ margin: 'auto' }} className="mdl-cell--4-col grid-each-card">
                  <CardTitle style={{ color: '#fff', height: '200px', background: 'url(http://bikashxsharma.com/projects/thumbnails/birdwatch_thumbnail.png) center / cover' }} ></CardTitle>
                  <CardText>
                    A responsive web application where users can add information about birds.
            </CardText>
                  <CardText className="card-tags">
                    HTML | CSS | React
                   </CardText>
                  <CardActions className="card-action" border>

                    <Button colored onClick={() => window.open("https://birdwatch-app.netlify.com/", "_blank")}>View site</Button>
                    <Button colored onClick={() => window.open("https://github.com/bikashxsharma/bird-watch-app", "_blank")}>Github</Button>
                  </CardActions>


                </Card>
                {/* Project 2 */}

                <Card shadow={6} style={{ margin: 'auto' }} className="mdl-cell--4-col grid-each-card">
                  <CardTitle style={{ color: '#fff', height: '200px', background: 'url(http://bikashxsharma.com/projects/thumbnails/massage_thumbnail.png) center / cover' }} >Massage Clinic</CardTitle>
                  <CardText>
                    A responsive single page website for a massage clinic in Helsinki for a Velko's client.
                   </CardText>
                  <CardText className="card-tags">
                    HTML | CSS | Bootstrap | JavaScript
                   </CardText>
                  <CardActions className="card-action" border>


                    <Button colored onClick={() => window.open("https://hiraethhieronta.fi/", "_blank")}>View site</Button>
                  </CardActions>


                </Card>


                {/* Project 3 */}
                <Card shadow={5} style={{ margin: 'auto' }} className="mdl-cell--4-col grid-each-card">
                  <CardTitle style={{ color: '#fff', height: '200px', background: 'url(http://bikashxsharma.com/projects/thumbnails/rest1_thumbnail.png) center / cover' }} >Restaurant Website</CardTitle>
                  <CardText>
                    A dynamic restaurant website I did for Velkko's.Also, I modified custom CMS to adjust the requirement.
            </CardText>
                  <CardText className="card-tags">
                    HTML | CSS | JavaScript | PHP | MySql
                   </CardText>
                  <CardActions className="card-action" border>
                    <Button colored onClick={() => window.open("https://www.ravintolakantipur.fi/fi/index.php", "_blank")}>View site</Button>

                  </CardActions>

                </Card>
              </div>


            </div>
          </Cell>
        </Grid>


      </div>
    )
  }
}

export default Projects;