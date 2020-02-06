This is my portfolio as a front-end developer. 
I did this portfolio in React. Following some tutorial on YouTube.

## Portofolio Design process : 
# File tree:

1. Setup react base with create-react-app
2. Added react mdl, google's material design library for UI and design stuffs
3. I added basic stuffs. From this tutorial: https://tleunen.github.io/react-mdl/

-- <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';

4. Created component for each pages, resume.js, aboutme.js, projects.js, contact.js
5. Added react router # npm install --save react-router-dom
6. Created main.js file for importing all page component and adding switch to route them
7. Used Grid and Cell from React MDL
8. Project page consist of states to hold active tabs. Used class constructor for that. And used tabs from react MDL.
