import React, {Component} from 'react';
import { Grid, Cell } from 'react-mdl';

class LandingPage extends React.Component{ 
    render(){
        return(
            <div style={{width: '100%', margin:'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        {/* Main contents here */}
                        <div className="hero-img">
                            <img src="https://avatars1.githubusercontent.com/u/36207673?s=460&v=4" alt="Bikash Sharma's photo"/>
                        </div>
                        {/* Main Banner texts */}
                        <div className="banner-text">
                            <h2>Front-end developer with UX/UI knoweldge</h2>
                            <p>HTML/CSS | Bootstrap | JavaScript | React | PHP | UX/UI Design</p>

                        {/* Social Icons and links */}
                            <div className="social-links">
                                <a href="https://www.linkedin.com/in/bikashxsharma/"
                                target="_blank">
                                    <i class="fa fa-linkedin-square"></i>
                                </a>
                                <a href="https://github.com/bikashxsharma/"><i class="fa fa-github-square"></i></a>
                            </div>
                        
                        </div>
                        {/* Banner text ends */}
                    </Cell>

                </Grid>

            </div>

    );
}
}

export default LandingPage;