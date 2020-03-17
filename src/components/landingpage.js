import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class LandingPage extends React.Component {
    render() {
        return (
            <div className="landing-content">
                <Grid className="landing-grid">
                    <Cell col={12}>
                        {/* Main contents here */}
                        <div className="hero-img">
                            <img src="https://avatars1.githubusercontent.com/u/36207673?s=460&v=4" alt="Bikash Sharma's photo" />
                        </div>

                        {/* Main Banner texts */}
                        <div className="banner-text">
                            <div className="name-title">Bikash Sharma</div>
                            <h2>Front-end developer with UX/UI knoweldge</h2>
                            <p>HTML/CSS | Bootstrap | JavaScript | React | PHP | Wordpress || UX/UI Design </p>

                            {/* Social Icons and links */}
                            <div className="social-links">
                                <a href="https://www.linkedin.com/in/bikashxsharma/"
                                    target="_blank" rel="noopener noreferrer" title="Link to Linkedin">
                                    <i class="fa fa-linkedin-square"></i>
                                </a>

                                <a href="https://github.com/bikashxsharma/"
                                    target="_blank" rel="noopener noreferrer" title="Link to Github">
                                    <i class="fa fa-github-square"></i></a>

                                <a href="https://bikashxsharma.com/pf/pd"
                                    target="_blank" rel="noopener noreferrer" title="UX/UI portfolio">
                                    <i class="fa fa-globe"></i></a>


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