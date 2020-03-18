import React, { Component } from 'react';
import './App.css';
/* import react MDL stuffs*/
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from "./components/main"
import { Link } from 'react-router-dom';


class App extends React.Component {

    hideToggle() {
        var selectorId = document.querySelector('.mdl-layout');
        selectorId.MaterialLayout.toggleDrawer();
    }

    render() {
        return (
            <div className="demo-big-content">
                <Layout>
                    <Header className="header-color" title=" " scroll>
                        <Navigation>
                            <Link to="/">Home</Link>
                            <Link to="/projects">Projects</Link>
                            {/*<Link to="/aboutme">About Me</Link>*/}
                            <Link to="/resume">About me</Link>
                            <Link onClick={() => window.open("https://bikashxsharma.com/pf/fe/front_end_BikashSharma.pdf", "_blank")} > Download CV</Link>
                            {/* <Link to="/contact">Contact</Link>*/}
                        </Navigation>
                    </Header>
                    <Drawer className="side-nav" title=" ">
                        <Navigation>
                            <Link to="/" onClick={() => this.hideToggle()} >Home</Link>
                            <Link to="/projects" onClick={() => this.hideToggle()} >Projects</Link>
                            {/*<Link to="/aboutme">About Me</Link>*/}
                            <Link to="/resume" onClick={() => this.hideToggle()}>Resume</Link>
                            {/* <Link to="/contact">Contact</Link>*/}
                        </Navigation>
                    </Drawer>
                    <Content>
                        <div className="page-content" />
                        <Main />
                    </Content>
                </Layout>
            </div>
        );
    }
}

export default App;
