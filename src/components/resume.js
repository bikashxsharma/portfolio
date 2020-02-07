import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';


class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src="https://avatars1.githubusercontent.com/u/36207673?s=460&v=4"
                alt="avatar"
                style={{ width:'300px'}}
                 />
            </div>

            <h2 style={{paddingTop: '2em'}}>Bikash Sharma</h2>
            <h4 style={{color: 'grey'}}>Front-end Developer & UX/UI Designer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>I am a front-end developer in compiling. I have several years of experience designing websites. </p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Located</h5>
            <p>Helsinki, Finland</p>
            <h5>Phone</h5>
            <p>0440347283</p>
            <h5>Email</h5>
            <p>bikashxsharma[att]gmail.com</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>

             <h2>Experience</h2>

                 <Experience
                    startYear={2016}
                    endYear={2020}
                    jobName="Velkko Oy"
                    jobTitle="Web Developer & UX/UI Designer"
                    jobDescription="Velkko is a digital agency which focuses on web design and digital marketing. I was engaged in developing and enhacing UX's for clients website and responsive web applications. I am also incharge of maintaining client's hosting, domain name and other technical requirement such as reservation system. I have designed several websites using bootstrap framework and Wordpress. I have also engaged in developing custom CMS for some of the restaurant's website.  "
                    mainHihlights=""
                    />

                <Experience
                startYear={2017}
                endYear={2019}
                jobName="Doctual Oy"
                jobTitle="Product Designer"
                jobDescription="I was the Product Designer in Doctual. Doctual was a company building platform for lawyers and startups. I managed product development and collaborated with stakeholders. Beside product design tools, I used google Apps, Digital Ocean, Jira and product management systems."
                mainHihlights=""
                />

            
                    <hr style={{borderTop: '3px solid #e22947'}} />
            <h2>Education</h2>


            <Education
              startYear={2020}
              endYear={'Present'}
              schoolName="Haaga-Helia"
              degreeName="Masters in Business Technology"
              schoolDescription="This is a Master Degree in Business Technologies. Main courses are:"
              mainHihlights="Robotic Automation | Data Analytics | Digital Service Design | AI in Modern Business"
               />

               <Education
                 startYear={2012}
                 endYear={2016}
                 schoolName="Metropolia UAS"
                 degreeName="Bachelor in Media Engineering"
                 schoolDescription="Degree in Media Engineering was mix of IT and Media. Main hightlihts were : "
                 mainHihlights="Web Programming | Project Management | Software Production | Usability and UX design | Media Technolgoy | Hybrid Media and Augmented Reality."
                  />

                
                <Education
                 startYear={2009}
                 endYear={20012}
                 schoolName="Turku UAS"
                 degreeName="Bachelor in IT"
                 schoolDescription="At Turku University of Applied Sciences, I studied several courses. Main hightlihts were : "
                 mainHihlights="Networking | Project Management | Basics of Programming | Business Development | Engineering Mathematics."
                  />
                

             
              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Skills</h2>
              <Skills
                skill="HTML/CSS"
                progress={100}
                />
                <Skills
                  skill="Bootstrap"
                  progress={100}
                  />
                  <Skills
                    skill="JavaScript"
                    progress={80}
                    />
                    <Skills
                      skill="React"
                      progress={65}
                      />
                      <Skills
                      skill="PHP/Mysql"
                      progress={45}
                      />
                    <Skills
                      skill="Wordpress"
                      progress={50}
                      />


          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;